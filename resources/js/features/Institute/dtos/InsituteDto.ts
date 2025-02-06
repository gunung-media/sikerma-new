import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { InstituteType } from "..";

export type InstituteDto = Omit<InstituteType, keyof BaseTableInterface | 'faculty'>
