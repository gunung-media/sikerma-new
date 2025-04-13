import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { UptType } from "..";

export type UptDto = Omit<UptType, keyof BaseTableInterface | 'partnerships'>
