import React from 'react'
import { Button } from 'antd';
import "../SignIn/Sign.css"
import { Link } from 'react-router-dom';
function SignIn() {
    return (
        <div>
       <Link to="/dashborad/DashboradPage"><Button className='main btn text-white' >Sign In</Button></Link>
        </div>
    )
}

export default SignIn
