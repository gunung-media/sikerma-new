import { FacultyType } from "@/features/Faculty";
import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface StudyProgramType extends BaseTableInterface {
    name: string
    faculty_id: number
    weight: string
    faculty: FacultyType
}
