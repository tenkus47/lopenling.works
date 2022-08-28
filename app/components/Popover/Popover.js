import React from "react";
import classnames from "classnames";
import styles from "./Popover.css";

export default class Popover extends React.Component {
    constructor(props) {
        super(props);

        this.popover = null;
        this.height = null;
        this.width = null;
    }

    componentDidMount() {
        this.height = this.popover.offsetHeight;
        this.width = this.popover.offsetWidth;

        this.updatePosition();
    }

    componentDidUpdate() {
        this.updatePosition();
    }

    updatePosition() {
        const top = this.props.position.top - this.height + "px";
        const left = this.props.position.center - this.width / 2 + "px";

        this.popover.style.top = top;
        this.popover.style.left = left;
    }

    render() {
        let classes = [styles.popover];
        if (!this.props.isVisible) {
            classes.push(styles.hidden);
        }

        return (
            <div
                className={classnames(...classes)}
                ref={popover => (this.popover = popover)}
            >
                <div className={styles.controls}>
                    Type:
                    <select>
                        <option>Select...</option>
                        <option>Variant</option>
                        <option>Marker</option>
                        <option>Page break</option>
                    </select>
                </div>
                <div className={styles.input}>
                    <textarea />
                </div>
            </div>
        );
    }
}
