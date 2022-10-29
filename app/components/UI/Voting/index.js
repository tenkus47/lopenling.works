import React from "react";
import { Recommend as RecommendIcon } from "components/UI/muiIcon";
import styles from "./Vote.css";
import { Avatarlist } from "../AnnotationAvatar";

function index({ data }) {
    const [no, setno] = React.useState(20);
    const handleClick = () => setno((prev) => prev + 1);
    return (
        <div className={styles.voteContainer} onClick={handleClick}>
            <Avatarlist />
        </div>
    );
}

export default index;
