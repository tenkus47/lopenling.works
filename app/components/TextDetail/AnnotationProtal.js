import React from "react";
import { connect } from "react-redux";
import { getActiveTextAnnotation } from "reducers";

let initialLoad = true;
function AnnotationProtal({ activeAnnotation }) {
    const portal = React.useRef(null);

    const measure = React.useCallback(
        (e) => {
            let control = document.getElementById(
                `s_${activeAnnotation?.start}`
            );
            if (control) {
                const position = control.getBoundingClientRect();
                let top = Math.floor(position.top - 40);
                portal.current.style.top = top + "px";
            }
        },
        [activeAnnotation?.start]
    );

    React.useEffect(() => {
        const scrollElement = document.getElementById("scroller");
        if (!initialLoad) {
            let scrolling = false;
            if (scrollElement)
                scrollElement.addEventListener("scroll", measure);
            if (!scrolling) {
                let start = activeAnnotation?.start;
                let control = document.getElementById(`s_${start}`);
                // while (!control) {
                //     start = start + 1;
                //     control = document.getElementById(`s_${start}`);
                // }
                if (control) {
                    const position = control.getBoundingClientRect();
                    let top = Math.floor(position.top - 40);
                    portal.current.style.top = top + "px";
                }
            }
        }
        initialLoad = false;

        return () => {
            if (!scrollElement) return null;

            scrollElement.removeEventListener("scroll", measure);
        };
    }, [activeAnnotation?.start]);

    return (
        <div
            id="annotation-portal"
            ref={portal}
            style={{
                position: "absolute",
                left: "97%",
                zIndex: 10,
                maxWidth: 300,
                width: "max-content",
                transition: "all 0.1s linear 0s",
            }}
        ></div>
    );
}

const getStateUsingProp = (state) => {
    return { activeAnnotation: getActiveTextAnnotation(state) };
};
export default connect(getStateUsingProp)(AnnotationProtal);
