<script>
    import { createEventDispatcher } from "svelte";
    import { selectedFormula } from "../stores";
    const dispatch = createEventDispatcher();

    function clickHandler() {
        dispatch("closeModal");
        $selectedFormula = formula;
    }
    export let formula;
</script>

<button on:click={clickHandler} class="py-4 border">
    {formula.equation}
</button>
