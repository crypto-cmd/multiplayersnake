<script lang="ts">
	import { page } from '$app/stores';
	import LinkButton from '../components/atoms/LinkButton.svelte';
	let id: string;
	page.subscribe(({ params }) => ({ id } = params));
</script>

<main>
	<h1>Welcome to Room id#{id}</h1>
	<LinkButton href="/">Leave Room</LinkButton>
	<LinkButton href="/game-{id}">Play Game</LinkButton>
</main>
