import React from 'react'
import "../Table/Table1.css"
import Name from "../../components/All/Names/Name"
import Number1 from "../All/Number/Number"

import DeleteIcon1 from '../All/DeleteIcon/DeleteIcon'
import SingleProfile from '../All/ProfileIcon/singleProfile'
import TableBottom from '../All/TableBottom/TableBottom'
function ReportingTable() {
  return (
    <div>
    <div className='Tablepro  table-responsive'>
    <table class="table ">
    <thead>
      <tr>
        <th scope="col">
        <Name
        Name1="Made by"

        />
        </th>
        <th scope="col">
        <Name
        Name1="Type"

        />
        </th>
        <th scope="col">
        <Name
        Name1="Date"

        />
        </th>
        <th scope="col">  <Name
        Name1="Message"

        /></th>
       
        <th scope="col"></th>

      </tr>
    </thead>
    <tbody>
      <tr className='even'>
        <th scope="row">
       <SingleProfile/>
        </th>
        <td><Number1
        title="Problem on this product"
        /></td>
        <td><Number1
        title="Problem on this product"
        /></td>
    <td><Number1
    title="Mon Dec 27 2021 00:20:19 GMT +0100"
    /></td>
        <td><DeleteIcon1/></td>
        

      </tr>
      <tr className='odd'>
      <th scope="row">
     <SingleProfile/>
      </th>
      <td><Number1
      title="Problem on this product"
      /></td>
      <td><Number1
      title="Problem on this product"
      /></td>
  <td><Number1
  title="Mon Dec 27 2021 00:20:19 GMT +0100"
  /></td>
      <td><DeleteIcon1/></td>
      

    </tr>
    <tr className='even'>
    <th scope="row">
   <SingleProfile/>
    </th>
    <td><Number1
    title="Problem on this product"
    /></td>
    <td><Number1
    title="Problem on this product"
    /></td>
<td><Number1
title="Mon Dec 27 2021 00:20:19 GMT +0100"
/></td>
    <td><DeleteIcon1/></td>
    

  </tr>
  <tr className='odd'>
  <th scope="row">
 <SingleProfile/>
  </th>
  <td><Number1
  title="Problem on this product"
  /></td>
  <td><Number1
  title="Problem on this product"
  /></td>
<td><Number1
title="Mon Dec 27 2021 00:20:19 GMT +0100"
/></td>
  <td><DeleteIcon1/></td>
  

</tr>
<tr className='even'>
<th scope="row">
<SingleProfile/>
</th>
<td><Number1
title="Problem on this product"
/></td>
<td><Number1
title="Problem on this product"
/></td>
<td><Number1
title="Mon Dec 27 2021 00:20:19 GMT +0100"
/></td>
<td><DeleteIcon1/></td>


</tr>
<tr className='odd'>
<th scope="row">
<SingleProfile/>
</th>
<td><Number1
title="Problem on this product"
/></td>
<td><Number1
title="Problem on this product"
/></td>
<td><Number1
title="Mon Dec 27 2021 00:20:19 GMT +0100"
/></td>
<td><DeleteIcon1/></td>


</tr>
<tr className='even'>
<th scope="row">
<SingleProfile/>
</th>
<td><Number1
title="Problem on this product"
/></td>
<td><Number1
title="Problem on this product"
/></td>
<td><Number1
title="Mon Dec 27 2021 00:20:19 GMT +0100"
/></td>
<td><DeleteIcon1/></td>


</tr>

    </tbody>
  </table>
  <div className='bottom container'><TableBottom/></div>
    </div>
    </div>
  )
}

export default ReportingTable
