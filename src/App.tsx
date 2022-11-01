import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          {/* <Routes>
            <Route element={<ContactPage />} path="/" />
          </Routes> */}
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
