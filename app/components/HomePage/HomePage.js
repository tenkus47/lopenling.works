import React, { useEffect, useState } from "react";
import _ from "lodash";
import Link from "redux-first-router-link";
import addTibetanShay from "lib/addTibetanShay";
import styles from "./HomePage.css";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  CircularProgress,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Stack,
  Chip,
  Box,
  IconButton,
  Collapse,
  FormControlLabel,
  Checkbox,
  Divider,
  Pagination,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Filter from "./Filter";
import { motion } from "framer-motion";
import Footer from "./Footer";
import usePagination from "./pagination";
const PER_PAGE = 4;

function HomePage(props) {
  let { Textdata } = props;
  let { activeText, detail } = Textdata;
  let [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredTitle, setFilteredTitle] = useState("");
  // const [categorySelected, setCategorySelected] = useState([]);
  // const [author, setAuthor] = useState([]);
  // const [lengthRange, setLengthRange] = useState([]);
  const count = Math.ceil(filteredData.length / PER_PAGE);
  let _DATA = usePagination(filteredData, PER_PAGE) || [];

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    console.log(_DATA);
  };

  const handleToggleFilter = React.useCallback(() => {
    setShowFilter((prev) => !prev);
  }, []);
  const listRef = React.useRef(null);
  useEffect(() => {
    let tempData = [];
    if (filteredTitle !== null) {
      tempData = detail?.filter((val) => {
        if (filteredTitle === "" || filteredTitle === []) return val;
        else return val.title.includes(filteredTitle);
      });
    } else {
      tempData = detail;
    }
    // if (categorySelected.length) {
    //     tempData = tempData.filter((val) => {
    //         return categorySelected.includes(val.category);
    //     });
    // }
    // if (lengthRange.length) {
    //     tempData = tempData.filter((val) => {
    //         return (
    //             val.length >= lengthRange[0] && val.length < lengthRange[1]
    //         );
    //     });
    // }
    // if (author.length) {
    //     tempData = tempData.filter((val) => {
    //         return author.includes(val.author);
    //     });
    // }
    setFilteredData(tempData.sort((a, b) => a?.order - b?.order));
  }, [filteredTitle, detail]);

  return (
    <Stack sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "4rem",
        }}
        mx={2}
      >
        <h3 className={styles.title} mx={3}>
          <FormattedMessage id={"library"} />
        </h3>

        <IconButton onClick={handleToggleFilter}>
          <FilterAltIcon />
        </IconButton>
      </Box>
      <Collapse in={showFilter}>
        <Filter
          setFiltered={setFilteredTitle}
          // setCategoryList={setCategorySelected}
          // setLengthRange={setLengthRange}
          // setAuthor={setAuthor}
        />
      </Collapse>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {filteredData.length > PER_PAGE && (
          <Pagination
            count={count}
            size="small"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            sx={{ alignSelf: "flex-end", marginTop: 2 }}
          />
        )}
        <Box
          mt={2}
          py={1}
          display="flex"
          // height={{ xs: "60vh", md: "auto" }}
        >
          <motion.div layout>
            <Stack
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}
              pb={2}
              direction="row"
              className={styles.list}
              ref={listRef}
            >
              {_DATA.currentData().map((pecha, i) => {
                return (
                  <Box
                    key={pecha.id || `filteredData-${i}`}
                    sx={{
                      width: "auto",
                      scrollSnapAlign: "start",
                    }}
                  >
                    <Tooltip title={pecha.description}>
                      <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        layout
                      >
                        <Link
                          to={`/texts/${pecha.text}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Card
                            sx={{
                              cursor: "pointer",
                              textDecoration: "none",
                            }}
                            elevation={3}
                            key={pecha.id}
                          >
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h6"
                                textAlign="center"
                                textTransform="capitalize"
                                fontWeight="bold"
                                width="max-content"
                              >
                                {addTibetanShay(pecha.title)}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    </Tooltip>
                  </Box>
                );
              })}
            </Stack>
          </motion.div>
        </Box>
      </Container>
      <Footer />
    </Stack>
  );
}

export default React.memo(HomePage);
