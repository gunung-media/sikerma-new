import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { FacultyType } from "../Faculty";
import { StudyProgramType } from "../StudyProgram";
import { InstituteType } from "../Institute";

export interface UserType extends BaseTableInterface {
    name: string;
    username: string;
    role?: App.Enums.RoleEnum
    faculty_id?: number
    study_program_id?: number
    institute_id?: number


    faculty?: FacultyType
    study_program?: StudyProgramType
    institute?: InstituteType
    is_super_admin: boolean
}
