import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { UserType } from "./type";

export type UserDto = Omit<UserType, keyof BaseTableInterface | 'faculty' | 'studyProgram'> & { password: string }
