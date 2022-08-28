import React from "react";
import styles from "./Accessory.css";
import colours from "css/colour.css";

export const accessoryTypes = {
    ADD: "+",
    DELETE: "\u00d7"
};
export type AccessoryType = $Keys<typeof accessoryTypes>;

type Props = {
    type: AccessoryType,
    title?: string,
    onClick?: () => void,
    backgroundColor?: string,
    color?: string
};

const Accessory = (props: Props) => {
    let style = {};
    style.backgroundColor = props.backgroundColor || "";
    style.color = props.color || "#fff";

    return (
        <div
            className={styles.accessory}
            title={props.title}
            onClick={props.onClick}
            style={style}
        >
            {accessoryTypes[props.type]}
        </div>
    );
};

export default Accessory;
