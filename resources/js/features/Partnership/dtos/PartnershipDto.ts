import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { PartnershipType } from "..";
import { PartnerDto } from "@/features/Partner/dtos";
import { PartnershipActivityDto } from "@/features/PartnershipActivity";

export type PartnershipDto = Omit<PartnershipType, keyof BaseTableInterface | 'user' | 'institute' | 'user_id' | 'partners' | 'activities'> & {
    'partners': PartnerDto[],
    'activities': PartnershipActivityDto[]
}
