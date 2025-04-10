import { PartnershipType } from "@/features/Partnership";
import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface PartnerCriteriaType extends BaseTableInterface {
    name: string
    weight: string
    partnerships?: PartnershipType[]
}
