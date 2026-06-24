<script>
// @ts-nocheck

	import { enhance } from "$app/forms";

    let pending = $state();
    let submitInput;
</script>


<!-- markup -->

<div class="flex justify-center">
    <form action="?/createTodo" method="POST" use:enhance={() => {
        pending = true;

    return async ({ update }) => {
        await update();
        pending = false;
        submitInput?.focus(); // refocus input to avoid jank
    };
    }}>
        <label class="focus-within:text-white text-site-bg flex flex-col text-center gap-2 text-xs transition-all">
            {!pending ? "press enter to submit" : "submiting..."}
            <input bind:this={submitInput} type="text" name="description" placeholder="type here" required class="w-lg h-12 bg-site-accent rounded-xl p-2 outline-0 text-white">
        </label>
        <button
        class="hidden"
        disabled={pending}
        >submit
        </button>
    </form>
</div>

<!-- end of markup -->