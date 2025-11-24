<script lang="ts">
  import { reduxState, dispatch } from '$hooks/useRedux';
  import { deleteEntry } from '$lib/store/slices/budgetSlice';
  import EntryForm from './EntryForm.svelte';

  let editingId: string | null = null;
  $: entries = $reduxState.budget.entries;
</script>

<table>
  <thead>
    <tr><th>Date</th><th>Type</th><th>Category</th><th>Amount</th><th></th></tr>
  </thead>
  <tbody>
    {#each entries as e}
      <tr>
        <td>{e.date}</td>
        <td>{e.type}</td>
        <td>{e.category}</td>
        <td>{e.amount}</td>
        <td>
          <button on:click={() => editingId = e.id}>Edit</button>
          <button on:click={() => dispatch(deleteEntry(e.id))}>Delete</button>
        </td>
      </tr>
      {#if editingId === e.id}
        <tr><td colspan="5"><EntryForm existing={e} /></td></tr>
      {/if}
    {/each}
  </tbody>
</table>
