import React from 'react'
import"../../Css/join.css"
import { Input } from 'antd';
function DbEmail(Props) {
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-4'><h6>{Props.Number2}</h6></div>
            <div className='col-md-4'>
            <Input className='filed' placeholder={Props.placeh} />
            </div>
            
            </div>
        </div>
    )
}

export default DbEmail
