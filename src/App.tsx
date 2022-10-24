import React  from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckListPage } from "./pages/CheckListPage";
import { ContactPage } from "./pages/ContactPage";

const App: React.FunctionComponent = () => {
  
  return (
    <>
     <BrowserRouter> 
        <Navbar />
      <div className="container">
        <Routes>
           <Route element={<CheckListPage/>} path='/'/>
           <Route element={<ContactPage/>} path='/contact'/>
         </Routes>
      </div>
      </BrowserRouter>
    </>
  );
};

export default App;

