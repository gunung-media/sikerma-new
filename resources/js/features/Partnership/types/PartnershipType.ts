import { InstituteType } from "@/features/Institute";
import { PartnerType } from "@/features/Partner/types";
import { PartnershipActivityType } from "@/features/PartnershipActivity";
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
    user: UserType;
    activities: PartnershipActivityType[];
    partners: PartnerType[];
    institute_id?: number | null;
    institute?: InstituteType
}
