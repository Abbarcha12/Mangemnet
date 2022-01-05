import React from 'react'
import Name from '../All/Names/Name'
// import Number1 from '../All/Number/Number'
import DeleteIcon1 from '../All/DeleteIcon/DeleteIcon'
import { Checkbox } from '@material-ui/core'
import Brand from '../ProductsPageComponent/Brand/Brand'
import brand1 from "../../image/brand1.png"
import Halal from '../All/Buttons/Status/Halal'
import Number1 from '../All/Number/Number'
function ProductSubtable() {
    return (
        <div>
        <div className='Tablepro  table-responsive'>
        <table class="table table-responsive ">
        <thead>
          <tr className='even'>
          <th scope="col">
         <Checkbox/>
          </th>
            <th scope="col">
            <Name
            Name1=" Name"

            />
            </th>
           
            <th scope="col">  <Name
            Name1="Date added"

            /></th>
           <th>
           status
           </th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          <tr className=''>  
          <td> <Checkbox/></td>
          <th scope="row">
          <Brand
          img={brand1}
          title="Product name"
          sub_title="Brand name"
          /></th>
       <td>Feb 22, 2022</td>
       <td>
       <Halal/>
       </td>
            <td><DeleteIcon1/></td>
        

          </tr>
          <tr className=''>  
          <td> <Checkbox/></td>
          <th scope="row">
          <Brand
          img={brand1}
          title="Product name"
          sub_title="Brand name"
          /></th>
       <td>Feb 22, 2022</td>
       <td>
       <Halal/>
       </td>
            <td><DeleteIcon1/></td>
        

          </tr>
          <tr className=''>  
          <td> <Checkbox/></td>
          <th scope="row">
          <Brand
          img={brand1}
          title="Product name"
          sub_title="Brand name"
          /></th>
       <td>Feb 22, 2022</td>
       <td>
       <Halal/>
       </td>
            <td><DeleteIcon1/></td>
        

          </tr>
       
          
        
          
            
           
        </tbody>
      </table>
        </div>
        </div>
    )
}

export default ProductSubtable
