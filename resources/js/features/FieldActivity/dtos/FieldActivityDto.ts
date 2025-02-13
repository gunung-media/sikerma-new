import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { FieldActivityType } from "..";

export type FieldActivityDto = Omit<FieldActivityType, keyof BaseTableInterface>
