import React from "react";
import classnames from "classnames";
import styles from "./NavigationButton.css";
// import HamburgerIcon from "images/hamburger.svg";
import HamburgerIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
type Props = {
  onClick?: () => void,
  className?: string,
  title?: string,
  isListVisible: Boolean,
};

const NavigationButton = (props: Props) => {
  let classNames = [styles.button];
  if (props.className) {
    classNames.push(props.className);
  }
  // if (props.isListVisible) return null;
  return (
    <IconButton
      aria-label="Navigation"
      className={classnames(...classNames)}
      onClick={props.onClick}
      title={props.title}
    >
      {!props.isListVisible ? (
        <HamburgerIcon fill="currentColor" />
      ) : (
        <CloseIcon fill="currentColor" />
      )}
    </IconButton>
  );
};

export default NavigationButton;
