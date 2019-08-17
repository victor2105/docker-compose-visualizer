import { writable } from 'svelte/store';


function createList() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		add: (e) => update(l => { if(!l.find((a) => {return a === e })) l.push(e); return l;}),
		remove: (i) => update(l => {l.splice(i, 1); return l;}),
		reset: () => set([])
	};
}

function createSelected() {
	const { subscribe, set, update } = writable(null);

	return {
		subscribe,
		update: (e) => update(n => e),
		reset: () => set(null)
	};
}

export const models = createList();
export const selected = createSelected();
export const opens = createList();