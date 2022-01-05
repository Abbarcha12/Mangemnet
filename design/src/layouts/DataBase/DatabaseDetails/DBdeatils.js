import React from 'react'
import DbEmail from '../../../components/DbComponents/DbEmail'
import DbSide from '../../../components/DbComponents/DbSide'
import"../../../components/DbComponents/All.css"
import Badge from '../../../components/DbComponents/Badge.js'
import Badge1 from '../../../components/DbComponents/Badge1.js'
import Mail1 from '../../../components/DbComponents/Mail1'
function DBdeatils() {
    return (
        <div>
        <div className=''>
        <div className=' mt-3 mb-3'>
        <DbEmail
            Number2="Number"  
            placeh="olivia@untitledui.com"
        />
        </div>
        <hr/>

        </div>
        <div className=''>
        <div className=' mt-3 mb-3'>
        <DbEmail
            Number2="E Number"  
            placeh="olivia@untitledui.com"
        />
        </div>
        <hr/>
       <div className='row'>
       <div className='col-md-4'>
       <DbSide
       Name="Names in English"
       />
       </div>
       <div className='col-md-8   Badge'>
         <div className='row'>
         <div className='col-md-2'><Badge/></div>
         <div className='col-md-2'> <Badge1/></div>
         <div className='col-md-2'> <Badge/></div>
         <div className='col-md-2'><Badge1/></div>
         <div className='col-md-2'><Badge1/></div>
         <div className='col-md-2'><Badge/></div>
         <div className='col-md-2'><Badge1/></div>

         </div>

       </div>
       </div>
       <div className='row mt-4'>
       <div className='col-md-4'>
       <DbSide
       Name="Names in French"
       />
       </div>
       <div className='col-md-8   Badge'>
       <div className='row'>
       <div className='col-md-2'><Badge/></div>
       <div className='col-md-2'> <Badge1/></div>
       <div className='col-md-2'> <Badge/></div>
       <div className='col-md-2'><Badge1/></div>
       <div className='col-md-2'><Badge1/></div>
       <div className='col-md-2'><Badge/></div>
       <div className='col-md-2'><Badge1/></div>

       </div>

     </div>
       </div>
       <hr/>

       <div className='row mb-4'>
       <div className='col-md-4'>
       <DbSide
       Name="Status"
       />
       </div>
       <div className='col-md-8 Badge'>
       <Mail1
       placeh="Mushbooh (suspicious)"
       />
       </div>
       </div>
        </div>
        </div>
    )
}

export default DBdeatils
