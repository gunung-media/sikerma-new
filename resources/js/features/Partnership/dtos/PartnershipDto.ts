import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { PartnershipType } from "..";

export type PartnershipDto = Omit<PartnershipType, keyof BaseTableInterface | 'user' | 'faculty' | 'studyProgram'>
