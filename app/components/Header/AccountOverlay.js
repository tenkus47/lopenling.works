// @flow
import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import User from "lib/User";
import styles from "./AccountOverlay.css";
import { Avatar, MenuItem, Divider, ListItemIcon, Link } from "@mui/material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

type Props = {
    top: number,
    right: number,
    user: User,
    intl: { formatMessage: ({ [id: string]: string }) => string },
    visible: Boolean,
};

const AccountOverlay = (props: Props) => {
    let signOutTitle = props.intl.formatMessage({
        id: "header.logout",
    });
    return (
        <>
            <MenuItem>{props.user.name || "Guest"}</MenuItem>
            <Divider />
            <MenuItem>
                <Link
                    href="https://www.lopenling.org"
                    style={{ textDecoration: "none", color: "gray" }}
                >
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </Link>
            </MenuItem>
            <MenuItem>
                <Link
                    href="/discourse/logout/"
                    style={{ textDecoration: "none", color: "gray" }}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {signOutTitle}
                </Link>
            </MenuItem>
        </>
    );
};

export default injectIntl(AccountOverlay);
