import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { FacultyType } from "../Faculty";
import { StudyProgramType } from "../StudyProgram";
import { InstituteType } from "../Institute";
import { UptType } from "../Upt";

export interface UserType extends BaseTableInterface {
    name: string;
    username: string;
    role?: App.Enums.RoleEnum
    faculty_id?: number
    study_program_id?: number
    institute_id?: number
    upt_id?: number
    password_raw?: string


    faculty?: FacultyType
    study_program?: StudyProgramType
    institute?: InstituteType
    upt?: UptType
    is_super_admin: boolean
    is_supervisor: boolean
}
