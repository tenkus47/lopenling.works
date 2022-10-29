import { Box, Paper, Stack, Typography } from "components/UI/muiComponent";
import React from "react";
import Indrajala from "images/Indrajala_logo.png";

export default function GuestFooter() {
    return (
        <Paper
            sx={{
                marginTop: "calc(10% + 60px)",
                width: "100%",
                position: "fixed",
                bottom: 0,
                width: "100%",
            }}
            component="footer"
            square
            variant="outlined"
        >
            <Stack
                sx={{
                    width: "100%",
                    position: "fixed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 0,
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        background: "#292826",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 55,
                    }}
                >
                    <Typography
                        textAlign={"center"}
                        variant="h6"
                        fontSize={{ md: "20px", xs: "10px" }}
                        textTransform={"capitalize"}
                        color="white"
                    >
                        Our Trusted partner
                    </Typography>

                    <img
                        src={Indrajala}
                        alt="indrajala logo"
                        style={{
                            objectFit: "contain",
                            maxHeight: "100%",
                            marginLeft: "40px",
                        }}
                    />
                </Box>
            </Stack>
        </Paper>
    );
}
