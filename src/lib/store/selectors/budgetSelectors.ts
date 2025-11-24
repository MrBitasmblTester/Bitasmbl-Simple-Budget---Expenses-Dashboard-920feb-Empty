import type { RootState } from '$lib/store';

export const selectMonthlySummary = (state: RootState, month: string) => {
  const entries = state.budget.entries.filter(e => e.date.startsWith(month));
  const income = entries.filter(e=>e.type==='income').reduce((s,e)=>s+e.amount,0);
  const expense = entries.filter(e=>e.type==='expense').reduce((s,e)=>s+e.amount,0);
  return { income, expense, net: income-expense };
};

export const selectYearlySummary = (state: RootState, year: string) => {
  const prefix = year + '-';
  const entries = state.budget.entries.filter(e => e.date.startsWith(prefix));
  const income = entries.filter(e=>e.type==='income').reduce((s,e)=>s+e.amount,0);
  const expense = entries.filter(e=>e.type==='expense').reduce((s,e)=>s+e.amount,0);
  return { income, expense, net: income-expense };
};
