import React from 'react'
import "../Cards/card.css"
// import MainTiltle from '../MianTiltle/MainTiltle'
function DashBorad(Props) {
    return (
        <div>
            <div className='container'>
               
              <div className='card1 m-2 p-3 '>
              <div className='row'>
              <div className='d-flex justify-content-between  '>
                  <div className=' '><h6>{Props.title}</h6></div>
                  <div className='' ></div>
              </div>
         
          </div>
              
                <div className='mt-4 '><h3>{Props.Number}</h3></div>
            </div>
            </div>
        </div>
    )
}

export default DashBorad
