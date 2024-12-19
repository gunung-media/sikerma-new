import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface UserType extends BaseTableInterface {
    name: string;
    username: string;
    role_id?: App.Enums.RoleEnum
    faculty_id?: string
    study_program_id?: string
}
