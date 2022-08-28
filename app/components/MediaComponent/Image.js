import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import styles from "./Image.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import _ from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
    IconButton,
    NativeSelect,
    MenuItem,
    FormControl,
    Box,
    InputLabel,
    AppBar,
} from "@mui/material";
import classnames from "classnames";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CircularProgress from "@mui/material/CircularProgress";
import CancelIcon from "@mui/icons-material/Cancel";
function HttpUrl(data = "") {
    if (data.includes("https")) return data;
    return "https://" + data;
}
async function fetchImage(url) {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    return imageObjectURL;
}

function Image(props) {
    const selectRef = useRef(null);
    let imageList = props.imageData?.alignment;
    let message = props.imageData?.message;
    let imageRef = React.useRef("");
    let textIdfromAlignment = props.alignmentData.text;
    let imageAlignmentById = props.imageAlignmentById;
    let imageScrollId = props.imageScrollId;
    let isPortraitImage = props.isImagePortrait;
    let [imageSelected, SetSelected] = useState(0);
    let [imageHeight, setImageHeight] = useState("50vh");
    let imageIdList = [];
    let syncIdOnClick = props.syncIdOnClick;
    let [loading, setLoading] = useState(false);
    const [img, setImg] = useState();

    useEffect(() => {
        setLoading(true);
        if (!_.isEmpty(imageList)) {
            let url = HttpUrl(imageList[imageSelected].target_segment);
            let imageObjectURL = fetchImage(url, imageList);
            imageObjectURL
                .then((data) => {
                    setImg(data);
                    setLoading(false);
                })
                .catch((e) => console.log(e));

            let image = imageList[imageSelected];
            props.changeSelectedImage(image);
            let imageDocId = image.source_segment.start;
        }
    }, [imageList, imageSelected]);

    if (!_.isEmpty(imageList)) {
        imageIdList = imageList.map((l) => parseInt(l.source_segment.start));
    }

    useEffect(() => {
        let IDtoSync = parseInt(imageScrollId.id.start);
        if (
            textIdfromAlignment === props.selectedText.id &&
            imageScrollId.from === 1
        ) {
            if (!_.isEmpty(imageList)) {
                let findSegment = imageList.find(
                    (l) =>
                        l.source_segment.start <= IDtoSync &&
                        l.source_segment.end > IDtoSync
                );
                let index = imageList.findIndex(
                    (l) => l?.source_segment === findSegment.source_segment
                );
                if (parseInt(index) >= 0) {
                    SetSelected(index);
                }
            }
        }
    }, [imageScrollId]);

    useEffect(() => {
        selectRef.current.value = props.witness;
        setLoading(true);
        fetchImage();
    }, [props.witness]);

    useEffect(() => {
        if (textIdfromAlignment === props.selectedText.id) {
            let ClickId = syncIdOnClick.toString().replace("s_", "");
            if (imageList?.length > 0 && ClickId > 0) {
                let findSegment = imageList.find(
                    (l) =>
                        l.source_segment.start < ClickId &&
                        l.source_segment.end > ClickId
                );
                let index = imageList.findIndex(
                    (l) => l?.source_segment === findSegment?.source_segment
                );
                if (index >= 0) {
                    SetSelected(index);
                }
            }
        }
    }, [syncIdOnClick]);

    const isPortrait = ({ target: img }) => {
        //this Check if the provided Image is a portrait or a landScape
        let tempHeight = img.naturalHeight;
        setImageHeight(img.naturalHeight);
        let tempWIdth = img.naturalWidth;
        if (tempHeight === 0 || tempWIdth === 0) return null;
        props.changeIsImagePortrait(tempHeight >= tempWIdth);
        setLoading(false);
    };
    const handleChangeImage = (data) => {
        let currentid = imageAlignmentById.find((l) => {
            return l.id === imageSelected;
        });
        console.log(currentid);
        if (data === "prev" && imageSelected > 0) {
            SetSelected((prev) => prev - 1);
        }
        if (data === "next" && imageSelected < imageIdList.length) {
            SetSelected((prev) => prev + 1);
        }
    };

    return (
        <div
            className={
                isPortraitImage
                    ? styles.ThirdWindowPortrait
                    : styles.ThirdWindow
            }
            // onResize={handleResize}
        >
            <Box
                className={styles.header}
                sx={{
                    boxShadow: 1,
                    bgcolor: "primary",
                }}
            >
                <Box position="relative" zIndex={2}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <NativeSelect
                            labelid="demo-select-small"
                            inputRef={selectRef}
                            onChange={(e) =>
                                props.changeImageVersion(e.target.value)
                            }
                            inputProps={{
                                name: "age",
                                id: "uncontrolled-native",
                            }}
                        >
                            {props.witnesses.map((witness) => {
                                return (
                                    <option
                                        key={witness.id}
                                        value={witness.id}
                                        style={{ textAlign: "center" }}
                                    >
                                        {witness.source.name}
                                    </option>
                                );
                            })}
                        </NativeSelect>
                    </FormControl>
                </Box>
                <IconButton
                    aria-label="close"
                    style={{ position: "absolute", right: 10 }}
                    onClick={() => props.changeMediaSelection(null)}
                >
                    <CancelIcon />
                </IconButton>
            </Box>
            <Box className={styles.imageSection}>
                {_.isEmpty(imageList) ? (
                    <>
                        {message ? (
                            <h1>{message}</h1>
                        ) : (
                            <Box sx={{ height: "30vh" }}>
                                <CircularProgress color="secondary" />
                            </Box>
                        )}
                    </>
                ) : (
                    <>
                        <center height="100%">
                            {!loading ? (
                                <TransformWrapper>
                                    <TransformComponent>
                                        <LazyLoadImage
                                            itemRef={imageRef}
                                            className={styles.ImageStyle}
                                            src={img}
                                            alt="imagepecha"
                                            onLoad={isPortrait}
                                        />
                                    </TransformComponent>
                                </TransformWrapper>
                            ) : (
                                <Box sx={{ height: "30vh" }}>
                                    <CircularProgress color="secondary" />
                                </Box>
                            )}
                        </center>
                        <IconButton
                            onClick={() => handleChangeImage("prev")}
                            sx={{
                                position: "absolute",
                                left: 20,
                                top: 100,
                            }}
                            color="primary"
                        >
                            <ChevronLeftIcon fill="currentColor" />
                        </IconButton>
                        <IconButton
                            color="primary"
                            onClick={() => handleChangeImage("next")}
                            sx={{
                                position: "absolute",
                                right: 20,
                                top: 100,
                            }}
                        >
                            <ChevronRightIcon fill="currentColor" />
                        </IconButton>
                    </>
                )}
            </Box>
        </div>
    );
}

export default memo(Image);
