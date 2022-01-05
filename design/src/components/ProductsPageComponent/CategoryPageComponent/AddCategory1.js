import React from 'react'
import ProductInputField from '../ProductInputField'
import ProductName from '../ProductName'
import CategorySelect from './CategorySelect'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Link } from 'react-router-dom';
import SingleProfile from '../../All/ProfileIcon/singleProfile';
import ProductSubtable from '../../Table/ProductSubtable';

function AddCategory1() {
    return (
        <div>
        <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-4'>
                <div className='row'>  <ProductName
                    Name="Category Name"
                />
                </div>
                <div className='row'>
                    <ProductInputField
                        placeh="Pâtisseries"
                    />
                </div>
                <div className='row mt-4'>  <ProductName
                    Name="Category"
                />

                </div>
                <div className='row'>
                <CategorySelect
                sel="Sub-category (Boulangerie)"
                />
                </div>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-7'>
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
            
            </div>

        </div>
        <div className='row'>
        <div className='  d-flex justify-content-center mt-5 col-md-5'>
        <p>Products inside this caegory</p>
        </div>
        <div className='col-md-7 mt-5'>
        <ProductSubtable/>
        </div>
        </div>
    </div>
        </div>
    )
}

export default AddCategory1
