import React, { useCallback, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
function Refresh({ isSecondWindowOpen }) {
    const handleRefresh = useCallback(() => {
        let updatelistBtn2 = document.getElementById("updateList2");

        if (updatelistBtn2) updatelistBtn2.click();
    }, [isSecondWindowOpen]);

    useEffect(() => {
        let timer = setTimeout(() => {
            handleRefresh();
        }, 500);
        return () => clearTimeout(timer);
    }, [isSecondWindowOpen]);

    return (
        <IconButton variant="text" size="small" onClick={handleRefresh}>
            <RefreshIcon />
        </IconButton>
    );
}

export default Refresh;
