import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckListPage } from "./pages/CheckListPage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import FontSizeChanger from "react-font-size-changer";

const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="font-change-area">
          <FontSizeChanger
            targets={["#target .content"]}
            // onChange={() => {
            //   console.log();
            // }}
            options={{
              stepSize: 2,
              range: 3,
            }}
            customButtons={{
              up: <i className="small material-icons ">font_download</i>,
              down: <i className="tiny material-icons ">font_download</i>,
            }}
          />

          <div id="target">
            <p className="title">This is the title of my target text</p>
            <p className="content">This is the content of my target text</p>
          </div>
        </div>

        <Hero />
        <div className="container">
          <Routes>
            <Route element={<CheckListPage />} path="/" />
            <Route element={<ContactPage />} path="/contact" />
          </Routes>
        </div>
        <Footer />

       
      </BrowserRouter>
    </>
  );
};

export default App;
