/// <reference types="svelte" />
/// <reference types="vite/client" />

type TFilter = 'All' | 'Completed' | 'Pending';

interface ITodo {
    id: string;
    title: string;
    done: boolean;
}
