import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { UserType } from "./type";

export type UserDto = Omit<UserType, keyof BaseTableInterface | 'faculty' | 'study_program'> & { password: string }
