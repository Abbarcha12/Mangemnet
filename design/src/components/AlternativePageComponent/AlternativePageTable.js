import React from 'react'
import Number1 from '../All/Number/Number'
import DeleteIcon1 from '../All/DeleteIcon/DeleteIcon'
import Name from '../All/Names/Name'
import Halal from '../All/Buttons/Status/Halal'
import Brand from '../ProductsPageComponent/Brand/Brand'
import brand1 from "../../image/brand1.png"
function AlternativePageTable() {
    return (
        <div>
        <div className='Tablepro  table-responsive'>
        <table class="table table-responsive ">
        <thead>
          <tr className='even'>
            <th scope="col">
            <Name
            Name1="Products"

            />
            </th>
            <th scope="col">
            <Name
            Name1="Status"

            />
            </th>
            <th scope="col">  <Name
            Name1="Barcode"

            /></th>
           
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          <tr className=''>
            
            
          <th scope="row">
          <Brand
          img={brand1}
          title="Product name"
          sub_title="Brand name"
          /></th>
            <td><Halal/></td>
            <td><Number1
        title="25634636"
        /></td>
            <td><DeleteIcon1/></td>
            

          </tr>
        
          
            
           
        </tbody>
      </table>
        </div>
        </div>
    )
}

export default AlternativePageTable
