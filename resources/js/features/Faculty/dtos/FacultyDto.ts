import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { FacultyType } from "..";

export type FacultyDto = Omit<FacultyType, keyof BaseTableInterface>
