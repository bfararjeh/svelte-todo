<script>
// @ts-nocheck
    import { fade } from 'svelte/transition';
    import { enhance } from "$app/forms";

    let { description, id, completed } = $props();
    
    let pending = $state(false);
    let editing = $state(false);

</script>


<!-- markup -->

<div>
    <form method="POST" class="flex gap-4 max-w-225 mx-auto" use:enhance={() => {
        pending = true;
        
        return async ({ update}) => {
            await update();
            pending = false;
            editing = false;
        }
    }}>
        <input type="hidden" name="id" value={id}>
        
        {#if editing}
            <input name="description" value={description} {@attach (element) => element.focus()} class="outline-0 p-2 bg-site-accent rounded-xl mt-1 w-175">
        {:else}
            <p class="mt-1 p-2 max-w-175 overflow-x-clip">{description}</p>
        {/if}

        <div class="flex grow"></div>
        
        <div class="max-w-50 flex">
            <!-- completed indicator -->
            <button 
            class="p-2"
            hidden={!completed} 
            disabled={true}
            ><img src="/icons/completed.svg" alt="complete" class="w-6 h-6"/></button>

            <!-- complete todo -->
            <button 
            class="p-2 cursor-pointer disabled:cursor-default opacity-100 disabled:opacity-25"
            hidden={completed || editing} 
            disabled={pending || editing} 
            formaction="?/completeTodo"
            ><img src="/icons/complete.svg" alt="complete" class="w-6 h-6"/></button>

            <!-- complete edit (same look) -->
            <button 
            class="p-2 cursor-pointer disabled:cursor-default opacity-100 disabled:opacity-25"
            hidden={!editing} 
            disabled={pending} 
            formaction="?/editTodo"
            ><img src="/icons/complete.svg" alt="complete" class="w-6 h-6"/></button>
            
            <!-- start edit -->
            <button 
            class="p-2 cursor-pointer disabled:cursor-default opacity-100 disabled:opacity-25"
            hidden={completed} 
            disabled={pending || editing} 
            type="button"
            onclick={() => editing = true}
            ><img src="/icons/edit.svg" alt="edit" class="w-6 h-6"/></button>

            <!-- delete todo -->
            <button
            class="p-2 cursor-pointer disabled:cursor-default opacity-100 disabled:opacity-25"
            disabled={pending || editing}
            formaction="?/deleteTodo"
            ><img src="/icons/trash.svg" alt="delete" class="w-6 h-6" /></button>
        </div>
    </form>
</div>

<!-- end of markup -->