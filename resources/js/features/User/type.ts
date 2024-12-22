import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { FacultyType } from "../Faculty";
import { StudyProgramType } from "../StudyProgram";

export interface UserType extends BaseTableInterface {
    name: string;
    username: string;
    role?: App.Enums.RoleEnum
    faculty_id?: number
    study_program_id?: number

    faculty?: FacultyType
    study_program?: StudyProgramType
}
