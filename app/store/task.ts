import {create} from 'zustand'

type Task = {
    id: string | number;
    label: string;
}

type TaskStore = {
    tasks: Task[];
}

export const useTaskStore = create<TaskStore>(() => ({
    tasks: []
}))

