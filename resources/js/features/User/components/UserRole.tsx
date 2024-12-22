import { App } from "@/types/enum";
import { kebabToTitle } from "@/utils/StringRalated";
import { mergeClass } from "@/utils/UIRalated";
import { FC } from "react";

export const UserRole: FC<{
    value: App.Enums.RoleEnum
}> = ({ value }) => {
    return (
        <span className={mergeClass(
            "badge",
            (value === App.Enums.RoleEnum.SUPER_ADMIN) && "bg-label-danger",
            (value === App.Enums.RoleEnum.FACULTY_ADMIN) && "bg-label-warning",
            (value === App.Enums.RoleEnum.STUDY_PROGRAM_ADMIN) && "bg-label-success"
        )}>{kebabToTitle(value)}</span>
    )
}
