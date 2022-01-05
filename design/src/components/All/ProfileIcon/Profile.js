import React from 'react'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import image from"../../../image/p1.jpg"
import "../ProfileIcon/profile.css"
function Profile() {
    return (
        <div>
            <div className='container'>
             <div className='d-flex'>
             <div p className='five'><img src={image}></img></div>
             <div p className='five'><img src={image}></img></div>
             <div p className='five'><img src={image}></img></div>
             <div p className='five'> <p >+5</p></div>

             </div>
            </div>
        </div>
    )
}

export default Profile
