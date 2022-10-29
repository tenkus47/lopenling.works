import { Box, IconButton } from "components/UI/muiComponent";
import React, { useEffect } from "react";
import { Brightness7, Brightness4 } from "components/UI/muiIcon";
import { useTheme } from "@mui/material/styles";
import useLocalStorage from "components/utility/useLocalStorage";
function ToggleTheme({ changeTheme }) {
    const [selectedMode, setSelectedMode] = useLocalStorage("theme", "light");
    const theme = useTheme();
    const handleThemeChange = () => {
        if (theme.palette.mode === "dark") {
            setSelectedMode("light");
        } else {
            setSelectedMode("dark");
        }
    };
    useEffect(() => {
        changeTheme(selectedMode);
    }, [selectedMode]);

    return (
        <IconButton sx={{ ml: 1 }} onClick={handleThemeChange} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
}

export default ToggleTheme;
