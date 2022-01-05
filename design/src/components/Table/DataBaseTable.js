import React from 'react'
import Number1 from '../All/Number/Number'
import DeleteIcon1 from '../All/DeleteIcon/DeleteIcon'
import Halal from '../All/Buttons/Status/Halal'
import Profile from '../All/ProfileIcon/Profile'
// import Brand from '../ProductsPageComponent/Brand/Brand'
import Name from '../All/Names/Name'

function DataBaseTable() {
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
            
            
          <td><Number1
          title="E100"
          /></td>
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

export default DataBaseTable
