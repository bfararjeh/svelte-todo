<script>
    import { enhance } from "$app/forms";

    let { filterComplete, description, id, completed } = $props();
    let pending = $state();

</script>


<!-- markup -->

<div>
    <form action="?/deleteTodo" method="POST" class="flex gap-4 max-w-225 mx-auto" use:enhance={() => {
        pending = true;
        
        return async ({ update}) => {
            await update();
            pending = false;
        }
    }}>
        <p>{description}</p>
        <input type="hidden" name="id" value={id}>
        <div class="flex grow"></div>
        <p hidden={!completed} class="p-2"><img src="/icons/completed.svg" alt="completed" class="w-6 h-6" /></p>
        
        <button 
        class="p-2 cursor-pointer disabled:cursor-default opacity-100 disabled:opacity-25"
        hidden={completed} 
        disabled={pending} 
        formaction="?/completeTodo"
        ><img src="/icons/complete.svg" alt="complete" class="w-6 h-6"/></button>

        <button 
        class="p-2 cursor-pointer disabled:cursor-default opacity-100 disabled:opacity-25"
        disabled={pending}
        ><img src="/icons/trash.svg" alt="delete" class="w-6 h-6" /></button>
    </form>
</div>

<!-- end of markup -->