import React from 'react'
import login from './login.css'
import { Navbar } from "../../components/Navbar/Navbar"
export const Login = () => {
    return (
        <>
            <Navbar />
            <div className='section-login'>
                <div className='login-card'>
                    <div>
                        <img src="	https://images.wedmegood.com/images/otploginsidebardesktop.png" alt="" />
                    </div>
                    <div id='login-cells'>
                        <h4>Sign In / Sign Up</h4>
                        <input type="email" placeholder=' |  Enter email or mobile*' name="" id="" />
                        <hr />
                        <p>OR</p>
                        <h5>Continue With</h5>
                        <div>
                            <button>Facebook</button>
                            <button>Google</button>
                        </div>
                    <h5>Are you a vendor? <button>Business Sign In</button></h5>
                    </div>
                </div>
            </div>
        </>
    )
}
