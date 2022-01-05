import React from 'react'
import "../Login/login.css"
import Taq from '../All/Input/input'
// import Password from 'antd/lib/input/Password'
import SignIn from '../All/Buttons/SignIn/SignIn';
function Login() {
    return (
        <div className=''>
            <div className='container-fluid mt-5 ' height="100vh">
                <div className="mt-5">
                    <div className='row text-center align-items-center mt-5'>
                    
                        <div className=''>
                            <h4><span className='logo'>shukran</span>.backoffice</h4>
                            <div><h2 className='mt-4'>Log in to your account</h2></div>
                            <div className='logo-dec'> <p>Welcome back! Please enter your details.</p></div>
                        </div>
                      
                    </div>
                </div>
                <div className='container mt-3'>
                    <div className='row  '>
                        <div>
                            <Taq
                                title="Enter Your Email"
                                label="Email"
                                hold="text"
                            />
                            <Taq
                            className=""
                            title="Enter Your password"
                            label="Password"
                            hold="password"
                        />
                        
                        </div>
                     
                    </div>
                   
                </div>
                <div className='container'>
              <div className='row text-center' >
            <SignIn/>
              </div>
                
                </div>

            </div>
        </div>

    )
}

export default Login
