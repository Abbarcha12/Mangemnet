import React from 'react'
import Name from '../All/Names/Name'
import Number1 from '../All/Number/Number'
// import Halal from '../All/Buttons/Status/Halal'
import DeleteIcon1 from '../All/DeleteIcon/DeleteIcon'
function SourceTable() {
    return (
        <div>
        <div className='Tablepro  table-responsive'>
        <table class="table table-responsive ">
        <thead>
          <tr className='even'>
            <th scope="col">
            <Name
            Name1="Source Name"

            />
            </th>
            <th scope="col">
            <Name
            Name1="Url"

            />
            </th>
            <th scope="col">  <Name
            Name1="Date added"

            /></th>
           <th>Clicks</th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          <tr className=''>
            
            
          <td><Number1
          title="Why E100 is haram ? (malikite)"
          /></td>
            <td>untitledui.com</td>
       <td>Feb 22, 2022</td>
       <td>
       <Number1
       title="1,2334"/>
       </td>
            <td><DeleteIcon1/></td>
        

          </tr>
        
          
            
           
        </tbody>
      </table>
        </div>
        </div>
    )
}

export default SourceTable
