<script lang="ts">
	import { children } from 'svelte/internal';

	export let href: string;
</script>

<a {href}>
	<slot />
</a>

<style lang="scss">
	a {
		color: #000;
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: bold;
		padding: 0.5rem;
		border-radius: 0.5rem;
		background-color: #fff;
	}
</style>
