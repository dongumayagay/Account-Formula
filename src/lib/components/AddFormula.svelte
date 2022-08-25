<script>
    import { formulas } from "../stores";
    import createFormula from "../utils/createFormula";
    let addFormulaModal = false;

    function submitHandler(event) {
        const equation = new FormData(event.target).get("equation");
        // @ts-ignore
        $formulas = [...$formulas, createFormula(equation.toString())];
        addFormulaModal = false;
    }
</script>

<button on:click={() => (addFormulaModal = true)} class="py-1.5 text-center">
    Create new formula
</button>
{#if addFormulaModal}
    <div
        on:click|self={() => (addFormulaModal = false)}
        class="fixed bg-black/50 inset-0 p-4"
    >
        <form
            on:submit|preventDefault={submitHandler}
            class="bg-white p-3 max-w-lg mx-auto"
        >
            <p>Enter new formula</p>
            <!-- svelte-ignore a11y-autofocus -->
            <input
                type="text"
                class="w-full text-lg py-2 px-3 border"
                placeholder="A of △ = ( base * height ) / 2"
                name="equation"
                autofocus
            />
        </form>
    </div>
{/if}

<svelte:window
    on:keydown={(event) => {
        if (event.keyCode == 27) {
            addFormulaModal = false;
        }
    }}
/>
