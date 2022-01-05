import React from 'react'
import MainTiltle from '../All/MianTiltle/MainTiltle'
import {Link} from "react-router-dom"
import CloseBtn from '../ReportingPageComponents/Button/CloseBtn'
import ProductName from '../ProductsPageComponent/ProductName'
import AlternativePageTable from './AlternativePageTable'
import ProductSubtable from '../Table/ProductSubtable'
import { Input } from 'antd';
const { Search } = Input;
function AddanAlternative() {
    return (
        <div className='container mt-5'>
        <div className='row '>
        <div className=' d-flex justify-content-between '>
            <div>

                <MainTiltle
                    MainTiltle1="Alternatives"
                />
            </div>
            <div className='mt-3'>
                <Link to="/Dashborad/Alternatives"> <CloseBtn
                    close="Close"
                /></Link>
            </div>

        </div>

    </div>
    <div className='row mt-5'>
    <div className='col-md-3'>
    <ProductName
    Name="Product"
    />
    </div>
    <div className='col-md-9'>
    <AlternativePageTable/>
    </div>
    </div>
    <div className='row'>
        <div className='  d-flex justify-content-center mt-5 col-md-4'>
        <p>Product alternatives (17)</p>
        </div>
        <div className='col-md-2'>
        <div className=" Search mt-5 " > <Search placeholder=" search "  /></div></div>
        
        <div className='col-md-6 mt-5'>
        <ProductSubtable/>
        </div>
        </div>
        </div>
       
    )
}

export default AddanAlternative
