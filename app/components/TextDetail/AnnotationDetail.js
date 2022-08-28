// @flow
import React, { useState } from "react";
import classnames from "classnames";
import { FormattedMessage } from "react-intl";
import styles from "./AnnotationDetail.css";
import type { AnnotationData } from "api";
import CheckIcon from "images/check_circle.svg";
import colours from "css/colour.css";
import ApplyTooltip from "../UI/ApplyTooltip";
export type Props = {
    annotationData: AnnotationData,
    isActive: boolean,
    selectAnnotationHandler: () => void,
    isLoggedIn: boolean,
    editAnnotationHandler: () => void,
    fontSize: Number,
    isWorkingSection: boolean,
};
const MAXIMUM_TEXT_LENGTH = 250;

const AnnotationDetail = (props: Props) => {
    const [imageUrl, setImageUrl] = useState(null);

    function longest_str_in_array(arra) {
        var max_str = arra[0].length;
        var ans = arra[0].length;
        for (var i = 0; i < arra.length; i++) {
            var maxi = arra[i].length;
            if (maxi > max_str) {
                ans = arra[i].length;
                max_str = maxi;
            }
        }
        return ans;
    }
    function mergeArray(arr) {
        var textCount = arr.length;
        var maxPerLine = 55;

        for (
            var i = 0;
            i < Math.ceil(arr.join().length / maxPerLine) + 1;
            i++
        ) {
            if (arr[i] && arr[i + 1] && arr[i].length < maxPerLine) {
                arr[i] = arr[i] + " " + arr[i + 1];
                arr.splice(i + 1, 1);
                mergeArray(arr);
            } else if (arr[i] && arr[i + 1] && arr[i].length > maxPerLine) {
                // code to cut selected text should be here
            }
        }
        return arr;
    }

    let desc = (
        <p>
            &lt;
            <FormattedMessage id="annotation.delete" />
            &gt;
        </p>
    );

    let content = props.annotationData.content;

    if (content.trim() !== "") {
        if (content.length > MAXIMUM_TEXT_LENGTH) {
            content = content.substr(0, MAXIMUM_TEXT_LENGTH) + "…";
        }
        // content variable is the selected trimmed context
        desc = <p>{content}</p>;
    }

    let classes = [styles.annotationDetail];

    if (props.isActive) {
        classes.push(styles.active);
    }

    let className = classnames(...classes);
    return (
        <div className={className} onClick={props.selectAnnotationHandler}>
            <div className={styles.annotationHeader}>
                {props.isActive && (
                    <div className={styles.activeIcon}>
                        <CheckIcon
                            style={{ fill: colours.activeButton }}
                            width={15}
                            height={15}
                        />
                    </div>
                )}
                <h3>{props.annotationData.name}</h3>
                {props.isLoggedIn && props.isActive && (
                    <button
                        style={{ display: "none" }}
                        className={styles.edit}
                        onClick={props.editAnnotationHandler}
                        id="editBtn"
                    ></button>
                )}
            </div>

            {!props.isWorkingSection && desc}

            {/* {props.isWorkingSection  && <ShareButton props={props}/>} */}
        </div>
    );
};

export default AnnotationDetail;
