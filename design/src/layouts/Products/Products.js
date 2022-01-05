import React from 'react'
import Add from '../../components/All/Buttons/Add/Add'
// import SignIn from '../../components/All/Buttons/SignIn/SignIn'
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import "../Products/product.css"
import DashBoradCard from "../../components/All/Cards/DashBoradCard.js"
import Table1 from "../../components/Table/Table1.js"

import { Input } from 'antd';
import { Link } from 'react-router-dom'
const { Search } = Input;
function Products() {
    return (
        <div className=" Dashborad1">
            <div className=" ">
                <div className='container mt-3'>
                    <div className=' row'>
                        <div className='col-md-9'>
                            <MainTiltle
                                MainTiltle1="Products"
                            />
                        </div>
                        <div className=' mt-4  col-md-2'>
                            <Link to="/Products/Addproducts/Product1">
                                <Add
                                    Add="Add a Product"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <DashBoradCard
                                title="Total products"
                                Number="2,420"
                            />
                        </div>
                        <div className='col-md-4'>
                            <DashBoradCard
                                title="Products added in month"
                                Number="1,210"
                            />
                        </div>
                        <div className='col-md-4'>
                            <DashBoradCard
                                title="Products added today"
                                Number="316"
                            /></div>
                    </div>

                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className=" col-md-7 ">
                            <div className="row g-0">
                                <div className='col-md-2 '>
                                    <Add
                                        className="Add1"
                                        Add="Halal"
                                    />
                                </div>
                                <div className='col-md-2 ' >
                                    <Add
                                        className="Add1"
                                        Add="Mushooh"
                                    />

                                </div>

                                <div className='col-md-2 ' >
                                    <Add
                                        className="Add1"
                                        Add="Haram"
                                    />
                                </div>
                                <div className='col-md-2 ' >
                                    <Add
                                        className="Add1"
                                        Add="More filters"
                                    />
                                </div>
                            </div>



                        </div>


                        <div className=" Search col-md-5 " > <Search placeholder=" search " /></div>    </div>
                </div>
            </div>
            <div className="container mt-5">
                <Table1 />

            </div>


        </div>

    )
}

export default Products
