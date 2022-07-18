import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Finish from "./components/Finish/Finish";

import Template4Back from "./components/Template4/Template4Back";
import Template4Front from "./components/Template4/Template4Front";
import Template2Front from "./components/Template2/Template2Front";
import Template2Back from "./components/Template2/Template2Back";

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
          path="/template2"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template2Front />
              <Template2Back />
            </Suspense>
          }
        />
        <Route
          path="/template4"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template4Front size="nomal" />
              <Template4Back size="nomal" />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
