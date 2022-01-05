import React from 'react'
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import {Link}  from"react-router-dom"
import CloseBtn from '../../components/ReportingPageComponents/Button/CloseBtn'
import SliderTabes from '../../components/SlidepageComponent/SliderTabes'

function AddanArtical() {
    return (
        <div className='container mt-5'>
        <div className='row '>
        <div className=' d-flex justify-content-between '>
            <div>

                <MainTiltle
                    MainTiltle1="Create an article"
                />
            </div>
            <div className='mt-3'>
                <Link to="/Dashborad/Slider"> <CloseBtn
                    close="Close"
                /></Link>
            </div>

        </div>

    </div>
    <div className='row'>
    <SliderTabes/>
    </div>
        </div>
    )
}

export default AddanArtical
