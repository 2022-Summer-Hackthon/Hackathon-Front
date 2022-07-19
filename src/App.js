import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Finish from "./components/Finish/Finish";

import Template1Back from "./components/Template1/Template1Back";
import Template1Front from "./components/Template1/Template1Front";
import Template4Back from "./components/Template4/Template4Back";
import Template4Front from "./components/Template4/Template4Front";
import Template2Front from "./components/Template2/Template2Front";
import Template2Back from "./components/Template2/Template2Back";
import Template9Front from "./components/Template9/Template9Front";
import Template9Back from "./components/Template9/Template9Back";

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
              <Template5Front size="large" />
              <Template5Back size="large" />
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
              <Template4Front size="large" />
              <Template4Back size="large" />
            </Suspense>
          }
        />
        <Route
          path="/template9"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template9Front size="large" />
              <Template9Back size="large" />
            </Suspense>
          }
        />
        <Route
          path="/template1"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template1Front size="large" />
              <Template1Back size="large" />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
