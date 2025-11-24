import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Entry = { id: string; type: 'income'|'expense'; amount: number; category: string; date: string; };

interface BudgetState { entries: Entry[]; }

const initialState: BudgetState = { entries: [] };

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addEntry(state, action: PayloadAction<Entry>) { state.entries.push(action.payload); },
    updateEntry(state, action: PayloadAction<Entry>) {
      const i = state.entries.findIndex(e => e.id === action.payload.id);
      if (i !== -1) state.entries[i] = action.payload;
    },
    deleteEntry(state, action: PayloadAction<string>) {
      state.entries = state.entries.filter(e => e.id !== action.payload);
    }
  }
});

export const { addEntry, updateEntry, deleteEntry } = budgetSlice.actions;
export default budgetSlice.reducer;
