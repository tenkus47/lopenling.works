// @flow
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import styles from "./Header.css";
import User from "lib/User";
import type { AppState } from "reducers";
import { FormattedMessage, injectIntl } from "react-intl";
import LocaleSwitcher from "components/LocaleSwitcher/LocaleSwitcher";
import NavigationButton from "components/UI/NavigationButton";
import AccountButton from "./AccountButton";
import AccountOverlay from "./AccountOverlay";
import {
  getTextListVisible,
  getAccountOverlayVisible,
  getUser,
  getActiveLocale,
  getTheme,
  getSelectedText,
} from "reducers";
import * as actions from "actions";
import lopenlingLogo from "images/lopenling_logo_173x.png";
import UserIcon from "images/discourse_user.svg";
import { NavLink } from "redux-first-router-link";
import TranslateButton from "components/utility/TranslateButton";
import { history } from "redux-first-router";
import ToggleTheme from "./ToggleTheme";
import Resources from "components/Resources";

import {
  Container,
  Button,
  Tooltip,
  Stack,
  Box,
  Menu,
  IconButton,
  MenuItem,
  Typography,
  Drawer,
  getInitColorSchemeScript,
  AppBar,
} from "@mui/material";
import { Person as PersonIcon, Menu as MenuIcon } from "@mui/icons-material";
import _ from "lodash";
type LoginProps = {
  successRedirect: string,
  csrfToken: string,
};
const image_location = lopenlingLogo;
const SSO_SIGNUP_URL = "";
export const LoginControls = (props: LoginProps) => (
  <Stack direction="row" spacing={2}>
    <a href={SSO_SIGNUP_URL}>
      <Button
        variant="contained"
        style={{
          padding: "6px 10px",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <FormattedMessage id="header.signUp" />
      </Button>
    </a>

    <form
      method="post"
      action="https://parkhang.lopenling.org/discourse/login_redirect/"
    >
      {/* <IconButton>
                <UserIcon width="11" />
            </IconButton> */}
      <Button
        variant="contained"
        type="submit"
        style={{
          padding: "6px 10px",
          display: "flex",
          alignItems: "center",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <PersonIcon style={{ height: 18, width: 19 }} />
        <FormattedMessage id="header.login" />
      </Button>
      <input type="hidden" name="csrfmiddlewaretoken" value={props.csrfToken} />
      <input
        type="hidden"
        name="success_redirect"
        value={props.successRedirect}
      />
    </form>
  </Stack>
);

type LoggedInControlsProps = {
  user: User,
  overlayVisible: boolean,
  accountButtonClicked: () => void,
};

export const LoggedInControls = (props: LoggedInControlsProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    props.accountButtonClicked();
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className={styles.controls}>
      <AccountButton name={props.user.name} onClick={handleClick} />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={props.overlayVisible}
        onClose={props.accountButtonClicked}
        MenuListProps={{
          "aria-labelledby": "account-menu-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        style={{ top: 20 }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <AccountOverlay top={60} right={0} user={props.user} />
      </Menu>
    </div>
  );
};

type HeaderProps = {
  user: User,
  activeLocale: string,
  accountOverlayVisible: boolean,
  navigationButtonClicked: () => void,
  intl: { formatMessage: ({ [id: string]: string }) => string },
  accountButtonClicked: () => void,
  successRedirect: string,
  csrfToken: string,
};

export const Header = (props: HeaderProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  let controls = null;
  if (props.user.isLoggedIn) {
    controls = (
      <LoggedInControls
        user={props.user}
        overlayVisible={props.accountOverlayVisible}
        accountButtonClicked={props.accountButtonClicked}
      />
    );
  } else {
    controls = (
      <LoginControls
        successRedirect={props.successRedirect}
        csrfToken={props.csrfToken}
      />
    );
  }

  let toggleTitle = props.intl.formatMessage({
    id: "header.toggleTextList",
  });

  const LinkRef = React.forwardRef((props, ref) => (
    <div ref={ref}>
      <NavLink {...props} />
    </div>
  ));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const themeChange = useCallback((e) => props.themeButtonClicked(e), []);
  return (
    <AppBar
      position="static"
      color="navbar"
      sx={{ boxShadow: 1, zIndex: 3 }}
      // className={styles.header}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        sx={{
          height: "100%",
          maxWidth: "100%",
          paddingInline: 1,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            gap: 3,
            display: { xs: "none", md: "flex" },
            alignItems: { md: "center" },
          }}
        >
          {props.page !== "Editors" && (
            <NavLink to="/">
              <div className={styles.logo}>
                <img
                  src={image_location}
                  height="37"
                  width={173}
                  alt="parkhang-logo"
                />
              </div>
            </NavLink>
          )}

          {props.page === "Editors" && (
            <NavigationButton
              onClick={props.navigationButtonClicked}
              className={styles.navigationButton}
              title={toggleTitle}
              isListVisible={props.textListVisible}
            />
          )}
          <Box display={{ xs: "none", md: "flex" }}>
            <Button to={"/"} component={LinkRef} variant="text" color="links">
              <FormattedMessage id={"header.texts"} />
            </Button>
            <Button
              to={"/editor"}
              component={LinkRef}
              variant="text"
              color="links"
              disabled={_.isEmpty(props.text)}
            >
              <FormattedMessage id={"header.editor"} />
            </Button>
            <Tooltip title="Forum">
              <Button
                href={"https://www.lopenling.org"}
                variant="text"
                component={"a"}
                color="links"
              >
                <FormattedMessage id={"lopenlingForum"} />
              </Button>
            </Tooltip>
            <Button
              href={"https://www.nalanda.works"}
              variant="text"
              component={"a"}
              color="links"
            >
              <FormattedMessage id={"Nalanda"} />
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="account-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                to={"/"}
                style={{ color: "#676767" }}
                component={LinkRef}
                variant="text"
              >
                <FormattedMessage id={"header.texts"} />
              </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                to={"/editor"}
                component={LinkRef}
                variant="text"
                color="links"
                disabled={_.isEmpty(props.text)}
              >
                <FormattedMessage id={"header.editor"} />
              </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                href={"https://www.lopenling.org"}
                style={{ color: "#676767" }}
                variant="text"
                component={"a"}
              >
                <FormattedMessage id={"lopenlingForum"} />
              </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                href={"https://www.nalanda.works"}
                style={{ color: "#676767" }}
                variant="text"
                component={"a"}
              >
                <FormattedMessage id={"Nalanda"} />
              </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                sx={{
                  color: "#676767",
                  display: props.page !== "Editors" ? "none" : "block",
                }}
                variant="text"
                onClick={props.navigationButtonClicked}
              >
                Options
              </Button>
            </MenuItem>
          </Menu>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ float: { sx: "right" } }}
        >
          <LocaleSwitcher />
          {/* <TranslateButton /> */}
          {controls}
          <ToggleTheme theme={props.theme} changeTheme={themeChange} />
        </Stack>
      </Stack>
    </AppBar>
  );
};

const mapStateToProps = (state: AppState): { user: User } => {
  const user = getUser(state);
  const activeLocale = getActiveLocale(state);
  const successRedirect = document.location.pathname;
  // TODO: move global CSRF_TOKEN into redux
  // const csrfToken = CSRF_TOKEN;
  const csrfToken = "";

  const page = state.page;

  return {
    user: user,
    activeLocale: activeLocale,
    textListIsVisible: getTextListVisible(state),
    accountOverlayVisible: getAccountOverlayVisible(state),
    textListVisible: getTextListVisible(state),
    successRedirect: successRedirect,
    csrfToken: csrfToken,
    theme: getTheme(state),
    text: getSelectedText(state),
    page,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    navigationButtonClicked: () => {
      dispatchProps.dispatch(
        actions.changedTextListVisible(!stateProps.textListIsVisible)
      );
    },
    accountButtonClicked: () => {
      dispatchProps.dispatch(
        actions.changedAccountOverlay(!stateProps.accountOverlayVisible)
      );
    },
    themeButtonClicked: (payload) => {
      dispatchProps.dispatch(actions.changeTheme(payload));
    },
  };
};

const HeaderContainer = connect(mapStateToProps, null, mergeProps)(Header);

export default injectIntl(HeaderContainer);
