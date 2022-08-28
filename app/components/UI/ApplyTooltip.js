import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Tooltip, Tootip } from "@mui/material";
function ApplyTooltip({
    children,
    tooltipName,
    format = null,
    className = "",
    shortcut = "",
    on = false,
}) {
    return (
        <>
            <div
                data-tip
                data-for={tooltipName}
                className={className}
                style={{ width: "100%" }}
            >
                {!on ? (
                    <Tooltip
                        placement="top"
                        followCursor
                        title={
                            format ? (
                                <FormattedMessage id={format} />
                            ) : (
                                <span>
                                    {tooltipName}
                                    {` [${shortcut}]`}
                                </span>
                            )
                        }
                    >
                        {children}
                    </Tooltip>
                ) : (
                    children
                )}
            </div>
        </>
    );
}

export default ApplyTooltip;
