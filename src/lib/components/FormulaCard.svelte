<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function clickHandler() {
        dispatch("closeModal");
    }
    export let formula;
</script>

<button on:click={clickHandler} class="py-4 border">
    {formula.equation}
</button>
