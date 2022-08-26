<script>
    import { selectedFormula } from "../stores";

    $: modal = !!$selectedFormula;
    let result;
    function submitHandler(event) {
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        // console.log(formData);
        console.log(data);
        result = "test";
    }
    $: console.log($selectedFormula);
</script>

{#if modal}
    <div
        on:click|self={() => (modal = false)}
        class="fixed bg-black/50 inset-0 p-4 grid place-items-center"
    >
        <form
            on:submit|preventDefault={submitHandler}
            class="bg-white p-4 w-full md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col gap-3"
        >
            <h1 class="font-medium uppercase">Enter paramaters</h1>
            <div class="flex flex-col gap-2 md:flex-row items-center text-lg">
                {#each $selectedFormula.expressionArray as item}
                    {#if $selectedFormula.params_placeholder.includes(item)}
                        <input
                            class="w-full py-1 px-3 border"
                            type="number"
                            name={item}
                            placeholder={item}
                            required
                        />
                    {:else}
                        <p>{item}</p>
                    {/if}
                {/each}
            </div>
            <div>
                =
                <span class=" text-lg py-2 px-3">
                    {result ?? $selectedFormula.result}
                </span>
            </div>

            <div class="flex gap-4">
                {#if !result}
                    <button
                        class="flex-1 py-2 bg-blue-500 text-white rounded"
                        type="submit">Solve</button
                    >
                {:else}
                    <button
                        on:click={() => ($selectedFormula = null)}
                        class="flex-1 py-2 bg-green-500 text-white rounded"
                        type="submit">Save</button
                    >
                {/if}
                <button
                    class="flex-1 py-2 bg-red-500 text-white rounded"
                    on:click={() => ($selectedFormula = null)}>Cancel</button
                >
            </div>
        </form>
    </div>
{/if}

<svelte:window
    on:keydown={(event) => {
        if (event.keyCode == 27) {
            modal = false;
        }
    }}
/>
