import React from 'react'
import { Input } from 'antd';
import Productside1 from '../../components/ProductsPageComponent/Productside1'
import ProductLeftside from '../../components/ProductsPageComponent/ProductLeftside'
import ProductName from '../../components/ProductsPageComponent/ProductName'
import ProductSubtable from '../../components/Table/ProductSubtable';
import CloseBtn from '../../components/ReportingPageComponents/Button/CloseBtn'

const { Search } = Input;


function Product1() {
    return (
        <div>
        <div className='container mt-3'>
        <div className='row'>
         <div className='col-md-4'>
         <Productside1/>
         </div>
         <div className='col-md-2'></div>
        <div className='col-md-6'>
        <ProductLeftside/>
       </div>
        </div>

       </div>
  <div className='container mt-5'>
   <div className='row mt-5'>
    <div className="col-md-2">
    
    <ProductName
    Name="Product alternatives (17)"
    />
    </div>
    <div className="col-md-3">
    <CloseBtn
    close="Add a product as an alternative"
    />
    <Search placeholder=" " className='mt-3'  />
    </div>
    <div className="col-md-7">
    <ProductSubtable/>
    </div>
  

   </div>
  
  </div>
        </div>
    )
}

export default Product1
