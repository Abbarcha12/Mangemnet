import React from 'react'
import {
    Routes,
    Route
    
  } from "react-router-dom";
import AddCategory1 from '../components/ProductsPageComponent/CategoryPageComponent/AddCategory1';
import AddCategory2 from '../components/ProductsPageComponent/CategoryPageComponent/AddCategory2';
function CategoryPageRouting() {
    return (
        <div>
            <Routes>
            <Route  path="AddCategory1" element={<AddCategory1/>}/>
            <Route  path="AddCategory2" element={<AddCategory2/>}/>

            </Routes>
        </div>
    )
}

export default CategoryPageRouting
