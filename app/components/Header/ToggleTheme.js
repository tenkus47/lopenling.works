import { Box, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
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
            {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
            ) : (
                <Brightness4Icon />
            )}
        </IconButton>
    );
}

export default ToggleTheme;
