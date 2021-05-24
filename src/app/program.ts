import { ExerciseRealisation } from "./exercise_realisation";
import { User } from "./user";

export interface Program{

    /*
        A program is a sequence of exercise realisations performed at a defined date.
        The user can be notified when the next program is close.
    */

    id: number,
    name: string,
    description: string,
    exercises: Array<ExerciseRealisation>,
    commentary: string,
    user: User,
    date: Date
    beNotified: boolean
}