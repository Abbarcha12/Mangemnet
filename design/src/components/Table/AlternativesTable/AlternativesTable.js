import React from 'react'
import "../../Table/Table1.css"
import Name from "../../../components/All/Names/Name"
import Brand from '../../../components/ProductsPageComponent/Brand/Brand'
import brand1 from "../../../image/brand1.png"
import Haram from '../../All/Buttons/Status/Haram'
import Suspact from '../../All/Buttons/Status/Suspact'
import Profile from '../../All/ProfileIcon/Profile'
import Number1 from '../../All/Number/Number'
import Edit from '../../All/DeleteIcon/Edit'

function Table1() {
    return (
        <div className='Tablepro table-responsive'>
        <table class="table ">
        <thead>
          <tr>
            <th scope="col">
            <Name
            Name1="Products"
            />
            </th>
            <th scope="col">
            <Name
            Name1="Products alternatives"

            />
            </th>
            <th scope="col">
            <Name
            Name1="Catégorie du produit"

            />
            </th>
            <th scope="col">  <Name
            Name1="Status"

            /></th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          <tr className='even'>
            <th scope="row">
            <Brand
            img={brand1}
            title="Product name"
            sub_title="Brand name"
            /></th>
            <td>
            <td><Profile/></td>
            </td>
            <td><Number1
            title="Brings all your..."
            /></td>
            <td><Haram/></td>
          
            <td><Edit/></td>
            

          </tr>
          <tr className=''>
            <th scope="row">
            <Brand
            img={brand1}
            title="Product name"
            sub_title="Brand name"
            /></th>
            <td>
            <td><Profile/></td>
            </td>
            <td><Number1
            title="Brings all your..."
            /></td>
            <td><Haram/></td>
          
        
     
            <td><Edit/></td>
            

          </tr>
          <tr className='even'>
            <th scope="row">
            <Brand
            img={brand1}
            title="Product name"
            sub_title="Brand name"
            /></th>
            <td>
            <td><Profile/></td>
            </td>
            <td><Number1
            title="Brings all your..."
            /></td>
            <td><Haram/></td>
          
        
     
            <td><Edit/></td>
            

          </tr>
          <tr className=''>
            <th scope="row">
            <Brand
            img={brand1}
            title="Product name"
            sub_title="Brand name"
            /></th>
            <td>
            <td><Profile/></td>
            </td>
            <td><Number1
            title="Brings all your..."
            /></td>
            <td><Suspact/></td>
          
        
     
            <td><Edit/></td>
            

          </tr>
          <tr className='even'>
          <th scope="row">
          <Brand
          img={brand1}
          title="Product name"
          sub_title="Brand name"
          /></th>
          <td>
          <td><Profile/></td>
          </td>
          <td><Number1
          title="Brings all your..."
          /></td>
          <td><Suspact/></td>
        
      
   
          <td><Edit/></td>
          

        </tr>
        <tr className='even'>
        <th scope="row">
        <Brand
        img={brand1}
        title="Product name"
        sub_title="Brand name"
        /></th>
        <td>
        <td><Profile/></td>
        </td>
        <td><Number1
        title="Brings all your..."
        /></td>
        <td><Suspact/></td>
      
    
 
        <td><Edit/></td>
        

      </tr>
      <tr className='even'>
      <th scope="row">
      <Brand
      img={brand1}
      title="Product name"
      sub_title="Brand name"
      /></th>
      <td>
      <td><Profile/></td>
      </td>
      <td><Number1
      title="Brings all your..."
      /></td>
      <td><Suspact/></td>
    
  

      <td><Edit/></td>
      

    </tr>
        </tbody>
      </table>
        </div>
    )
}

export default Table1
