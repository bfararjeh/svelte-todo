<script>
// @ts-nocheck

    import SubmitTodo from "$lib/SubmitTodo.svelte";
    import TodoElement from "$lib/TodoElement.svelte";

    let { data } = $props();
    let filter = $state("all");

    let filteredTodos = $derived(
        filter === "complete" ? data.todos.filter(t => t.complete)
        : filter === "incomplete" ? data.todos.filter(t => !t.complete)
        : data.todos
    );

    function cycleFilter() {
        if (filter === "all") filter = "complete";
        else if (filter === "complete") filter = "incomplete";
        else filter = "all";
    }

</script>

<!-- markup -->

<div class="flex flex-col gap-12 font-roboto">
    <div class="flex flex-col gap-6 justify-center">
        <h1 class="text-center">Learn ToDo more, with Svelte.</h1>
        <p class="flex text-center justify-center w-250">A small app created as an introduction to Svelte and SvelteKit. Utilises components in each ToDo element as well as the submit box. Uses some Svelte native logic with &lbrace;#each&rbrace; to iterate over each ToDo item and spread props to the component. Currently using a simple JavaScript Map in place of a database. Styled with Tailwind CSS.</p>
        
        <p class="border-t-2 border-site-accent"></p>
        <div class="flex justify-center gap-12 h-20 items-center">
            <SubmitTodo />
            <button
            class="w-60 mt-5 transition-all flex gap-2 justify-center"
            onclick={() => cycleFilter()}>
                <img src="/icons/filter.svg" alt="delete" class="w-7 h-7" /> {filter}
            </button>
        </div>
    </div>
    
    <div class="flex flex-col text-center">
        <div class="flex flex-col gap-5 overflow-y-scroll h-[50vh] scrollbar-track-site-accent scrollbar-thumb-site-lite scrollbar-thin">
            {#each filteredTodos as todo}
                <TodoElement {...todo}/>
            {/each}
        </div>
    </div>
</div>

<!-- end of markup -->