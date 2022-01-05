import { Link } from 'react-router-dom'
import React from 'react'
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import CloseBtn from '../../components/ReportingPageComponents/Button/CloseBtn'
import DataBaseRouting from '../../Routing/DataBaseRouting'

function DB100() {
    return (
        <div>
            <div className='container'>
            <div className='row mb-5'>
            <div className=' d-flex justify-content-between '>
            <div>

            <MainTiltle
            MainTiltle1="E100"
        />
            </div>
            <div className='mt-3'>
        <Link to="/Dashborad/DataBase"> <CloseBtn 
        close="Close"
        /></Link>
            </div>

         </div>
            
            </div>
            <div className='row'>
            <div className=' d-flex col-md-6 '>
          <Link to="DBdeatils">  <CloseBtn
          close="Details"
          /></Link>
    <Link to="DBException">        <CloseBtn
    close="Exceptions"
    /></Link>
          <Link to="Exceptions">
          <CloseBtn
          close="Explaination"
          />
          </Link>
          <Link to="DBSource">
          <CloseBtn
          close="Sources"
          />
          </Link>
            
            </div>
            </div>
            <hr/>
            <div className='row'>

     <DataBaseRouting/>
            </div>
            </div>
           
        </div>
    )
}

export default DB100
