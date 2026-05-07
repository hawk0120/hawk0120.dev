import { writable } from 'svelte/store';

function createThemeStore() {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
  const initial = stored || 'dark';

  const { subscribe, set, update } = writable(initial);

  return {
    subscribe,
    set: (value) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', value);
      }
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', value);
      }
      set(value);
    },
    toggle: () => {
      update(current => {
        const next = current === 'light' ? 'dark' : 'light';
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme', next);
        }
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', next);
        }
        return next;
      });
    }
  };
}

export const theme = createThemeStore();
