import React, { useState } from "react";
import styles from "./About.css";
import { Typography } from "@mui/material";

function About() {
    return (
        <>
            <Typography variant="h6" gutterBottom component="div">
                About
            </Typography>
            <Typography variant="body2" gutterBottom p={2}>
                An application that allow users to participate in creating
                critical editions of texts, initially targeting the Tibetan
                language.
            </Typography>
        </>
    );
}

export default About;
