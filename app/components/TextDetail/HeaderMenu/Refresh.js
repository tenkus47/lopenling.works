import React, { useCallback, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
function Refresh({ isSecondWindowOpen }) {
    const handleRefresh = useCallback(() => {
        let updatelistBtn = document.getElementById("updateList");

        if (updatelistBtn) updatelistBtn.click();
    }, [isSecondWindowOpen]);

    useEffect(() => {
        let timer = setTimeout(() => {
            handleRefresh();
        }, 500);
        return () => clearTimeout(timer);
    }, [isSecondWindowOpen]);

    return (
        <IconButton
            variant="text"
            size="small"
            disableRipple
            onClick={handleRefresh}
        >
            <RefreshIcon />
        </IconButton>
    );
}

export default Refresh;
