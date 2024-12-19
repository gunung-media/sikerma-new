import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface PartnershipActivityType extends BaseTableInterface {
    partnership_id: number;
    activity_type: App.Enums.PartnershipActivityTypeEnum;
    document_path: string;
}
