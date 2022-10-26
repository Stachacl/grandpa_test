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
        <Hero />
        <div className="container">
          <Routes>
            <Route element={<CheckListPage />} path="/" />
            <Route element={<ContactPage />} path="/contact" />
          </Routes>
        </div>
        <Footer />

        <div className="app">
        <FontSizeChanger
          targets={['#target .content']}
          onChange={() => {
            console.log();
          }}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            style: {
              backgroundColor: 'red',
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
          }}          
        />
        <div id="target">
          <p className="title">This is the title of my target text</p>
          <p className="content">This is the content of my target text</p>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
};

export default App;
