import React from "react";
import { Box, Typography } from "components/UI/muiComponent";
import Loader from "react-loader";

import { styled, alpha } from "@mui/material/styles";
import { Search as SearchIcon } from "components/UI/muiIcon";
import { InputBase, Toolbar } from "components/UI/muiComponent";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "0",
            cursor: "pointer",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

function TableOfContent() {
    let data = [
        { Id: 1, Title: "chapter 1", segment_id: 0 },
        { Id: 2, Title: "chapter 2", segment_id: 400 },
    ];
    let loaded = data.length > 0 ? true : false;

    return (
        <Box
            sx={{
                bgcolor: "heading.main",
                color: "text.primary",
                width: "100%",
                height: "100%",
                paddingInline: 2,
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    paddingLeft: "0 !important",
                    margin: 0,
                }}
            >
                <Typography textTransform={"uppercase"} component="h6">
                    Table Of Content
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>
            </Toolbar>
            {/* <Loader loaded={loaded} /> */}
            <Box>
                {data.map((list, index) => {
                    return (
                        <Box
                            key={"TableContent-" + index}
                            sx={{
                                cursor: "pointer",
                                width: "fit-content",
                                "&:hover": {
                                    fontWeight: "bold",
                                },
                            }}
                        >
                            {list.Title}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}

export default TableOfContent;
