import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { PartnerCriteriaType } from "..";

export type PartnerCriteriaDto = Omit<PartnerCriteriaType, keyof BaseTableInterface | 'partnerships'>
