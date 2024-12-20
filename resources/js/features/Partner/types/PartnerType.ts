import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface PartnerType extends BaseTableInterface {
    partnership_id: number;
    agency_type: App.Enums.AgencyTypeEnum;
    agency_name: string;
    agency_address: string;
    signatory_name: string;
    signatory_position: string;
    responsible_name?: string | null;
    responsible_position?: string | null;
}
