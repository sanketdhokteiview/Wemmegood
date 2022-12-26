import React from 'react'
import review from "./review.css"
import { Navbar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
export const Review = () => {
    return (
        <>
            <Navbar />
            <section className='section-p1 review-text'>
 
                <h4 className='text-center '>Write a Review for your Wedding Vendors</h4>
                <h6 className='text-center mb-5'>Had a great experience with your wedding photographer? Or the food at the venue left you disappointed? Please tell us your experience below. Your reviews help other engaged couples in making informed decisions.</h6>
                
                <div className='container form'>
                    <p >Select a Vendor * </p>
                    <input type="text" placeholder='Type Vendor Name * ' className='w-100 form-group p-10' />
                    <p className='mt-4'>Rate Vendor * </p>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-around mb-4' >
                            <input type="checkbox"  name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <input type="checkbox" name="" id="" checked />Share on Facebook
                        </div>
                    </div>
                    <div>
                        <textarea name="" id="" cols="104" className='w-100 p-10 mb-4' rows="5"></textarea>
                    </div>
                    <input type="text" placeholder='How much did you spend on this vendor?' className='w-100 p-10' name="" id="" />
                    <div className='d-flex flex-row-reverse pt-2'>
                    <Link to="../Login">   <button className='p-2 border-0 mx-2 text-white btn-color'>Submit Review</button></Link>
                      <button className='p-1 btn-add-photo  bg-white'>Add Photos</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
