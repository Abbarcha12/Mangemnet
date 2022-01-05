import React from 'react'
import Add from '../../components/All/Buttons/Add/Add'
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
import "../../Css/join.css"
import DashBoradCard from "../../components/All/Cards/DashBoradCard"
import SliderTable from '../../components/Table/SliderTable/SliderTable'
import SliderTable2 from '../../components/Table/SliderTable/SectionTable'
import {Link} from "react-router-dom"
function Slider() {
    return (
        <div className='Dashborad1'>
        <div className='container mt-3'>
        <div className=' row '>
            <div className='col-sm-7'>
              <MainTiltle
              MainTiltle1="Sliders"
            />
            </div>
            <div className=' mt-4  col-sm-5 '>
            <div className='row'>
            <div className='col-sm-4'>
            <Link to="/Slider/AddanArtical">
            <Add
            Add="Create an article"
            />
            </Link>
            </div>
            <div className='col-sm-4'>
          <Link to="/Slider/AddanSection">  <Add
          Add="Create a selection"
          /></Link>
            </div>
            </div>

          
            </div>
        </div>
        <div className='container mt-3'>
        <div className='row'>
                  <div className='col-md-4'>
                   <DashBoradCard
                  title="Articles"
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
                  title="Product in Section"
                  Number="316"
                  /></div>
                  </div>
                  <div className='row '>
                  <MainTiltle
                      MainTiltle1="Articles"
                  />
            
              </div>
        
                  </div>
    </div>
    <div className='container'>
    <SliderTable/>
    
    <div className='row '>
    <MainTiltle
        MainTiltle1="Selections"
    />
  
</div>
    </div>
    <div className='container'>
    <SliderTable2/>
    </div>
        </div>
    )
}

export default Slider
