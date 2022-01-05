import React from 'react'
import MainTiltle from '../../../components/All/MianTiltle/MainTiltle'
import { Link } from "react-router-dom"

import CloseBtn from '../../../components/ReportingPageComponents/Button/CloseBtn'
// import Product1 from '../Product1'
import AddingThingsPage from '../../../Routing/AddingThingsRouting'

function AddProduct1() {
    return (
        <div>
            <div className='container mt-5 '>
                <div className='row '>
                    <div className=' d-flex justify-content-between '>
                        <div>

                            <MainTiltle
                                MainTiltle1="A product"
                            />
                        </div>
                        <div className='mt-3'>
                            <Link to="/Dashborad/Products"> <CloseBtn
                                close="Close"
                            /></Link>
                        </div>

                    </div>

                </div>
                <div className=' d-flex mt-4'>
                    <div>
                        <Link to="Product1" className=''>
                            <CloseBtn
                                close="Avec Code barre"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to="AddProduct2" className=''>
                            <CloseBtn
                                close="Avec Code barre"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='container'>
                <AddingThingsPage />
            </div>


        </div>

    )
}

export default AddProduct1
