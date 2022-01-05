import React from 'react'
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import Add from '../../components/All/Buttons/Add/Add'
import AlternativesTable from "../../components/Table/AlternativesTable/AlternativesTable"
import { Input } from 'antd';
import { Link } from 'react-router-dom';
const { Search } = Input;

function Alternatives() {
    return (
        <div className='Dashborad1'>
        <div className='container mt-3'>
        <div className=' row d-flex justify-content-between'>
            <div className='col-sm-9'>
              <MainTiltle
              MainTiltle1="Alternatives"
              />
            </div>
            <div className=' mt-4  col-sm-2'>
            <Link to="/Alternatives/AddanAlternative">
            <Add
            Add="Add an Alternatives"
            />
            </Link>
            </div>
        </div>
    </div>
    <div className="container mt-3">
    <div className="row">
        <div className=" col-sm-9 ">
            <div className="row">
                    <div className='col-sm-2 mt-2' >
                    <Add
                    Add="Mushooh"
                />
                    </div>
                    <div className='col-sm-2 mt-2' >
                    <Add
                    Add="Haram"
                />
                    </div>
                    
                </div>

            </div>

       


        <div className=" Search col-sm-3 " > <Search placeholder=" search " /></div> </div>
    </div>
    <div className='container mt-4'>
    <AlternativesTable/>
    </div>
        </div>
    )
}

export default Alternatives
