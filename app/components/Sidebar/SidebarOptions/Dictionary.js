import React from "react";
import styles from "./ResourceOption.css";
import { Typography, Box } from "@mui/material";

function Dictionary() {
    return (
        <>
            <Typography variant="h6" gutterBottom component="div">
                Dictionary
            </Typography>
            <Box p={2}>
                <input type="text" placeholder="search Terms"></input>
            </Box>
        </>
    );
}

export default Dictionary;
