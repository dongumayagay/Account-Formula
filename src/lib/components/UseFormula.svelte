<script>
    import { formulas } from "../stores";

    let useFormulaModal = false;
    let searchTerm = "";

    $: filteredList = $formulas.filter(
        (item) => item.equation.indexOf(searchTerm) !== -1
    );
</script>

<button on:click={() => (useFormulaModal = true)} class=" border p-4 w-full">
    Use formula
</button>

{#if useFormulaModal}
    <div
        on:click|self={() => (useFormulaModal = false)}
        class="fixed bg-black/50 inset-0 p-4"
    >
        <main class="bg-white p-3 h-full md:max-h-96 max-w-lg mx-auto">
            <p>Search formula</p>
            <!-- svelte-ignore a11y-autofocus -->
            <input
                type="text"
                class="w-full text-lg py-2 px-3 border"
                placeholder="A of △ = ( base * height ) / 2"
                autofocus
                bind:value={searchTerm}
            />
            {#each filteredList as formula}
                <p class="text-red">{formula.equation}</p>
            {/each}
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
