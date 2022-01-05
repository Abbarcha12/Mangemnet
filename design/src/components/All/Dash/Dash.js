import React from 'react'
import "../../../layouts/Dashborad/Dash.css"
import "../../../layouts/Dashborad/Dash.css"
function Dash(props) {
    return (
        <div>
            <div className='container'>
            <div className='p-2'>
             <div><span className='icons'>{props.icon}</span> <span className=' icons'> {props.title}</span></div>
            </div>
            </div>
        </div>
    )
}

export default Dash
