import React from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import {Link} from "react-router-dom"
import CloseBtn from '../../components/ReportingPageComponents/Button/CloseBtn'
import Add from '../../components/All/Buttons/Add/Add'
import ProductName from '../../components/ProductsPageComponent/ProductName'
import ProductInputField from '../../components/ProductsPageComponent/ProductInputField'
import ProductSelect from '../../components/ProductsPageComponent/ProductSelect'
import"../../Css/join.css"
import SingleProfile from '../../components/All/ProfileIcon/singleProfile'
function UserPage() {
    return (
        <div className='container mt-5'>
        <div className='row '>
        <div className=' d-flex justify-content-between '>
            <div>

                <MainTiltle
                    MainTiltle1="A user"
                />
            </div>
            <div className='mt-3'>
                <Link to="/Dashborad/Categories"> <CloseBtn
                    close="Close"
                /></Link>
            </div>

        </div>

    </div>
    <div className=' mt-3 d-flex'>
    <Add
     Add="Save Changes"
    />
    <CloseBtn
    close="Ban the User"
    />
    </div>
    <div className='row mt-5'>
    <div className='col-md-4'>
    <div className='row'>
    <ProductName
    Name="First Name"
    />
    </div>
    <div className='row'>
    <ProductInputField
    placeh="olivia@untitledui.com"
    />
    </div>
    <div className='row mt-4'>
    <ProductName
    Name="Email"
    />
    </div>
    <div className='row '>
    <ProductInputField
    placeh="olivia@untitledui.com"
    />
    </div>
    <div className='row mt-4' >
    <ProductName
    Name="Status"
    />
    </div>
    <div className='row'>
    <ProductSelect
    sel="Free"
    />
    </div>
    <div className='row mt-4'>
    <ProductName
    Name="Created at"
    />
    </div>
    <div className='row Badge5'>
        <p>Mon Dec 27 2021 00:20:19 GMT <br/> +0100</p>
    </div>
    <div className='row mt-4'>
    <ProductName
    Name="Last connection"
    />
    </div>
    <div className='row Badge5'>
        <p>Today at 00:20:19 GMT +0100</p>
    </div>
    </div>
    <div className='col-md-2'></div>
    <div className='col-md-6'>
    <div className='row'>
    <ProductName
    Name="Image photo"
    />
    </div>
    <div className='row'>
    <div className='col-md-4'>
    <SingleProfile/>
    </div>
    <div className='col-md-8'>
    <div className=' upload text-center Badge p-3 mb-3'>
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
        </div>
    )
}

export default UserPage
