import React from 'react'
import "../Brand/Brand.css"
import Table1 from '../../Table/Table1'
function Brand(props) {
    return (
        <div>
            <div className='container'>
             <div className='d-flex'>
             <div className='m-3'>
             <img src={props.img} alt ="logo" className='image' / >
             </div>
             <div className=''>
             <p className='title'>{props.title}</p>
             <p className='title_sub'>{props.sub_title}</p>
             </div>

             </div>
            </div>
        </div>
    )
}

export default Brand
