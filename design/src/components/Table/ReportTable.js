import React from 'react'
import Number1 from '../All/Number/Number'
import Brand from '../ProductsPageComponent/Brand/Brand'
import brand1 from "../../image/brand1.png"
import Name from '../All/Names/Name'
import DeleteIcon1 from '../All/DeleteIcon/DeleteIcon'
function ReportTable() {
  return (
    <div>
      <div className='Tablepro table-responsive'>
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">
                <Name
                  Name1="Name"
                />
              </th>
              <th scope="col">
                <Name
                  Name1="Date added"

                />
              </th>
              <th scope="col">
                <Name
                  Name1="Last active"

                />
              </th>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody>
            <tr className='even'>
              <th scope="row">
                <Brand
                  img={brand1}
                  title="Olivia Rhye"
                  sub_title="olivia@untitledui.com"
                /></th>
              <td><Number1
                title="Feb 22, 2022"
              /></td>
              <td><Number1
                title="Feb 22, 2022"
              /></td>


              <td><DeleteIcon1 /></td>


            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReportTable
