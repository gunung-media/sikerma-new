import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { PartnershipType } from "..";
import { PartnerDto } from "@/features/Partner/dtos";
import { PartnershipActivityDto } from "@/features/PartnershipActivity";

export type PartnershipDto = Omit<PartnershipType, keyof BaseTableInterface | 'user' | 'institute' | 'partner_criteria' | 'study_program' | 'user_id' | 'partners' | 'activities' | 'year'> & {
    'partners': PartnerDto[],
    'activities': PartnershipActivityDto[]
}
