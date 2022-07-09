<script lang="ts">
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import GridCell from '../components/atoms/GridCell.svelte';
	import LinkButton from '../components/atoms/LinkButton.svelte';
	import Grid from '../components/Grid.svelte';
	import { Snake } from '../scripts/Snake';

	let id: string;
	page.subscribe(({ params }) => ({ id } = params));
	let snakes: Snake[] = [new Snake({ col: 0, row: 0 })];
	let size: number = 20;
	let grid: { isSnake: boolean }[] = new Array(size * size);
	updateGrid();

	let intervals: NodeJS.Timer[] = [];
	onMount(() => {
		// window.snakes = snakes;
		intervals.push(
			setInterval(() => {
				snakes.forEach((snake) => snake.update());
				snakes.forEach((snake) => snake.forEach(console.log));
				updateGrid();
			}, 1000)
		);
	});
	onDestroy(() => {
		intervals.forEach((interval) => clearInterval(interval));
	});

	function updateGrid() {
		grid = grid.fill(null!).map(() => ({ isSnake: false }));

		snakes.forEach((snake) => {
			snake.forEach(({ position: { col, row } }) => {
				if (row > size || col > size) return;
				grid[row * size + col].isSnake = true;
			});
		});
		grid = [...grid];
	}
</script>

<main>
	<h1>Welcome to Game id#{id}</h1>
	<Grid {size}>
		{#each grid as cell}
			<GridCell isActive={cell.isSnake} />
		{/each}
	</Grid>
	<LinkButton href="/">Leave Game</LinkButton>
</main>
