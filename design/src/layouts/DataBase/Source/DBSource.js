import React from 'react'
import Add from "../../../components/All/Buttons/Add/Add"
import Number1 from '../../../components/All/Number/Number'
import SourceTable from '../../../components/Table/SourceTable'
function DBSource() {
    return (
        <div>
          <div className='container'>
          <div className='row'>
          <Add
          Add="Add a source"
          />
          </div>
          <hr/>
          <div className='row'>
          <div className='col-md-3'>
          <Number1
          title="Source 1"
          />
          </div>
          <div className='col-md-9'>
          <SourceTable/>
          </div>
          </div>
          <div className='row mt-5'>
          <div className='col-md-3'>
          <Number1
          title="Source 2"
          />
          </div>
          <div className='col-md-9'>
          <SourceTable/>
          </div>
          </div>
          </div>
        </div>
    )
}

export default DBSource
