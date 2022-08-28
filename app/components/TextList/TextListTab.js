// @flow
import React from "react";
import classnames from "classnames";
import styles from "components/TextList/TextListTab.css";

type Props = {
    textListIsVisible: boolean,
    tabClicked: (e: SyntheticEvent<>) => void
};

const TextListTab = (props: Props) => {
    let tabClassnames = [styles.tab];
    if (props.textListIsVisible) {
        tabClassnames.push(styles.hideTab);
    } else {
        tabClassnames.push(styles.showTab);
    }
    return (
        <div
            className={classnames(...tabClassnames)}
            onClick={props.tabClicked}
        >
            Text List
        </div>
    );
};

export default TextListTab;
