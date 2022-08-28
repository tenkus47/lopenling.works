import React, { useState, useEffect } from "react";
import TextsSearchContainer from "components/TextsSearch/TextsSearchContainer";
import TextListContainer from "containers/TextListContainer";
import TextListTabContainer from "components/TextList/TextListTabContainer";
import * as constants from "app_constants";
import lopenlingLogo from "images/lopenling_logo.png";
import headerStyles from "components/Header/Header.css";
import Resources from "components/Resources";
import SplitPane, { Pane } from "react-split-pane";
import styles from "./EditorContainer.css";
import classnames from "classnames";
import utilStyles from "css/util.css";
import TextSheet from "./TextSheet";
import {
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    Snackbar,
    Alert,
    Collapse,
} from "@mui/material";

import { Edit, Share, VerticalSplit, SyncAlt } from "@mui/icons-material";
import { Box } from "@mui/system";
const Editor = (props) => {
    let textListClassnames = [styles.listContainer];
    let bodyHeight;
    let minSize = constants.MIN_TEXT_LIST_WIDTH;
    let maxSize = constants.MAX_TEXT_LIST_WIDTH;

    const [open, setOpen] = useState(false);

    let defaultSize = constants.DEFAULT_TEXT_LIST_WIDTH;
    let size = props.textListWidth;
    if (props.textListIsVisible) {
        textListClassnames.push(styles.showListContainer);
    } else {
        size = 0;
        textListClassnames.push(styles.hideListContainer);
    }

    bodyHeight = "calc(100vh - " + headerStyles.headerHeight + ")";

    const image_location = lopenlingLogo;
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    const handleShare = () => {
        let textid = props.selectedText;
        let textid2 = props.selectedText2;
        let witnessid = props.selectedWitness;
        let witnessid2 = props.selectedWitness2;
        let url = "";
        if (textid2 && witnessid2) {
            url =
                window.location.origin +
                `/texts/${textid.id}/witnesses/${witnessid?.id}/texts2/${textid2.id}/witnesses2/${witnessid2.id}`;
        } else {
            url =
                window.location.origin +
                `/texts/${textid.id}/witnesses/${witnessid?.id}`;
        }
        navigator.clipboard
            .writeText(url)
            .then()
            .catch((e) => console.log(e.message))
            .finally(() => setOpen(true));
    };
    const actions = [
        {
            icon: (
                <Edit htmlColor={props.isAnnotating ? "#ff7961" : undefined} />
            ),
            name: "Annotate",
            condition: props.isAnnotating,
            function: () => props.changeIsAnnotating(!props.isAnnotating),
        },
        {
            icon: (
                <SyncAlt
                    htmlColor={props.isPanelLinked ? "#ff7961" : undefined}
                />
            ),
            name: "Link Panel",
            condition: props.isPanelLinked,
            function: () => props.onChangePanelLink(!props.isPanelLinked),
        },
        {
            icon: <Share />,
            name: "Share",
            function: handleShare,
        },
        {
            icon: (
                <VerticalSplit
                    htmlColor={props.isSecondWindowOpen ? "#ff7961" : undefined}
                />
            ),
            name: "Split Window",
            condition: props.isSecondWindowOpen,
            function: () =>
                props.onChangeWindowOpen(!props.isSecondWindowOpen, 140),
        },
    ];
    useEffect(() => {
        let timer = setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
        }, 1000);
        return () => clearTimeout(timer);
    }, [props.textListIsVisible]);
    return (
        <div className={classnames(styles.interface, utilStyles.flex)}>
            <SplitPane
                size="fit-content"
                onDragFinished={(width: number) => {
                    if (width > 0) window.dispatchEvent(new Event("resize"));
                }}
                resizerStyle={{ display: "none" }}
            >
                <Collapse
                    sx={{ height: "100%" }}
                    orientation="horizontal"
                    in={props.textListIsVisible}
                    mountOnEnter
                    unmountOnExit
                >
                    <Resources />
                </Collapse>
                <Box sx={{ height: "100vh", width: "100%" }}>
                    <TextSheet bodyHeight={bodyHeight} />
                </Box>
            </SplitPane>
            <SpeedDial
                ariaLabel="SpeedDial basic"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.function}
                        open={action.condition}
                    />
                ))}
            </SpeedDial>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    The Url Copied to Clipboard !
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Editor;

// return (
//     <div className={classnames(styles.interface, utilStyles.flex)}>
//         <SplitPane
//             split="vertical"
//             minSize={minSize}
//             maxSize={maxSize}
//             defaultSize={defaultSize}
//             size={size}
//             paneStyle={{
//                 display: "flex",
//             }}
//             style={{
//                 height: bodyHeight,
//             }}
//             onDragFinished={(width: number) => {
//                 if (width > 0) {
//                     props.onChangedTextWidth(width);
//                     if (!props.textListIsVisible) {
//                         props.onChangedTextListVisible(true);
//                     }
//                 }
//                 window.dispatchEvent(new Event("resize"));
//             }}
//         >
//             <div className={classnames(...textListClassnames)}>
//                 <Resources />
//             </div>

//             <TextSheet bodyHeight={bodyHeight} />
//         </SplitPane>
//     </div>
// );
