// @flow
import React from "react";
import classnames from "classnames";
import { FormattedMessage } from "react-intl";
import styles from "./AnnotationDetail.css";
import type { Props as AnnotationDetailProps } from "./AnnotationDetail";

export type Props = AnnotationDetailProps & {
    saveAnnotationHandler: (text: string) => void,
    cancelAnnotationHandler: () => void,
};

const AnnotationDetailEdit = (props: Props) => {
    let content = props.annotationData.content;
    let classes = [styles.annotationDetail];
    let textarea = null;

    if (props.isActive) {
        classes.push(styles.active);
    }
    let auto_grow = (element) => {
        textarea.style.height = "5px";
        textarea.style.height = textarea.scrollHeight + "px";
    };
    let className = classnames(...classes);
    return (
        <div className={className}>
            <h3>{props.annotationData.name}</h3>

            <div className={styles.editing}>
                <textarea
                    defaultValue={content}
                    autoFocus={true}
                    onInput={auto_grow}
                    ref={(ta) => (textarea = ta)}
                />
                <div className={styles.actionButtons}>
                    <div
                        className={styles.save}
                        onClick={() => {
                            if (textarea) {
                                props.saveAnnotationHandler(textarea.value);
                            }
                        }}
                    >
                        <FormattedMessage id="annotation.save" />
                    </div>
                    <div
                        className={styles.cancel}
                        onClick={props.cancelAnnotationHandler}
                    >
                        <FormattedMessage id="annotation.cancel" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnotationDetailEdit;
