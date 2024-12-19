import { FacultyType } from "@/features/Faculty";
import { PartnerType } from "@/features/Partner/types";
import { PartnershipActivityType } from "@/features/PartnershipActivity";
import { StudyProgramType } from "@/features/StudyProgram";
import { UserType } from "@/features/User";
import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface PartnershipType extends BaseTableInterface {
    type: App.Enums.PartnershipTypeEnum;
    document_number: string;
    title: string;
    description: string;
    user_id: number;
    status: App.Enums.PartnershipStatusEnum;
    start_date: string;
    end_date: string;
    executor: string;
    faculty_id: number;
    study_program_id: number;
    user: UserType;
    faculty?: FacultyType;
    studyProgram?: StudyProgramType;
    activities: PartnershipActivityType[];
    partners: PartnerType[];
}
