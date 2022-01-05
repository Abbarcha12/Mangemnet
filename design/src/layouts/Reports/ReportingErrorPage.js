import React from 'react'
import CloseBtn from '../../components/ReportingPageComponents/Button/CloseBtn'
import { Link } from "react-router-dom"
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import ProductName from '../../components/ProductsPageComponent/ProductName'
import ReportTable from '../../components/Table/ReportTable'
import AlternativePageTable from '../../components/AlternativePageComponent/AlternativePageTable'
import "../../Css/join.css"
import Add from '../../components/All/Buttons/Add/Add'
function ReportingErrorPage() {
    return (
        <div className='container mt-5'>
            <div className='row '>
                <div className=' d-flex justify-content-between '>
                    <div>

                        <MainTiltle
                            MainTiltle1="A Reporting"
                        />
                    </div>
                    <div className='mt-3'>
                        <Link to="#"> <CloseBtn
                            close="Close"
                        /></Link>
                    </div>

                </div>

            </div>
            <div className='d-flex'>
                <div>
                    <Add
                        Add="Validate the comment"
                    />
                </div>
                <div>
                    <CloseBtn
                        close="Delete the comment"
                    />
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-3'>
                    <ProductName
                        Name="User"
                    />
                </div>
                <div className='col-md-9'>
                    <ReportTable />
                </div>

            </div>
            <hr />
            <div className='row mt-5'>
                <div className='col-md-3'>
                    <ProductName
                        Name="Product"
                    />
                </div>
                <div className='col-md-9'>
                    <AlternativePageTable />
                </div>

            </div>
            <hr />
            <div className='row mt-5'>
                <div className='col-md-3'>
                    <ProductName
                        Name="Comment"
                    />
                </div>
                <div className='col-md-9 Badge5'>
                    <p>  C’est vraiment pas bon ce produit Et je crois qu’il y a une erreur, il semble ne pas y avoir d’alcool</p>
                </div>

            </div>
        </div>
    )
}

export default ReportingErrorPage
