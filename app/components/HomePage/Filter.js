import React, { useEffect } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import {
    Box,
    Chip,
    Slider,
    Stack,
    Typography,
    Autocomplete,
    Checkbox,
} from "@mui/material";
import _ from "lodash";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
function Filter({
    setFiltered,
    setLengthRange,
    setCategoryList,
    setAuthor = () => {},
    featureText = [],
}) {
    const handleChange = (e) => {
        setFiltered(e.target.value);
    };
    useEffect(() => {
        setFiltered(featureText);
    }, []);

    return (
        <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent={"space-around"}
            alignItems={{ md: "center" }}
            gap={2}
            mx={{ md: 3 }}
            sx={{ boxShadow: 3, padding: 2 }}
        >
            <Typography>Filter</Typography>
            <Box flex={1}>
                <SearchBar handleChange={handleChange} />
            </Box>
            {/* <Box flex={1}>
                <Author setAuthor={setAuthor} AuthorList={AuthorList} />
            </Box>
            <Box flex={0}>
                <Typography>Category</Typography>
                <Category setCategoryList={setCategoryList} />
            </Box>

            <Box flex={2}>
                <Typography mt={2}>Text Length</Typography>
                <TextLength setLengthRange={setLengthRange} />
            </Box> */}
        </Stack>
    );
}

export default Filter;

const SearchBar = ({ handleChange }) => (
    <TextField
        id="search-bar"
        className="text"
        onInput={handleChange}
        label="Title"
        variant="outlined"
        placeholder="Search..."
        size="small"
    />
);
// const Category = ({ setCategoryList }) => {
//     const CATEGORY_LIST = ["root", "commentary"];
//     const [selectedCategory, setSelectedCategory] = useState([]);
//     function handleChipClick(e) {
//         let arr = [...selectedCategory];
//         if (arr.includes(e)) {
//             arr.splice(arr.indexOf(e), 1);
//         } else {
//             arr.push(e);
//         }
//         setSelectedCategory([...arr]);
//         setCategoryList([...arr]);
//     }
//     return (
//         <Stack direction="row" gap={2}>
//             {CATEGORY_LIST.map((category, index) => {
//                 let condition = selectedCategory.includes(category);
//                 return (
//                     <Chip
//                         key={category + "-" + index}
//                         label={category}
//                         size="small"
//                         variant={condition ? "filled" : "outlined"}
//                         sx={{
//                             cursor: "pointer",
//                         }}
//                         onClick={() => handleChipClick(category)}
//                     />
//                 );
//             })}
//         </Stack>
//     );
// };

// const TextLength = ({ setLengthRange }) => {
//     const MinLength = 1000;
//     const MaxLength = 30000;
//     const [value, setValue] = React.useState([MinLength, MaxLength]);
//     const debounce_change = _.debounce(function (event, newValue) {
//         setLengthRange(newValue);
//     }, 1000);
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//         debounce_change(event, newValue);
//     };

//     return (
//         <Slider
//             max={MaxLength}
//             min={MinLength}
//             getAriaLabel={() => "TextLength range"}
//             value={value}
//             onChange={handleChange}
//             valueLabelDisplay="auto"
//             // getAriaValueText={valuetext}
//         />
//     );
// };
// const Author = ({ setAuthor, AuthorList }) => {
//     const handleChange = (e, value) => {
//         setAuthor([...value]);
//     };
//     return (
//         <Autocomplete
//             multiple
//             id="checkboxes-tags-demo"
//             options={AuthorList}
//             onChange={handleChange}
//             disableCloseOnSelect
//             getOptionLabel={(option) => option}
//             renderOption={(props, option, { selected }) => (
//                 <li {...props}>
//                     <Checkbox
//                         icon={icon}
//                         checkedIcon={checkedIcon}
//                         style={{ marginRight: 8 }}
//                         checked={selected}
//                     />
//                     {option}
//                 </li>
//             )}
//             style={{ width: 500 }}
//             renderInput={(params) => (
//                 <TextField
//                     {...params}
//                     label="Author"
//                     placeholder="Name"
//                     size="small"
//                 />
//             )}
//         />
//     );
// };
