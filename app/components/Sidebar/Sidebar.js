import React, { useState } from "react";
import styles from "./Sidebar.css";

import {
    Info as InfoIcon,
    PermMedia as PermMediaIcon,
    Book as BookIcon,
    Feedback as FeedbackIcon,
    YoutubeSearchedFor as YoutubeSearchedForIcon,
    Menu as MenuIcon,
    Close as CloseIcon,
} from "components/UI/muiIcon";
import Index from "./SidebarOptions";
import useLocalStorage from "components/utility/useLocalStorage";
import { Tabs, Tab, Typography, Box } from "components/UI/muiComponent";
import { useTheme } from "@mui/styles";
import { connect } from "react-redux";
import * as reducers from "reducers";
function Sidebar(props) {
    const [value, setValue] = useLocalStorage("selectedResources", 0);
    const [isOpen, setOpen] = useState(false);

    React.useEffect(() => {
        let timer = setTimeout(() => {
            if (props.isSecondWindowOpen) {
                window.dispatchEvent(new Event("resize"));
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleOpen = () => {
        setOpen((prev) => !prev);
    };
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: isOpen ? "100%" : "45px",
                bgcolor: "background.default",
                position: props.isSecondWindowOpen ? "relative" : "absolute",
                borderRight:
                    theme.palette.mode === "light"
                        ? "2px solid lightgray"
                        : "2px solid #d3d3d3",
            }}
            className={styles.sidebar}
        >
            <Box className={styles.sidebar_header}>
                <Typography
                    className={styles.menu_title}
                    sx={
                        isOpen
                            ? { width: "fit-content", opacity: 1 }
                            : { width: "0", opacity: 0 }
                    }
                >
                    Menu
                </Typography>
                <div
                    onClick={handleOpen}
                    style={{ cursor: "pointer", zIndex: 1 }}
                >
                    {!isOpen ? <MenuIcon /> : <CloseIcon />}
                </div>
            </Box>
            <Box
                sx={{
                    borderBottom: 1,
                    display: "flex",
                }}
                className={styles.optionlist}
            >
                <Tabs
                    value={value}
                    sx={{
                        flex: 1,
                    }}
                    onChange={handleChange}
                    orientation={!isOpen ? "vertical" : "horizontal"}
                    aria-label="basic tabs example"
                >
                    <Tab
                        style={{ minWidth: 0, flex: 1 }}
                        onClick={() => setOpen(true)}
                        icon={<InfoIcon />}
                        {...a11yProps(0)}
                    ></Tab>

                    <Tab
                        style={{ minWidth: 0, flex: 1 }}
                        icon={<PermMediaIcon />}
                        onClick={() => setOpen(true)}
                        {...a11yProps(1)}
                    ></Tab>
                    <Tab
                        style={{ minWidth: 0, flex: 1 }}
                        icon={<BookIcon />}
                        onClick={() => setOpen(true)}
                        {...a11yProps(2)}
                    ></Tab>
                    <Tab
                        style={{ minWidth: 0, flex: 1 }}
                        icon={<FeedbackIcon />}
                        onClick={() => setOpen(true)}
                        {...a11yProps(3)}
                    ></Tab>
                </Tabs>
            </Box>
            {isOpen && (
                <>
                    <TabPanel value={value} index={0}>
                        <Index.About />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Index.Resources />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Index.FullTextSearch />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Index.Discussion />
                    </TabPanel>
                </>
            )}
        </Box>
    );
}

const mapStateToProps = (state: AppState): {} => {
    const isSecondWindowOpen = reducers.isSecondWindowOpen(state);

    return {
        isSecondWindowOpen,
    };
};
export default connect(mapStateToProps)(Sidebar);

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{
                flex: 1,
                display: value == index ? "flex" : "none",
                flexDirection: "column",
            }}
        >
            {value === index && (
                <div className={styles.listContainer}>{children}</div>
            )}
        </div>
    );
}
