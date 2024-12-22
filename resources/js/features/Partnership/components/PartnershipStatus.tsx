import { App } from "@/types/enum"
import { mergeClass } from "@/utils/UIRalated"
import { FC } from "react"

export const PartnershipStatus: FC<{
    value: App.Enums.PartnershipStatusEnum
}> = ({
    value
}) => {
        return (
            <span className={mergeClass(
                "badge ",
                (value === App.Enums.PartnershipStatusEnum.ACTIVE) && "bg-label-success",
                (value === App.Enums.PartnershipStatusEnum.INACTIVE) && "bg-label-danger",
                (value === App.Enums.PartnershipStatusEnum.EXPIRED) && "bg-label-warning",
                (value === App.Enums.PartnershipStatusEnum.IN_RENEWAL) && "bg-label-info"
            )}>{value}</span>
        )
    }
