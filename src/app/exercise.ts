import { ExerciseType } from "./exercise_types_enum";

export interface Exercise{
    id: number,
    name: string,
    description: string,
    types: Array<ExerciseType>
    commentary: string,
}