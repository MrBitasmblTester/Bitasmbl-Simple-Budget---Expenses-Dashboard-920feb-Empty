import { store, AppDispatch, RootState } from '$lib/store';
import { readable } from 'svelte/store';

export const reduxState = readable(store.getState(), set => {
  const unsubscribe = store.subscribe(() => set(store.getState()));
  return unsubscribe;
});

export const dispatch: AppDispatch = store.dispatch;
