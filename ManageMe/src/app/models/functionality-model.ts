import { task } from "./task-model"

export interface functionality{
    functionalityID: number;
    name: string;
    tasks?: task[];
}