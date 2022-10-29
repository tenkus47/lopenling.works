import React from "react";
import {
    DiscourseForum,
    DiscourseTopicList,
} from "components/utility/discourseForum";
import { Typography, Box } from "components/UI/muiComponent";

function Discussions() {
    return (
        <>
            {" "}
            <Typography variant="h6" gutterBottom component="div">
                Discussions
            </Typography>
            {/* <DiscourseForum topicId={1321}/> */}
            <DiscourseTopicList category={"55"} perPage={"5"} />
        </>
    );
}

export default Discussions;
