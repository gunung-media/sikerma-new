import { PartnershipType } from "@/features/Partnership";
import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface UptType extends BaseTableInterface {
    name: string
    partnerships?: PartnershipType[]
}
