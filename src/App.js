import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateUser from "./pages/Create_page/CreateUser";
import Edit from "./pages/Edit_page/Edit";
import Profile from "./pages/Profile_page/Profile";
import Navbar1 from "./components/Navbar1";



const App=()=>{
  return(
    <BrowserRouter>
       <Navbar1/>
       <Routes>
        <Route path="/" Component={Dashboard}/>
        <Route path="/create" Component={CreateUser}/>
        <Route  path="/edit/:id" Component={Edit}/>
        <Route path="/profile/:id" Component={Profile}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App;