import React from "react";
// import universal from "react-universal-component";
import Loader from "react-loader";
import { connect } from "react-redux";
import * as components from "./components";

function Switcher(props) {
  const { page, isLoading } = props;
  const Component = components[page];

  return (
    // <UniversalComponent
    //     page={page}
    //     isLoading={page === "Editors" ? isLoading : false}
    // />
    <Component />
  );
}

// const UniversalComponent = universal(
//     (props) => import(`components/${props.page}`),
//     {
//         minDelay: 300,
//         chunkName: (props) => props.page,
//         loading: () => <Loader />,
//         ignoreBabelRename: true,
//         error: (e) => (
//             <div className="notFound">
//                 PAGE NOT FOUND - 404, click <a href="/">Here</a>
//                 {`${e.toString()}`}
//             </div>
//         ),
//         loadingTransition: true,
//     }
// );
const mapState = ({ page, direction, ...state }) => ({
  page,
  isLoading: !state.data.loadedInitialData,
});

export default connect(mapState)(Switcher);
