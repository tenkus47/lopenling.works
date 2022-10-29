import React from "react";
import styles from "./QuestionView.css";
import controlStyles from "./AnnotationControls.css";
import buttonStyles from "./Button.css";
import Annotation from "lib/Annotation";
import Question from "lib/Question";
import AnswerView from "./AnswerView";
import { FormattedMessage, FormattedDate } from "react-intl";
import classnames from "classnames";
import { QUESTION_URL } from "app_constants";
import { Box, IconButton } from "components/UI/muiComponent";
import { DiscourseForum } from "components/utility/discourseForum";
import { Delete as DeleteIcon } from "components/UI/muiIcon";
type Props = {
    question: Question,
    delete: () => void,
};

export default class QuestionView extends React.Component<Props> {
    delete = () => {
        if (this.props.delete) {
            this.props.delete();
        }
    };

    render() {
        const topicId = this.props.question.topicId || null;
        const topicUrl = QUESTION_URL + topicId;
        let answerViews = [];
        let answers = this.props.question.answers;
        for (let i = 0; i < answers.length; i++) {
            const answer = answers[i];
            answerViews.push(
                <AnswerView answer={answer} key={"answer_" + answer.created} />
            );
        }

        const name =
            this.props.question.name.length > 0
                ? this.props.question.name
                : this.props.question.username;

        return (
            <Box
                className={classnames(styles.question, controlStyles.padding)}
                sx={{ boxShadow: 2 }}
            >
                <p
                    className={controlStyles.text}
                    dangerouslySetInnerHTML={{
                        __html: this.props.question.content,
                    }}
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                        className={classnames(
                            styles.threadLink,
                            controlStyles.text
                        )}
                    >
                        <a href={topicUrl} target="_blank">
                            <FormattedMessage id="question.viewThread" />
                        </a>
                    </span>
                    <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={this.delete}
                    >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <p className={controlStyles.subTitle}>
                    {name}
                    <FormattedDate value={this.props.question.created} />
                </p>
                {/* {answerViews} */}
                <DiscourseForum topicId={topicId} />
            </Box>
        );
    }
}
