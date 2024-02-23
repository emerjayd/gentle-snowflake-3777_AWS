<script>
	import TransitionWrapper from './../lib/TransitionWrapper.svelte';
	import Footer from './../lib/footer.svelte';
	import Header from './../lib/header.svelte';
	import '../app.css';
	import { fade, slide, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	let opacity = 0;
	onMount(() => {
		opacity = 1; // Fade in the content
	});

	onMount(() => {
		document.title = '>sudo encrypt_';
	});

	onMount(() => {
		opacity = 1; // This triggers the fade-in effect after mounting
	});
	// When the component starts to fade out
	function startTransition() {
		isTransitioning.set(true);
	}

	// When the component has finished fading out
	function endTransition() {
		isTransitioning.set(false);
	}
</script>

<div class="no-scrollbar overflow-y-autow-4 scrollbar-hide">
	<!-- in:fade={{ duration: 400 }} out:fade={{ duration: 400 }} -->
	<main style="--opacity: {opacity}">
		<div
			in:fade={{ duration: 400 }}
			out:fade={{ duration: 400 }}
			style="--opacity: {opacity}"
		></div>
		<Header />
		<slot />
	</main>
</div>

<!-- <TransitionWrapper>
	<slot />
</TransitionWrapper> -->

<style>
	/* div {
		transition: opacity 1s ease;
		opacity: var(--opacity);
	} */
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* body {
		animation: fadeIn 0.5s ease-out forwards;
	} */
</style>
