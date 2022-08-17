<script>
    import { formulas } from "./lib/stores";
    import createFormula from "./lib/utils/createFormula";

    let modalAddFormula = false;
    const toggleAddModal = () => (modalAddFormula = !modalAddFormula);
    let modalUseFormula = true;
    const toggleUseModal = () => (modalUseFormula = !modalUseFormula);
</script>

<div class="h-full flex flex-col">
    <ul class="flex-1 p-4">
        <button on:click={toggleUseModal} class=" border p-4 w-full">
            Use formula
        </button>
    </ul>
    <nav
        class="border-t border-neutral-400 mt-auto grid grid-cols-2 py-3 px-4 gap-3"
    >
        <button on:click={toggleAddModal} class="py-1.5">
            Create new formula
        </button>
        <!-- <button class="py-1.5"> Formula list </button> -->
    </nav>
</div>

{#if modalAddFormula}
    <div on:click|self={toggleAddModal} class="fixed bg-black/50 inset-0 p-4">
        <form class="bg-white p-3 max-w-lg mx-auto">
            <p>Enter new formula</p>
            <!-- svelte-ignore a11y-autofocus -->
            <input
                type="text"
                class="w-full text-lg py-2 px-3 border"
                placeholder="A of △ = ( base * height ) / 2"
                autofocus
            />
        </form>
    </div>
{/if}
{#if modalUseFormula}
    <div on:click|self={toggleUseModal} class="fixed bg-black/50 inset-0 p-4">
        <form class="bg-white p-3 h-full md:max-h-96 max-w-lg mx-auto">
            <p>Search formula</p>
            <!-- svelte-ignore a11y-autofocus -->
            <input
                type="text"
                class="w-full text-lg py-2 px-3 border"
                placeholder="A of △ = ( base * height ) / 2"
                autofocus
            />
        </form>
    </div>
{/if}
