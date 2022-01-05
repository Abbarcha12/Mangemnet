
import React from 'react'
import SingleProfile from '../All/ProfileIcon/singleProfile'
import ProductName from './ProductName'
import"../../Css/join.css"
import ProductInputField from './ProductInputField'
// import UploadIcon from '@mui/icons-material/Upload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Link } from 'react-router-dom';
import Badge from '../DbComponents/Badge';
import Badge1 from '../DbComponents/Badge1';
import ProductSelect from './ProductSelect';


function ProductLeftside() {
    return (
        <div className='container'>
            <div className='row'>
            <ProductName
            Name="Product photo"
            />
            </div>
            <div className='row'>
            <div className='col-md-3 mt-3'><SingleProfile /></div>
            <div className='col-md-9 upload text-center Badge p-3 mb-3'>
            <FileUploadIcon/><br/>
            <span><Link to="#">Click to upload</Link></span> <span>or drag and drop </span><br/><span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
            <div>
            <div></div>
            </div>
            </div>
            
            
            </div>
            <div className='row'>
            <ProductName/>
            </div>
            <div className='row '>
            <div className=' Badge mt-3'>
            <div className='d-flex'>
            <div className='col-md-2 m-3'><Badge/></div>
            <div className='col-md-2 m-3'> <Badge1/></div>
           
     
            </div>

            </div>
        </div>
        <div className='row mt-3'>  <ProductName
        Name="Nutriscore"
        /></div>
        <div className='row'>
        <ProductSelect
        sel="Nutriscore Number.4"
        />
        <div className='row mt-3'>  <ProductName
        Name="Calories (Kcal) par portion"
        /></div>
        <div className=''>
        <ProductInputField
        placeh="1234"
        />
        </div>
        </div>
        </div>
    )
}

export default ProductLeftside
