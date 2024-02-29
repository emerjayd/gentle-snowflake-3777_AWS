<script>
	import { fade } from 'svelte/transition';
	import { Router, Route, Link } from 'svelte-routing';
	import HomePage from 'src/routes/+page.svelte';
	import CloudPage from '/cloud/+page.svelte';
	const routes = {
		'/': HomePage,
		'/about': AboutPage
		// define other routes
	};
</script>

<div in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
	<Router {routes} />
</div>
<Router>
	<nav>
		<Link to="/">Home</Link> | <Link to="src/routes/cloud/+page.svelte">About</Link>
	</nav>

	<!-- Define your routes here -->
	<Route path="/" component={HomePage} />
	<Route path="src/routes/cloud/+page.svelte" component={CloudPage} />
</Router>
