import { PartnershipType } from "@/features/Partnership";
import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface InstituteType extends BaseTableInterface {
    name: string
    partnerships?: PartnershipType[]
}
