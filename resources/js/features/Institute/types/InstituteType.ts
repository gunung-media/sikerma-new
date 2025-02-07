import { PartnershipType } from "@/features/Partnership";
import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface InstituteType extends BaseTableInterface {
    name: string
    type: string,
    address?: string
    phone?: string
    email?: string
    website?: string
    is_active: boolean
    partnerships?: PartnershipType[]
}
