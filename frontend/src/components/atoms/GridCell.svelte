<script lang="ts">
	export let isActive: boolean;
</script>

<div class="GridCell {isActive && 'GridCell--active'}" />

<style lang="scss">
	.GridCell {
		background-color: grey;
		border-radius: 0.3rem;
		&--active {
			background-color: #f00;
		}
	}
</style>
