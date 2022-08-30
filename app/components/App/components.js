// components.js
import React, { Suspense } from "react";
const EditorContainer = React.lazy(() => import("components/Editors"));
import HomePageContainer from "components/HomePage";
const HomePage = () => <HomePageContainer />;

const Editors = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <EditorContainer />
  </Suspense>
);

const mapStateToProps = ({ location }) => ({
  userId: location.payload.id,
});

const NotFound = () => <h3>404</h3>;

export { HomePage, Editors, NotFound };
