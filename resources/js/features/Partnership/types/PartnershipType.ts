import { InstituteType } from "@/features/Institute";
import { PartnerType } from "@/features/Partner/types";
import { PartnerCriteriaType } from "@/features/PartnerCriteria";
import { PartnershipActivityType } from "@/features/PartnershipActivity";
import { StudyProgramType } from "@/features/StudyProgram";
import { UserType } from "@/features/User";
import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface PartnershipType extends BaseTableInterface {
    type: App.Enums.PartnershipTypeEnum;
    document_number: string;
    document_fundamental?: string | null;
    title: string;
    description: string;
    user_id: number;
    status: App.Enums.PartnershipStatusEnum;
    start_date: string;
    year?: number | null;
    end_date: string;
    executor?: string | null;
    document_path?: string | null | File;
    final_document_path?: string | null | File;
    user: UserType;
    activities: PartnershipActivityType[];
    partners: PartnerType[];
    institute_id?: number | null;
    institute?: InstituteType;
    partner_criteria_id?: number | null;
    partner_criteria?: PartnerCriteriaType
    study_program_id?: number | null;
    study_program?: StudyProgramType
}
