import React from "react";
import styles from "./Note.css";
import Annotation from "lib/Annotation";
import FormattedDate from "react-intl";
import { Box, IconButton } from "components/UI/muiComponent";
import { Delete as DeleteIcon } from "components/UI/muiIcon";
type Props = {
    note: Annotation,
    delete?: (note: Annotation) => void,
    edit?: (note: Annotation) => void,
};

export default class Note extends React.Component<Props> {
    delete() {
        if (this.props.delete) {
            this.props.delete(this.props.note);
        }
    }

    edit() {
        if (this.props.edit) {
            this.props.edit(this.props.note);
        }
    }

    render() {
        return (
            <Box className={styles.note} sx={{ boxShadow: 2 }}>
                <p>Note:</p>
                <div className={styles.header}>
                    <h4 className={styles.info}>
                        {this.props.note.creatorUser.name}
                    </h4>
                    {this.props.delete && (
                        <div
                            className={styles.delete}
                            onClick={this.delete.bind(this)}
                        >
                            <IconButton aria-label="delete" size="small">
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    )}
                </div>
                <div className={styles.content} onClick={this.edit.bind(this)}>
                    {this.props.note.content}
                </div>
            </Box>
        );
    }
}
