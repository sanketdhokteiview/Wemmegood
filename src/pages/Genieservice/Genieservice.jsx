import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import genieservice from "./genieservice.css"
import {Footer} from "../../components/Footer/Footer"
export const Genieservice = () => {
    let feedback = [
        {
            'img': 'https://images.wedmegood.com/react-frontend-v4/static/media/usericon.ccaad18e.svg',
            'name': 'Nahata Lawns',
            'feed': 'Best Venue for Weddings. Packages are most econimical and they have the best service in town.My Wedding and Reception was managed in a very professional way.Thanks to Rishabh Nahata sir and the whole staff of Nahata Lawns',
            'date&time': '30 Jun 2021'
        },
        {
            'img': 'https://images.wedmegood.com/react-frontend-v4/static/media/usericon.ccaad18e.svg',
            'name': 'Rashmi Prabha',
            'feed': 'Wedding planning is not an easy thing to do alone. It takes a lot of effort in finding, deciding and then finalizing the best vendors coz ultimately it\'s your one time investment. Thanks to wed me good and I\'m glad I took genie services wherein I got prompt response in terms of suggestions and also the continuous support from Shrishti who never fails to respond and make sure to provide 24/7 support. I\'d highly recommend to choose wed me good for your one stop solution to plan your D-day',
            'date&time': '2 Feb 2022'
        },
        {
            'img': 'https://images.wedmegood.com/react-frontend-v4/static/media/usericon.ccaad18e.svg',
            'name': 'Tulsi Villa Banquets',
            'feed': 'I want to dedicate my 5 star review to the folks responsible for wedmegood genie services- Mehak (the founder of wmg) and Srishti - the planner that walked into my life like a true genie to plan a lockdown wedding! In this new normal, if you are looking for non-traditional wedding planning help like safe and sanitized venues at negotiated prices, hygiene conscious caterers and safe budget decorators- look no further than wmg genie services. Our lockdown wedding would\'ve been a no-go without them',
            'date&time': '22 Jun 2020'
        },
        {
            'img': 'https://images.wedmegood.com/react-frontend-v4/static/media/usericon.ccaad18e.svg',
            'name': 'Iskcon Banquet Hall',
            'feed': 'Fantastic and outstanding service.',
            'date&time': '14 Nov 2022'
        }
    ]
    function downloadapp(){
        let x=document.getElementById("download_value").value;
        if(x==""){
            console.log(x)
            alert("Please enter the number")
        }
        else{
            console.log(x)
            alert("Clicked the download app option")
        }
    }
    return (
        <>
            <Navbar />
            <section className='bg-color section-p1'>
                <h4>WMG Serives</h4>
                <div className='genie-menue'>
                    <img src="https://testimage.wedmegood.com/resized-nw/1900X/uploads/14684dd92bf94ded96517201ebe69554/genie-infographic-Web.png" alt="" />
                </div>
                <div className='my-3'>
                    <h5 >Select Package</h5>
                    <h6 className='faid-txt'>WMG can help you out!</h6>
                </div>
                <div>
                    <div class="card-deck d-flex genie-options">
                        <div class="card ">
                            <div class="card-body">
                                <h6 class="card-title ">WMG Discovery Assistance  <span className='genie-txt'> Rs.99 - Rs 499/-</span></h6>
                                <p className='faid-txt'>Quickly book any one category</p>
                                <p>Get Vendors with date availablity with your budget</p>
                                <p>For any 1 category</p>
                                <p>Best price negotiation</p>

                            </div>
                            <div class="card-footer">
                                <small><p class="card-text genie-txt">Continue &gt;</p></small>
                            </div>
                        </div>
                        <div class="card mx-4">
                            <div class="card-body">
                                <h6 class="card-title">WMG Booking Assistance <span className='genie-txt'> Rs 999/- </span>  <strike>Rs 1497/-</strike></h6>
                                <p className='faid-txt'>Assistance upto 3 main categories</p>
                                <p>For 3 categories</p>
                                <p>Best Price negotiation</p>
                                <p>Complimentary WMG Mynt membership (access discounts on 50+ brands)</p>
                            </div>
                            <div class="card-footer">
                                <small ><p class="card-text genie-txt">Continue &gt;</p></small>
                            </div>
                        </div>
                        <div class="card ">
                            <div class="card-body">
                                <h6 class="card-title">WMG Planning Assistance <span className='genie-txt'> Rs 4999/-</span> <strike>Rs 9999/-</strike></h6>
                                <p class="card-text faid-txt"> Complete Planning Solution for all categories (Venues to safawala) with standardised contracts</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, aliquid!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta consequuntur aliquid, minus culpa ipsum optio commodi deserunt totam earum illum.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facere ex magnam ipsum, pariatur nobis.</p>
                            </div>
                            <div class="card-footer">
                                <small ><p class="card-text genie-txt">Continue &gt;</p></small>
                            </div>
                        </div>
                    </div>
                </div>
                <h4>Let them speak for us!</h4>
                <p>
                    Some impressions from our customers
                </p>
                <div id='feedback'>
                    {feedback.map((feedbackdata) => {
                        return (
                            <>
                                <div className='feedback-data '>
                                    <div>
                                        <img src={feedbackdata.img} alt="" />
                                    </div>
                                    <div>
                                        <p>{feedbackdata.name}</p>
                                        <p className='faid-txt'>{feedbackdata['date&time']}</p>
                                        <p>{feedbackdata.feed}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
                <div className='d-flex justify-content-between box'>
                    <div className='download-app-data'>
                      <h5>Get Genie recommendations on the WMG App</h5>
                      <p className='genie-txt'>Explore wedding ideas | Get wedding checklist | Shortlist Vendors</p>  
                      <br /><br /><br />
                        <p>You will receive an SMS with a link to download the WedMeGood App for free</p>
                       +91 <input type="text" id='download_value' />
                        <br /><br />
                        <button className='download-button mx-5'  onClick={downloadapp}>Download The App</button>
                    </div>
                    <div>
                        <img src="https://images.wedmegood.com/images/genie-mob-app-screenshot.png" alt="" />
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
