import React from 'react'
import "../Table/Table1.css"
import Name from "../../components/All/Names/Name"
import Brand from '../ProductsPageComponent/Brand/Brand'
import brand1 from "../../image/brand1.png"
import Halal from '../All/Buttons/Status/Halal'
import Suspact from '../All/Buttons/Status/Suspact'
import Profile from '../All/ProfileIcon/Profile'
import Number1 from '../All/Number/Number'
import DeleteIcon1 from '../All/DeleteIcon/DeleteIcon'
import TableBottom from '../All/TableBottom/TableBottom'

function Table1() {
  return (
    <div className='Tablepro  table-responsive'>
      <table class="table table-responsive ">
        <thead>
          <tr>
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
            <th scope="col">
              <Name
                Name1="Last scan today"

              />
            </th>
            <th scope="col">  <Name
              Name1="Barcode"

            /></th>
            <th scope="col">  <Name
              Name1="Ingredients?"

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
            <td><Halal /></td>
            <td><Profile /></td>
            <td><Number1
              title="25634636"
            /></td>
            <td><Number1
              title="Fr only"
            /></td>
            <td><DeleteIcon1 /></td>


          </tr>
          <tr>
            <th scope="row">  <Brand
              img={brand1}
              title="Product name"
              sub_title="Brand name"
            /></th>
            <td><Suspact /></td>
            <td><Profile /></td>
            <td><Number1
              title="25634636"
            /></td>
            <td><Number1
              title="FR & EN"
            /></td>
            <td><DeleteIcon1 /></td>

          </tr>
          <tr>
            <th scope="row">  <Brand
              img={brand1}
              title="Product name"
              sub_title="Brand name"
            /></th>
            <td><Halal /></td>
            <td><Profile /></td>
            <td><Number1
              title="25634636"
            /></td>
            <td><Number1
              title="NO"
            /></td>
            <td><DeleteIcon1 /></td>

          </tr>
          <tr>
            <th scope="row">  <Brand
              img={brand1}
              title="Product name"
              sub_title="Brand name"
            /></th>
            <td><Halal /></td>
            <td><Profile /></td>
            <td><Number1
              title="25634636"
            /></td>
            <td><Number1
              title="NO"
            /></td>
            <td><DeleteIcon1 /></td>

          </tr>
          <tr>
            <th scope="row">  <Brand
              img={brand1}
              title="Product name"
              sub_title="Brand name"
            /></th>
            <td><Halal /></td>
            <td><Profile /></td>
            <td><Number1
              title="25634636"
            /></td>
            <td><Number1
              title="Fr only"
            /></td>
            <td><DeleteIcon1 /></td>

          </tr><tr>
            <th scope="row">  <Brand
              img={brand1}
              title="Product name"
              sub_title="Brand name"
            /></th>
            <td><Halal /></td>
            <td><Profile /></td>
            <td><Number1
              title="25634636"
            /></td>
            <td><Number1
              title="Fr only"
            /></td>
            <td><DeleteIcon1 /></td>

          </tr><tr>
            <th scope="row">  <Brand
              img={brand1}
              title="Product name"
              sub_title="Brand name"
            /></th>
            <td><Halal /></td>
            <td><Profile /></td>
            <td><Number1
              title="25634636"
            /></td>
            <td><Number1
              title="Fr only"
            /></td>
            <td><DeleteIcon1 /></td>

          </tr>
        </tbody>
      </table>
      <div className='container'>
        <TableBottom />
      </div>
    </div>
  )
}

export default Table1
