import React from 'react'
import Number1 from '../../../components/All/Number/Number'

function Exceptions() {
    return (
        <div>
          <div className='container'>
          <div className='row'>
          <div className='col-md-4'>
          <Number1
          title="Explaination FR"
          />
          </div>
          <div className='col-md-8'>
          <label for="exampleFormControlTextarea1" class="form-label">Enter Your decription</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          </div>
          <hr/>
          </div>
          <div className='row'>
          <div className='col-md-4 mt-3'>
          <Number1
          title="Explaination EN"
          />
          </div>
          <div className='col-md-8'>
          <label for="exampleFormControlTextarea1" class="form-label">Enter Your decription</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          </div>
        </div>
    )
}

export default Exceptions
