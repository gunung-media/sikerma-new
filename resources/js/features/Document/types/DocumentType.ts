import { BaseTableInterface } from "@/interfaces/BaseTableInterface";

export interface DocumentType extends BaseTableInterface {
    name: string
    path?: string | null | File;
}
