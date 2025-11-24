<script lang="ts">
  export let data;
</script>

<main class="app">
  <header>
    <h1>Simple Budget & Expenses Dashboard</h1>
  </header>
  <section class="content">
    <slot />
  </section>
</main>

<style>
  .app { max-width: 960px; margin: 0 auto; padding: 1rem; }
</style>
