import { FC, useState } from "react"
import "./style.css"

type TooltipProps = {
    value: string
}

export const Tooltip: FC<TooltipProps> = ({ value }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <>
            <span
                className="emp_name text-truncate main-val"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}>
                {value}
            </span>
            {showTooltip && <div className="custom-tooltip">{value}</div>}

        </>
    )
}
