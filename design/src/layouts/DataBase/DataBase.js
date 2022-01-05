import React from 'react'
import Add from '../../components/All/Buttons/Add/Add'
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import "../../components/ReportingPageComponents/Button/Button.css"
import CloseBtn from '../../components/ReportingPageComponents/Button/CloseBtn'
import Auto from '../../components/ReportingPageComponents/Button/Auto'
import DataBaseTable from "../../components/Table/DataBaseTable"
import { Link } from 'react-router-dom'
function DataBase() {
    return (
        <div >
            <div className=' mt-2'>
                <div className='container mt-5 '>
                 <div className='row  mt-5'>
                 <div className='col-md-2'></div>
                 <div className='col-md-8 Dashborad2 mt-5'>
                 <div className=' d-flex justify-content-between '>
                 <div>

                 <MainTiltle
                 MainTiltle1="Database"
             />
                 </div>
                 <div className='mt-3'>
              <CloseBtn 
              close="Close"
              />
                 </div>

              </div>
              <div className='row'>
              <div className='col-sm-3'>
            <Link to="/Database/DB100/DBdeatils">  <Add
            Add="Add an ingredient "
            /></Link>
              </div>
              <div className='col-sm-2'>
              <Auto/>
              </div>


              </div>
              <hr/>
              <div className='row'>
              <div className='col-sm-2 col-md-3'>
              <h6>Product</h6>
              </div>
              <div className='col-sm-10 col-md-9'>
              <DataBaseTable/>
              </div>

              </div>
                 </div>
                 <div className='col-md-2'></div>

                 </div>
                </div>
            </div>
        </div>
    )
}

export default DataBase
