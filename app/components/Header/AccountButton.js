// @flow
import React from "react";
import { Avatar, Tooltip, IconButton } from "@mui/material";

type Props = {
    name: string,
    onClick: () => void,
};

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    let nameformat =
        name.split(" ")[1] !== undefined
            ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
            : `${name.split(" ")[0][0]}`;
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: nameformat,
    };
}

const AccountButton = (props: Props) => {
    return (
        <Tooltip title="Account settings">
            <IconButton
                onClick={props.onClick}
                id="account-menu-button"
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
            >
                <Avatar
                    {...stringAvatar(props.name)}
                    sx={{ width: 28, height: 28 }}
                />
            </IconButton>
        </Tooltip>
    );
};

export default AccountButton;
