<script>
	import { fade } from 'svelte/transition';

	// Optional: You could externalize these as props for more flexibility
	let duration = 400;
	let delay = 0; // Adjust if needed
	import TransitionWrapper from './../lib/TransitionWrapper.svelte';
</script>

<!-- 
<div in:fade={{ duration: 900 }} out:fade={{ duration: 900 }}>
	<slot />
</div> -->
