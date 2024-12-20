import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { PartnershipActivityType } from "..";

export type PartnershipActivityDto = Omit<PartnershipActivityType, keyof BaseTableInterface | 'document_path'> & { file?: File, document_path?: string }
