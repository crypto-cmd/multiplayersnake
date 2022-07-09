<script lang="ts">
	export let size: number = 5;
</script>

<div class="Grid" style="--size:{size}">
	<slot />
</div>

<style lang="scss">
	.Grid {
		display: grid;
		max-width: 90%;
		max-height: 90%;
    gap:0.1rem;
    border-radius: 0.05rem;
		grid-template-columns: repeat(var(--size), 1fr);
		grid-template-rows: repeat(var(--size), 1fr);
		aspect-ratio: 1;
	}
</style>
