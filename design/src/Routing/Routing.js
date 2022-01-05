import React from 'react'
import Reports from '../layouts/Reports/Reports';
import {
    Routes,
    Route
    
  } from "react-router-dom";
import Catagerios from '../layouts/Catagerios/catagerios';
import DashboradPage from '../layouts/Dashborad/DashboradPage/DashboradPage';
import Products from '../layouts/Products/Products';
import User from '../layouts/User/User';
import Alternatives from '../layouts/Alternatives/Alternatives';
import Slider from "../layouts/Slider/Slider"
import DataBase from "../layouts/DataBase/DataBase"

function Routing() {
    return (
        <div>
        <Routes>
             <Route path="Products"  element={<Products/>}/>
             <Route path="DashboradPage" element={<DashboradPage/>}/>
             <Route path="Categories" element={<Catagerios/>}/>
             <Route path="Reporting" element={<Reports/>}/>
             <Route path="User" element={<User/>}/>
             <Route path="Alternatives" element={<Alternatives/>}/>
             <Route path="Slider" element={<Slider/>}/>
             <Route path="DataBase" element={<DataBase/>}/>







        </Routes>
        </div>
    ) 
}

export default Routing
