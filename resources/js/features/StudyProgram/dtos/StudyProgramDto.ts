import { BaseTableInterface } from "@/interfaces/BaseTableInterface";
import { StudyProgramType } from "..";

export type StudyProgramDto = Omit<StudyProgramType, keyof BaseTableInterface>
