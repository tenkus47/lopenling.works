// @flow
import * as React from "react";
import styles from "./TextList.css";

type Props = {
    count: number,
    extra: boolean
};

export default class ResultCount extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        let countDisplay = this.props.count;
        if (this.props.extra) countDisplay += "+";
        return <span className={styles.searchTotal}>{countDisplay}</span>;
    }
}
