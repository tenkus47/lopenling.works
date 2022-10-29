// @flow
import React, { useCallback } from "react";
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
import ToggleTheme from "./ToggleTheme";
import { pageList } from "reducers/pages";
import {
  Button,
  Tooltip,
  Stack,
  Box,
  Menu,
  IconButton,
  MenuItem,
  AppBar,
} from "components/UI/muiComponent";
import { Person as PersonIcon, Menu as MenuIcon } from "components/UI/muiIcon";
import _ from "lodash";
type LoginProps = {
  successRedirect: string,
  csrfToken: string,
};
let linkToEditor = "/editor";
const SSO_SIGNUP_URL = "";

export const LoginControls = (props: LoginProps) => (
  <Stack direction="row" spacing={2}>
    <a href={SSO_SIGNUP_URL}>
      <Button
        variant="contained"
        className={styles.ButtonText}
        style={{
          padding: "6px 10px",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <FormattedMessage id="header.signUp" />
      </Button>
    </a>

    <form method="post" action="/discourse/login_redirect/">
      {/* <IconButton>
                <UserIcon width="11" />
            </IconButton> */}
      <Button
        variant="contained"
        type="submit"
        className={styles.ButtonText}
        sx={{
          padding: "6px 10px",
          display: "flex",
          alignItems: "center",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <PersonIcon style={{ height: 16, width: 16 }} />
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
        open={props.overlayVisible || false}
        onClose={props.accountButtonClicked}
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
  const selectedText = props.selectedText;
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

  let toggleTitle = props.intl?.formatMessage({
    id: "header.toggleTextList",
  });

  const LinkRef = React.forwardRef((props, ref) => (
    <div ref={ref}>
      <NavLink {...props} />
    </div>
  ));
  React.useEffect(() => {
    if (selectedText) {
      linkToEditor = `/texts/${selectedText.id}`;
    }
  }, [selectedText]);

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
      sx={{
        boxShadow: 1,
        zIndex: 3,
        display: props.page === "Vote" ? "none" : "block",
      }}
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
          <NavLink to="/">
            <div className={styles.logo}>
              <img
                src={lopenlingLogo}
                height="37"
                width={173}
                alt="parkhang-logo"
              />
            </div>
          </NavLink>

          {/* {props.page === "Editors" && (
                        <NavigationButton
                            onClick={props.navigationButtonClicked}
                            className={styles.navigationButton}
                            title={toggleTitle}
                            isListVisible={props.textListVisible}
                        />
                    )} */}
          <Box display={{ xs: "none", md: "flex" }}>
            {pageList.map((page, i) => {
              return (
                <Button
                  to={page.pageName === "Editors" ? linkToEditor : page.url}
                  variant="text"
                  component={LinkRef}
                  color="links"
                  key={page.id}
                >
                  <FormattedMessage id={page.id} />
                </Button>
              );
            })}

            <Tooltip title="Forum">
              <Button
                href={"https://lopenling.org"}
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
              <Button to={"/"} color="links" component={LinkRef} variant="text">
                <FormattedMessage id={"header.texts"} />
              </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                to={linkToEditor}
                component={LinkRef}
                variant="text"
                color="links"
                // disabled={_.isEmpty(props.text)}
              >
                <FormattedMessage id={"header.editor"} />
              </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                href={"https://www.lopenling.org"}
                color="links"
                variant="text"
                component={"a"}
              >
                <FormattedMessage id={"lopenlingForum"} />
              </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                href={"https://www.nalanda.works"}
                color="links"
                variant="text"
                component={"a"}
              >
                <FormattedMessage id={"Nalanda"} />
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
          {controls}
          <ToggleTheme theme={props.theme} changeTheme={themeChange} />
        </Stack>
      </Stack>
    </AppBar>
  );
};
const mapStateToProps = (state: AppState): { user: User } => {
  const user = getUser(state);
  const CSRF_TOKEN = "dfasdfsadfasdfasdfsadf";

  const activeLocale = getActiveLocale(state);
  const successRedirect = document.location.pathname;
  // TODO: move global CSRF_TOKEN into redux
  const csrfToken = CSRF_TOKEN;
  const page = state.page;
  return {
    page: state.page,
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
    selectedText: getSelectedText(state),
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
