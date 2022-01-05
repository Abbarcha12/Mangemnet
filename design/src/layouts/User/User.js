import ReportBtn from "../../components/ReportingPageComponents/Button/RepotBtn"
import ClearIcon from '@material-ui/icons/Clear';
import Add from "../../components/All/Buttons/Add/Add"
import DashBoradCard1 from "../../components/All/Cards/DashBoradCard"
import React from 'react'

import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import "../../Css/join.css"

import { Input } from 'antd';
import Table1 from "../../components/Table/Table1";
const { Search } = Input;
// import ClearIcon from '@material-ui/icons/Clear';
function User() {
    return (
        <div className='Dashborad1 mt-2'>
        <div className='container  '>
        <div className='row '>
      <MainTiltle
      MainTiltle1="Users"
      />
        </div>
        </div>
        <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <DashBoradCard1
                                title="Total products"
                                Number="2,420"
                            />
                        </div>
                        <div className='col-md-4'>
                            <DashBoradCard1
                                title="Products added this month"
                                Number="1,210"
                            />
                        </div>
                        <div className='col-md-4'>
                        <DashBoradCard1
                        title="Products added today"
                        Number="316"/>
                           </div>
                    </div>

                </div>
          <div className="container">
          <div className="row">
          <div className=" col-sm-9 ">
              <div className="row">
                      <div className='col-sm-2 mt-2' >
                        <ReportBtn
                        title="Paid"
                        icon={<ClearIcon/>}
                        />
                      </div>
                      <div className='col-sm-2 mt-2' >
                      <ReportBtn
                      title="Free"
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
                    <div className="container mt-5">
                    <Table1/>
                    </div>
                </div>
        
    )
}

export default User
