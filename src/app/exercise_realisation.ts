import { Exercise } from "./exercise";

export interface ExerciseRealisation{

    /*
        Exercise realisation. The comment is not necessary.
        An exercise realisation isn't necessary followed with a break.
    */

    id:number,
    exercice:Exercise,
    repetitions:number,
    duration_seconds:number,
    repetitions_performed:number,
    duration_seconds_performed:number,
    comment?:string,
    duration_next_break?:number
}