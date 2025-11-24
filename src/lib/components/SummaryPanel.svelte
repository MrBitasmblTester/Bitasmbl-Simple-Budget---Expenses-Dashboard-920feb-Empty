<script lang="ts">
  import { reduxState } from '$hooks/useRedux';
  import { selectMonthlySummary, selectYearlySummary } from '$lib/store/selectors/budgetSelectors';

  let month = new Date().toISOString().slice(0,7);
  let year = month.slice(0,4);
  $: state = $reduxState;
  $: monthly = selectMonthlySummary(state, month);
  $: yearly = selectYearlySummary(state, year);
</script>

<section>
  <h2>Summary</h2>
  <label>Month <input type="month" bind:value={month} /></label>
  <p>Monthly Income: {monthly.income}</p>
  <p>Monthly Expenses: {monthly.expense}</p>
  <p>Monthly Net: {monthly.net}</p>
  <label>Year <input type="number" bind:value={year} min="2000" max="2100" /></label>
  <p>Yearly Income: {yearly.income}</p>
  <p>Yearly Expenses: {yearly.expense}</p>
  <p>Yearly Net: {yearly.net}</p>
</section>
