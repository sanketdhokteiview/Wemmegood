import React from 'react'
import login from './login.css'
import { Navbar } from "../../components/Navbar/Navbar"
export const Login = () => {
    return (
        <>
            <Navbar />
            <div className='section-login'>
                <div className='login-card '>
                    <div>
                        <img src="	https://images.wedmegood.com/images/otploginsidebardesktop.png" className='img1' alt="" />
                    </div>
                    <div id='login-cells'>
                        <h4 className='my-3'>Sign In / Sign Up</h4>
                        
                        <div className='d-flex creating-cell'>
                            <img src="https://images.wedmegood.com/react-frontend-v4/static/media/usericon.ccaad18e.svg" className='img2 mx-2' alt="" />
                            <p className='pt-2 faid-txt mx-2'>|</p>
                            <input type="email" placeholder='Enter email or mobile*' className='mx-2' name="" id="" />
                        </div>
                        <div className='div-or'>
                            <hr />
                            <div className='or'>
                                <h6>OR</h6>
                            </div>
                        </div>
                        <br />
                        <h5 className='text-center'>Continue With</h5>
                        <div className='d-flex fb-google'>
                            <button className='w-50 p-10 bg-white fb'>Facebook</button>
                            <button className='w-50 p-10 mx-2 bg-white google'>Google</button>
                        </div>
                        <br />
                        <div className='business-sign text-center'>
                        <h5 className='faid-txt'>Are you a vendor? <button className='w-50 p-10 mx-2 bg-white '>Business Sign In</button></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
