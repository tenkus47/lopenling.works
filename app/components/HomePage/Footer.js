import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Indrajala from "images/indrajala_logo.png";
import { prayer } from "./prayerMarquee";
import Marquee from "react-fast-marquee";

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
                <Marquee
                    pauseOnHover={true}
                    gradient={false}
                    style={{
                        background: "#292826",
                        color: "white",
                    }}
                >
                    {prayer}
                </Marquee>
            </Stack>
        </Paper>
    );
}
