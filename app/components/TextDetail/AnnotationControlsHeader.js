// @flow
import React from "react";
import Button from "components/UI/Button";
import styles from "./AnnotationControlsHeader.css";
import PageBreakIcon from "images/page_break_icon.svg";
import NoteIcon from "images/note.svg";
import QuestionIcon from "images/question_answer.svg";

import PencilAltIcon from "images/PencilAltIcon.svg";
type Props = {
    addPageBreak: null | (() => void),
    addLineBreak: null | (() => void),
    addNote: null | (() => void),
    addQuestion: null | (() => void),
    closeAnnotation: null | (() => void),
    editAnnotationHandler: null | (() => void),
    userLoggedIn: Boolean,
};
const ICON_SIZE = 15;
class AnnotationControlsHeader extends React.Component<Props> {
    // keyHandler;
    constructor() {
        super();
    }
    // componentDidMount() {
    //     this.keyHandler = (e) => {
    //         if (e.key === "e" || e.key === "E") {
    //             this.props.editAnnotationHandler();
    //         }
    //         if (e.key === "q" || e.key === "Q") {
    //             this.props.addQuestion();
    //         }
    //         if (e.key === "l" || e.key === "L") {
    //             this.props.addLineBreak();
    //         }
    //         if (e.key === "n" || e.key === "N") {
    //             this.props.addNote();
    //         }
    //         if (e.key === "p" || e.key === "P") {
    //             this.props.addPageBreak();
    //         }
    //     };
    //     document.addEventListener("keyup", this.keyHandler, { once: true });
    // }
    // componentWillUnmount() {
    //     document.removeEventListener("keyup", this.keyHandler);
    // }
    render() {
        const allowPageBreak = this.props.addPageBreak != null;
        const allowLineBreak = this.props.addLineBreak != null;
        return (
            <>
                <div className={styles.header}>
                    <Button
                        noBezel={true}
                        icon={
                            <NoteIcon
                                width={ICON_SIZE}
                                height={ICON_SIZE}
                                style={{ fill: "#fff" }}
                            />
                        }
                        backgroundColor="transparent"
                        // accessoryType={this.props.addNote ? "ADD" : null}
                        onClick={this.props.addNote}
                        disabled={this.props.addNote ? false : true}
                        align="center"
                        tooltipTitle="Note"
                        shortcut="n"
                    />
                    <Button
                        noBezel={true}
                        icon={
                            <QuestionIcon
                                width={ICON_SIZE}
                                height={ICON_SIZE}
                                style={{ fill: "#fff" }}
                            />
                        }
                        // accessoryType={this.props.addQuestion ? "ADD" : null}
                        onClick={this.props.addQuestion}
                        disabled={this.props.addQuestion ? false : true}
                        align="left"
                        backgroundColor="transparent"
                        tooltipTitle="Question"
                        shortcut="q"
                    />
                    <Button
                        noBezel={true}
                        color="#fff"
                        fontSize={`${ICON_SIZE}px`}
                        icon="&#182;"
                        // accessoryType={allowLineBreak ? "ADD" : null}
                        onClick={this.props.addLineBreak}
                        disabled={!allowLineBreak}
                        align="left"
                        backgroundColor="transparent"
                        tooltipTitle="LineBreak"
                        shortcut="l"
                    />
                    <Button
                        noBezel={true}
                        icon={
                            <PageBreakIcon
                                width={ICON_SIZE}
                                height={ICON_SIZE}
                                style={{ fill: "#fff" }}
                            />
                        }
                        // accessoryType={allowPageBreak ? "ADD" : null}
                        onClick={this.props.addPageBreak}
                        disabled={!allowPageBreak}
                        align="left"
                        backgroundColor="transparent"
                        tooltipTitle="PageBreak"
                        shortcut="p"
                    />

                    <Button
                        onClick={this.props.editAnnotationHandler}
                        // className={styles.edit}
                        backgroundColor="transparent"
                        noBezel={true}
                        icon={
                            <PencilAltIcon
                                width={ICON_SIZE}
                                height={ICON_SIZE}
                                style={{ fill: "#fff" }}
                            />
                        }
                        tooltipTitle="Edit"
                        shortcut="e"
                    />
                </div>
                {/* <div
                    onClick={() => this.props.closeAnnotation()}
                    className={styles.Anotation_closeBtn}
                >
                    x
                </div> */}
            </>
        );
    }
}

export default AnnotationControlsHeader;
