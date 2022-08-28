import React, { useEffect, useRef } from "react";
import TextDetailHeading from "./TextDetailHeadingContainer";
import SplitText from "lib/SplitText";
import Loader from "react-loader";
import lengthSplitter from "lib/text_splitters/lengthSplitter";
import styles from "./TextDetail.css";
import { Box, Divider, Slide } from "@mui/material";
import TableOfContent from "./TableOfContent/TableOfContent";
import utilStyles from "css/util.css";
import classnames from "classnames";

import imageStyle from "components/MediaComponent/Image.css";
import SplitTextComponent from "./SplitText";

function TextDetail(props) {
    const ref = useRef();
    let text = {
        name: "",
    };
    if (props.text) {
        text = props.text;
    }
    useEffect(() => {
        let element = ref.current;
        element.addEventListener("mouseenter", mouseEnter);
        return () => {
            element.removeEventListener("mouseenter", mouseEnter);
        };
    }, []);

    function mouseEnter() {
        props.changeSelectedWindow(2);
    }

    let inlineControls = false;
    let textComponent = null;
    let splitText = null;
    const selectedWindow = props.selectedWindow;
    if (!props.annotatedText || !props.text || props.loading) {
        textComponent = <div key={`key-${Math.random()}`} />;
    } else {
        let limitWidth = false;
        let splitter;
        if (props.paginated) {
            splitter = positionSplitter(props.pageBreaks);
        } else {
            splitter = lengthSplitter(800, /^།[\s]+(?!།[\s]+)/, 2, 5);
        }

        let key = 12;
        splitText = new SplitText(props.annotatedText, splitter);
        inlineControls = true;
        textComponent = (
            <SplitTextComponent
                splitText={splitText}
                // annotations={this.props.annotations}
                // activeAnnotations={this.props.activeAnnotations}
                // activeAnnotation={this.props.activeAnnotation}
                limitWidth={limitWidth}
                // didSelectSegmentIds={props.didSelectSegmentIds}
                selectedSegmentId={props.selectedSegmentId}
                annotationPositions={props.annotationPositions}
                selectedAnnotatedSegments={props?.selectedAnnotatedSegments}
                // textListVisible={this.props.textListVisible}
                // showImages={this.props.pageImagesVisible}
                // imagesBaseUrl={this.props.imagesBaseUrl}
                selectedWitness={props.selectedWitness}
                key={key}
                // selectedSearchResult={this.props.selectedSearchResult}
                // searchValue={this.props.searchValue}
                fontSize={props.textFontSize}
                scrollToId={props.scrollToId}
                syncIdOnClick={props.syncIdOnClick}
                textAlignment={props.textAlignment}
                textAlignmentById={props.textAlignmentById}
                isPanelLinked={props.isPanelLinked}
                changeScrollToId={props.changeScrollToId}
                changeSyncIdOnClick={props.changeSyncIdOnClick}
                selectedWindow={selectedWindow}
                selectedSourceRange={props.selectedSourceRange}
                selectedTargetRange={props.selectedTargetRange}
                changeSelectedRange={props.changeSelectedRange}
                searchResults={props.searchResults}
                searchValue={props.searchValue}
                selectedText={props.text}
                syncIdOnSearch={props.syncIdOnSearch}
            ></SplitTextComponent>
        );
    }

    let textComponents = [textComponent];
    let thirdWindowHeight = imageStyle.ThirdWindowHeight;
    let bodyHeight = "calc(100% - " + thirdWindowHeight + ")";
    // let condition = props.isPanelVisible;
    return (
        <Box
            ref={ref}
            className={styles.textDetail2}
            sx={{
                height: "100%",
                flex: 1,
                bgcolor: "navbar.main",
                color: "texts.main",
            }}
        >
            <TextDetailHeading />
            <Divider />
            <Loader loaded={!props.loading} />
            <Box
                style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    position: "relative",
                }}
            >
                <Box
                    style={{ flex: 1 }}
                    className={classnames(
                        styles.textContainer2,
                        utilStyles.flex
                    )}
                >
                    {!props.loading ? textComponents : <div></div>}
                </Box>

                <Slide
                    direction="left"
                    in={props.showTableContent}
                    container={ref.current}
                    unmountOnExit
                    mountOnEnter
                >
                    <Box
                        sx={{
                            position: "absolute",
                            height: "100%",
                            minWidth: "50%",
                            right: 0,
                        }}
                    >
                        <TableOfContent />
                    </Box>
                </Slide>
            </Box>
        </Box>
    );
}

export default TextDetail;
