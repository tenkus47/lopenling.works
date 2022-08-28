// @flow
import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import styles from "./LoadMore.css";

type Props = {
    loading?: boolean
};

export default function LoadMore(props: Props) {
    let content;
    if (props.loading) {
        content = (
            <span>
                <FormattedMessage id="leftbar.loading" />
            </span>
        );
    } else {
        content = (
            <span>
                <FormattedMessage id="leftbar.loadMore" />
            </span>
        );
    }
    return <div className={styles.container}>{content}</div>;
}
