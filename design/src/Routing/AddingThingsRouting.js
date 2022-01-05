import React from 'react'
import {
    Routes,
    Route
    
  } from "react-router-dom";
import AddProduct2 from '../layouts/Products/AddProduct2';
import AddProduct1 from '../layouts/Products/AddProductPage/AddProduct1';
import Product1 from '../layouts/Products/Product1';
function AddingThingsPage() {
    return (
        <div>
        <Routes>
        <Route path="Product1"  element={<Product1/>}/>
        <Route path="Addproduct2"  element={<AddProduct2/>}/>


   </Routes>
        </div>
    )
}

export default AddingThingsPage
