<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>


<div class="flex flex-col min-h-screen">
	<header class="font-fatface text-8xl text-center mt-8 mb-8">
		Svelte-ToDo
	</header>

	<main class="flex-1 mx-auto max-w-350">
		{@render children()}
	</main>

	<footer class="font-roboto text-xl text-center mt-10 pt-5 pb-5 border-t-2 border-site-accent">
		AJ &copy;
	</footer>
</div>
