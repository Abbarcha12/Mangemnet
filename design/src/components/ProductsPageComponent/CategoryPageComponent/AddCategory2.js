import React from 'react'
import {Link} from "react-router-dom"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ProductSubtable from '../../Table/ProductSubtable';
import ProductName from '../ProductName';
import SingleProfile from '../../All/ProfileIcon/singleProfile';
import ProductInputField from '../ProductInputField';
// import CategorySelect from './CategorySelect';
import CloseBtn from '../../ReportingPageComponents/Button/CloseBtn';
function AddCategory2() {
    return (
        <div>
     <div className='row mt-3'>
     <CloseBtn
     close="Remove Auto Mushbooh "
     />
     </div>
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
       
    )
}

export default AddCategory2
