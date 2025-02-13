import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { PartnershipActivityType } from "..";

export type PartnershipActivityDto = Omit<PartnershipActivityType, keyof BaseTableInterface> & { file?: File, document_path?: string }
