import React from 'react'
import { Input } from 'antd';
import "./input.css"
// import SignIn from '../Buttons/SignIn/SignIn';
function Taq(props) {
    return (
        <div>
            <div className='container '>
                <div className='row d-flex justify-content-center mb-3'>
                    <div className='col-md-3'>
                    <label className=''>{props.label}</label> <br/>
                    <Input className='Input mt-2'
                    placeholder={props.title}
                    type={props.hold}
                     />
                    
                    </div>
                   
               
                </div>
               
            </div>
        </div>
    )
}

export default Taq
