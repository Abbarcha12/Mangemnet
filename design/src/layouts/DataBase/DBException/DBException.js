import React from 'react'
import Badge from '../../../components/DbComponents/Badge'
import Badge1 from '../../../components/DbComponents/Badge1'
import DbSide from '../../../components/DbComponents/DbSide'
function DBException() {
    return (
        <div>
        <div className='container'>
        <div className='row'>
        <div className='col-md-4'>
        <DbSide
        Name="Names in English"
        />
        </div>
        <div className='col-md-8   Badge'>
          <div className='d-flex'>
          <div className='col-md-2'><Badge/></div>
          <div className='col-md-2'> <Badge1/></div>
          
 
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
        <div className='d-flex'>
        <div className='col-md-2'><Badge/></div>
        <div className='col-md-2'> <Badge1/></div>
       
 
        </div>
 
      </div>
        </div>
        </div>
        </div>
    )
}

export default DBException
