<script lang="ts">
  import { dispatch } from '$hooks/useRedux';
  import { addEntry, updateEntry } from '$lib/store/slices/budgetSlice';
  import { v4 as uuid } from 'uuid';
  export let existing;

  let type = existing?.type ?? 'expense';
  let amount = existing?.amount ?? 0;
  let category = existing?.category ?? '';
  let date = existing?.date ?? new Date().toISOString().slice(0,10);

  const onSubmit = () => {
    const entry = { id: existing?.id ?? uuid(), type, amount: +amount, category, date };
    dispatch(existing ? updateEntry(entry) : addEntry(entry));
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <select bind:value={type}>
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>
  <input type="number" bind:value={amount} min="0" step="0.01" />
  <input type="text" bind:value={category} placeholder="Category" />
  <input type="date" bind:value={date} />
  <button type="submit">Save</button>
</form>
