import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { FacultyType } from "../Faculty";
import { StudyProgramType } from "../StudyProgram";

export interface UserType extends BaseTableInterface {
    name: string;
    username: string;
    role?: App.Enums.RoleEnum
    faculty_id?: string
    study_program_id?: string

    faculty?: FacultyType
    studyProgram?: StudyProgramType
}
