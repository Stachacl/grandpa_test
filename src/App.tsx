import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckListPage } from "./pages/CheckListPage";
import { ContactPage } from "./pages/ContactPage";                                   
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

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
      </BrowserRouter>
    </>
  );
};

export default App;
