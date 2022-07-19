import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Finish from "./components/Finish/Finish";

import Template1Back from "./components/Template1/Template1Back";
import Template1Front from "./components/Template1/Template1Front";
import Template3Back from "./components/Template3/Template3Back";
import Template3Front from "./components/Template3/Template3Front";
import Template4Back from "./components/Template4/Template4Back";
import Template4Front from "./components/Template4/Template4Front";
import Template2Front from "./components/Template2/Template2Front";
import Template2Back from "./components/Template2/Template2Back";
import Template9Front from "./components/Template9/Template9Front";
import Template9Back from "./components/Template9/Template9Back";
import Template6Front from "./components/Template6/Template6Front";
import Template6Back from "./components/Template6/Template6Back";
import Template7Front from "./components/Template7/Template7Front";
import Template7Back from "./components/Template7/Template7Back";
import Template8Front from "./components/Template8/Template8Front";
import Template8Back from "./components/Template8/Template8Back";
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
              <Template5Front size="normal" />
              <Template5Back size="normal" />
            </Suspense>
          }
        />
        <Route
          path="/template2"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template2Front size="normal" />
              <Template2Back size="normal" />
            </Suspense>
          }
        />
        <Route
          path="/template4"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template4Front size="normal" />
              <Template4Back size="normal" />
            </Suspense>
          }
        />
        <Route
          path="/template9"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template9Front size="normal" />
              <Template9Back size="normal" />
            </Suspense>
          }
        />
        <Route
          path="/template1"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template1Front size="normal" />
              <Template1Back size="normal" />
            </Suspense>
          }
        />
        <Route
          path="/template3"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template3Front size="normal" />
              <Template3Back size="normal" />
            </Suspense>
          }
        />
        <Route
          path="/template6"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template6Front size="normal" />
              <Template6Back size="normal" />
            </Suspense>
          }
        />
        <Route
          path="/template7"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template7Front size="normal" />
              <Template7Back size="normal" />
            </Suspense>
          }
        />
        <Route
          path="/template8"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Template8Front size="normal" />
              <Template8Back size="normal" />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
