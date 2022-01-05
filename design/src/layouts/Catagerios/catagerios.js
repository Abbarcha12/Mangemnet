import React from 'react'
import Add from '../../components/All/Buttons/Add/Add'
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import "../../layouts/Products/product.css"
import Table1 from '../../components/Table/Table1'
import { Input } from 'antd';
import { Link } from 'react-router-dom'
const { Search } = Input;
function Catagerios() {
    return (
        
        <div className='container mt-3 Dashborad1'>
        <div className=' row '>
            <div className='col-sm-9'>
            <MainTiltle
            MainTiltle1="Categories (1,043)"
            />
            </div>
            <div className=' mt-4  col-sm-2'>
            <Link to="/Categories/AddCategory/AddCategory1">
            <Add
                Add="Add a category"
               />
            </Link>
               
            </div>
        </div>
        <div className='row mt-4'>
         <div className='col-md-4'><div className=" Search  " > <Search placeholder=" search "  /></div></div>
        </div>
        <div className="container mt-5">
        <Table1/>
        </div>
        </div>
    )
}

export default Catagerios
