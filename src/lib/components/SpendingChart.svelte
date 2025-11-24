<script lang="ts">
  import { onMount } from 'svelte';
  import { reduxState } from '$hooks/useRedux';

  let container: HTMLDivElement;

  onMount(async () => {
    const { renderRecharts } = await import('../recharts/renderRecharts');
    const unsubscribe = reduxState.subscribe(state => {
      renderRecharts(container, state.budget.entries);
    });
    return unsubscribe;
  });
</script>

<div bind:this={container}></div>
