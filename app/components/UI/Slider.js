import React, { useEffect, useState } from "react";
import styles from "./Slider.css";
import _ from "lodash";
function Slider({
    max,
    min,
    initialvalue,
    changeSize = (r) => console.log(r),
}) {
    let initialPercent = (initialvalue / max) * 100;
    const [tempValue, setTempValue] = useState(initialPercent);
    const submitValue = _.debounce((e) => {
        let currentPercent = (tempValue / 100) * max;
        changeSize(Math.floor(parseInt(currentPercent)));
    }, 500);

    return (
        <div className={styles.inputRanges}>
            <span
                style={{ fontSize: 13, top: "-5px" }}
                onClick={() => changeSize(initialvalue - 2)}
            >
                ཀ
            </span>
            <input
                type="range"
                style={{ width: "70%" }}
                className={styles.inputRange}
                min={40}
                max={100}
                smooth="yes"
                step={1}
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                onMouseUp={submitValue}
                onTouchEnd={submitValue}
            />
            <span
                style={{ fontSize: 18, top: "-10px" }}
                onClick={() => changeSize(initialvalue + 2)}
            >
                ཀ
            </span>
        </div>
    );
}

export default Slider;
