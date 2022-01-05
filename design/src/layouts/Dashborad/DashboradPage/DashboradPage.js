import React from 'react'
import "../../../layouts/Dashborad/Dash.css"
import MainTiltle from '../../../components/All/MianTiltle/MainTiltle'
import DashBoradCard from '../../../components/All/Cards/DashBoradCard'
function DashboradPage() {
    return (
        <div className='Dashborad1 mt-2'>
      <div className='container  '>
      <div className='row '>
      <MainTiltle
          MainTiltle1="Dashborad"
      />

  </div>
      </div>
          <div className='container mt-3'>
<div className='row'>
          <div className='col-md-4'>
           <DashBoradCard
          title="Total Scans"
          Number="2M"
          />
          </div>
          <div className='col-md-4'>
          <DashBoradCard
          title="Scans this week"
          Number="1,210"
          />
          </div>
          <div className='col-md-4'>
          <DashBoradCard
          title="Active today"
          Number="316"
          /></div>
          </div>

          </div>
          <div className='container'>
          <div className='row'>
          <MainTiltle
          MainTiltle1="User"
          />
          </div>
          <div className='row'>
          <div className='col-md-4'>
           <DashBoradCard
          title="Downloads"
          Number="4,270"
          />
          </div>
          <div className='col-md-4'>
          <DashBoradCard
          title="Users"
          Number="1,210"
          />
          </div>
          <div className='col-md-4'>
          <DashBoradCard
          title="Active today"
          Number="316"
          /></div>
          </div>
          </div>
          <div className='container'>
          <div className='row'>
          <MainTiltle
          MainTiltle1 ="Products"
          />
          </div>
          <div className='row'>
          <DashBoradCard
          title="Total products"
          Number="32,420"
          />
          </div>
          </div>
        </div>
    )
}

export default DashboradPage
