import React from 'react'
import ProductName from './ProductName'
import ProductInputField from './ProductInputField'
import ProductSelect from './ProductSelect'
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from "react-router-dom"
function Productside1() {
    return (
        <div>
            <div className='container'>
            <div className='row'>  <ProductName
            Name="Product Name"
            />
            </div>
              
             <div className=''>
             <ProductInputField
             placeh="olivia@untitledui.com"
             />
             </div>

             <div className='row mt-3'>  <ProductName
             Name="Category"
             /></div>
             <div className='row'>
             <ProductSelect
             sel="Select Team Member"
             />
             </div>
             <div className='row mt-3'>  <ProductName
             Name="Brand"
             /></div>
             <div className='row'>
             <ProductSelect
             sel="Select Team Member"
             />
             </div>
             <div className='row mt-4'>  <ProductName
             Name="Source (because it’s without barcode)"
             />
             </div>
               
              <div className=''>
              <ProductInputField
              placeh="olivia@untitledui.com"
              />
              </div>
              <div className='mt-2'><DeleteIcon/></div>
              <div className='mt-2'><Link to="#">Add another source </Link></div>

            </div>
            
            </div>
    )
}

export default Productside1
