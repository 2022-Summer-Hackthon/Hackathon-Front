import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Finish from "./components/Finish/Finish";
import Template1Back from "./components/Template1/Template1Back";
import Template1Front from "./components/Template1/Template1Front";
import Template2Front from "./components/Template2/Template2Front";

const Main = lazy(() => import("./pages/Main/MainPage"));
const Nav = lazy(() => import("./components/Nav/Nav"));
const Template5Front = lazy(() =>
  import("./components/Template5/Template5Front")
);
const Template5Back = lazy(() =>
  import("./components/Template5/Template5Back")
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Nav />
              <Main />
            </Suspense>
          }
        />
        <Route
          path="/finish"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Finish />
            </Suspense>
          }
        />
        <Route
          path="/template5"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template5Front size="nomal" />
              <Template5Back size="nomal" />
            </Suspense>
          }
        />
        <Route
          path="/template1"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template1Front />
              <Template1Back />
            </Suspense>
          }
        />
        <Route
          path="/template2"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template2Front />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
