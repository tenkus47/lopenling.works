// import React, { useRef, useState } from "react";
// import styles from "./Search.css";
// // import Magnifier from "images/magnifier.svg";
// import classnames from "classnames";
// import { injectIntl } from "react-intl";
// import * as reduxroute from "redux-first-router";
// // import useLocalStorage from "../../bodyComponent/utility/useLocalStorage";
// function Search(props) {
//     const input = useRef("");
//     const [search, setSearch] = useState(props.searchValue);
//     const [inputEmpty, setInputEmpty] = useState("");
//     const history = reduxroute.history();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         props.changeSearchTerm(input.current.value);
//         props.searchChanged(input.current.value);

//         input.current.value = props.searchValue;
//     };
//     const handleReset = (e) => {
//         input.current.value = "";
//         setInputEmpty("");
//         setSearch("");
//     };
//     let classes = [styles.resetButton];
//     if (inputEmpty !== "") {
//         classes.push(styles.active);
//     }

//     return (
//         <div className={styles.searchContainer}>
//             <form className={styles.Search} onSubmit={handleSubmit}>
//                 <button className={styles.submit} type="submit">
//                     {/* <Magnifier />*/}
//                     search
//                 </button>
//                 <input
//                     type="text"
//                     ref={input}
//                     value={search}
//                     onChange={(e) => {
//                         setInputEmpty(e.target.value);
//                         setSearch(e.target.value);
//                         props.searchChanged(e.target.value);
//                     }}
//                     placeholder={props.intl.formatMessage({
//                         id: "leftbar.search",
//                     })}
//                 />

//                 <button
//                     type="reset"
//                     className={classnames(classes)}
//                     onClick={handleReset}
//                 >
//                     x
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default injectIntl(Search);
