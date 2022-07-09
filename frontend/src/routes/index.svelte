<script>
	import LinkButton from '../components/atoms/LinkButton.svelte';
	let createdId = 'hi';
	let enteredId = '';
</script>

<main>
	<h1>Multiplayer Snake</h1>
	<h3>Play Snake with your friends online!</h3>
	<LinkButton href="/waiting-room-{createdId}">Create Game</LinkButton>
	<input bind:value={enteredId} placeholder="Enter a code to join" />
	<LinkButton href="/waiting-room-{enteredId}">Join Game</LinkButton>
</main>

<style lang="scss">
	@use '../scss/colors.scss';
	@use '../scss/mixins.scss';
	main {
		background-color: colors.$primary-color;
		@include mixins.flex-center;
		@include mixins.flex-column;
	}
</style>
