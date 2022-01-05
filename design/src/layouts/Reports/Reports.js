import React from 'react'
import MainTiltle1 from '../../components/All/MianTiltle/MainTiltle'
import DashBoradCard from "../../components/All/Cards/DashBoradCard"
import Add from '../../components/All/Buttons/Add/Add'
import ReportBtn from "../../components/ReportingPageComponents/Button/RepotBtn"
import ClearIcon from '@material-ui/icons/Clear';
import { Input } from 'antd';
import ReportingTable from '../../components/ReportingPageComponents/ReportingTable'
const { Search } = Input;
function Reports() {
    return (
        <div className='Dashborad1'>
            <div className='container mt-3 Dashborad1'>
                <div className=' row '>
                    <div className=''>
                        <MainTiltle1
                            MainTiltle1="Reporting"
                        />
                    </div>
                </div>
            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-4'>
                        <DashBoradCard
                            title="Products"
                            Number="1,210"
                        />
                    </div>
                    <div className='col-md-4'>
                        <DashBoradCard
                            title="Products added this month"
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
            <div className="container">
                <div className="row mt-5">
                    <div className=" col-sm-9 ">
                        <div className="row">
                                <div className='col-sm-2 mt-2' >
                                    <ReportBtn
                                    title="All time"
                                    icon={<ClearIcon/>}
                                    />
                                </div>
                                <div className='col-sm-2 mt-2' >
                                <ReportBtn
                                title="US, AU, +4"
                                icon={<ClearIcon/>}
                                />
                                </div>
                                <div className='col-sm-3 mt-2' >
                                    <Add
                                        Add="More filters"
                                    />
                                </div>
                            </div>

                        </div>

                   


                    <div className=" Search col-sm-3 " > <Search placeholder=" search " /></div> </div>
                </div>
            <div className='container mt-5'>
           <ReportingTable/>
            </div>

            </div>
      

    )
}

export default Reports
