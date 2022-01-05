import React from 'react'
import { Link } from "react-router-dom"
import CloseBtn from '../../components/ReportingPageComponents/Button/CloseBtn'
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import Add from '../../components/All/Buttons/Add/Add'
import CategoryPageRouting from '../../Routing/CategoryPageRouting'
function AddCategory() {
    return (
        <div className='container mt-5'>
            <div className='row '>
                <div className=' d-flex justify-content-between '>
                    <div>

                        <MainTiltle
                            MainTiltle1="A  category"
                        />
                    </div>
                    <div className='mt-3'>
                        <Link to="/Dashborad/Categories"> <CloseBtn
                            close="Close"
                        /></Link>
                    </div>

                </div>

            </div>
            <div className='d-flex mt-4'>
                <div className=' m-2'>
                    <Link to="AddCategory1">
                        <CloseBtn
                            close="Avec Code barre"
                        />
                    </Link>
                </div>
                <div className='m-2'>
                  <Link to="AddCategory2">
                  <CloseBtn
                  close="Sans code barre"
              />
                  </Link>
                </div>
            </div>
            <div className='d-flex mt-3'>
                <div>
                    <Add
                        Add="Auto put it as Haram"
                    />
                </div>
                <div>
                    <Add
                        Add="Remove Auto Mushbooh"
                    />
                </div>
            </div>
            <div className='Container'>
                <CategoryPageRouting />
            </div>

        </div>

    )
}

export default AddCategory
