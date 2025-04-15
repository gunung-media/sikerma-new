import { FieldActivityType } from "@/features/FieldActivity";
import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface PartnershipActivityType extends BaseTableInterface {
    partnership_id: string | number;
    field_activity_id: string;
    document_path?: string;
    field_activity?: FieldActivityType;
}
