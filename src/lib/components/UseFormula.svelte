<script>
    import { formulas } from "../stores";
    import FormulaCard from "./FormulaCard.svelte";

    let useFormulaModal = true;
    let searchTerm = "";

    $: filteredList = $formulas
        .filter((item) => item.equation.indexOf(searchTerm) !== -1)
        .sort((a, b) => a.result < b.result);
</script>

<button on:click={() => (useFormulaModal = true)} class=" border p-4 w-full">
    Use formula
</button>

{#if useFormulaModal}
    <div
        on:click|self={() => (useFormulaModal = false)}
        class="fixed bg-black/50 inset-0 p-4"
    >
        <main
            class="bg-white p-3 h-full md:h-[512px] md:max-h-[90%] gap-2 flex flex-col max-w-lg mx-auto"
        >
            <label>
                <p>Search formula</p>
                <!-- svelte-ignore a11y-autofocus -->
                <input
                    type="text"
                    class="w-full text-lg py-2 px-3 border"
                    placeholder="A of △ = ( base * height ) / 2"
                    autofocus
                    bind:value={searchTerm}
                />
            </label>
            <ul class="flex flex-col gap-2 overflow-y-auto px-2">
                {#each filteredList as formula}
                    <FormulaCard
                        on:closeModal={() => (useFormulaModal = false)}
                        {formula}
                    />
                {/each}
            </ul>
        </main>
    </div>
{/if}

<svelte:window
    on:keydown={(event) => {
        if (event.keyCode == 27) {
            useFormulaModal = false;
        }
    }}
/>
