import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { DocumentType } from "..";

export type DocumentDto = Omit<DocumentType, keyof BaseTableInterface>
