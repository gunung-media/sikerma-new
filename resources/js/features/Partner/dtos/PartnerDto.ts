import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { PartnerType } from "..";

export type PartnerDto = Omit<PartnerType, keyof BaseTableInterface>
