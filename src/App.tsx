import React  from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckListPage } from "./pages/CheckListPage";
import { ContactPage } from "./pages/ContactPage";

const App: React.FunctionComponent = () => {
  
  return (
    <>
      <Navbar />
      <div className="container">
       <BrowserRouter> 
         <Routes>
           <Route element={<CheckListPage/>} path='/'/>
           <Route element={<ContactPage/>} path='/'/>
         </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

