import React from 'react'
import navbar from "./navbar.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
export const Navbar = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
    }, []);
    return (
        <>

            <section id="heading">
                <div id='left'>
                    <Link href="">India's Favourite Wedding Planning Platform</Link>
                    <button type="button" class=" btn-light button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        All Cities
                    <i class="fa fa-caret-down"></i>
                    </button>
                </div>

                <div id="right">
                    <Link to="../Review">Write A Review</Link>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModall">
                        Download App
                    </button>
                    <div className='downl-pop'>

                        <div class="modal fade opa" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    {/* <button type="button" class="btn-close bg-dark" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                    <div class="modal-body d-flex">
                                        <div >
                                            <h5 class="modal-title" id="exampleModalLabel">Get WedMeGood on your smart phone</h5>
                                            <p className='genie-txt'>Explore wedding ideas | Get wedding checklist | Shortlist Vendors</p>
                                            <br /><br />
                                            <p>You will receive an SMS with a link to download the WedMeGood App for free</p>
                                            <div className='d-flex'>
                                                <input type="text" id='' disabled className='country-format' placeholder='+91' name="" />
                                                <input type="text" id='' className='enter-number mx-3' placeholder='Enter your Number..' name="" />
                                            </div>
                                            <button className='download-app-button '>Download the App</button>
                                        </div>
                                        <div className='app-photo-mobile'>
                                            <img src="https://images.wedmegood.com/images/download-the-app.png" alt="" />
                                        </div>
                                    </div>
                                    {/* <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section id="Navbar">
                <div id="left">
                
                    <Link to="../" > Connecting<strong>Souls</strong></Link>
                    <Link to="../Breedcrup">Venues</Link>
                    <Link to="../Breedcrup">Vendors</Link>
                    <Link to="../Photos">Photos</Link>
                    <Link to="../Realwedding">Real Weddings</Link>
                    <Link to="../Blog">Blog</Link>
                    <Link to="../Shop"> Shop</Link>
                    <Link to="../../Invite"> E-Invites</Link>
                </div>
                <div id="right">
                    {/* <img src="https://image.wedmegood.com/resized/14X/images/icons/search_icon_white.png" className='search-icon' alt="" /> */}
                    <Link to="../Login">     <button className='loging-btn'>
                        Log In
                    </button></Link>
                </div>
            </section>
            <div class="modal fade " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        {/* <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div class="modal-body">
                            <input type="text" placeholder='Search city...' />
                            <div id='cities'>
                                <div>
                                    <p className='txt-color'>Top Cities</p>
                                    <a href="#"> All Cities</a>
                                    <a href="#"> Delhi NCR</a>
                                    <a href="#"> Mumbai</a>
                                    <a href="#"> Bangalore</a>
                                    <a href="#"> Hyderabad</a>
                                    <a href="#"> Chennai</a>
                                    <a href="#"> Pune</a>
                                    <a href="#"> Kolkata</a>
                                    <a href="#"> Lucknow</a>
                                    <a href="#"> Jaipur</a>
                                </div>
                                <div className='modal-bg-color'>
                                    <p className='txt-color'>Popular Cities</p>
                                    <a href="#"> Gurgaon</a>
                                    <a href="#"> Gao</a>
                                    <a href="#"> Udaipur</a>
                                    <a href="#"> Chandigarh</a>
                                    <a href="#"> Ahmedabad</a>
                                    <a href="#"> Indore</a>
                                    <a href="#"> Agra</a>
                                    <a href="#"> Kanpur</a>
                                    <a href="#"> Bhopal</a>
                                    <a href="#"> Kochi</a>
                                </div>
                                <div >
                                    <p className='txt-color'>Other Cities</p>
                                    <a href="#"> Nagpur</a>
                                    <a href="#"> Dehradun</a>
                                    <a href="#"> Thane</a>
                                    <a href="#"> Navi Mumbai</a>
                                    <a href="#"> Surat</a>
                                    <a href="#"> Vadodara</a>
                                    <a href="#"> Visakhapatnam</a>
                                    <a href="#"> Bhubaneswar</a>
                                    <a href="#"> Raipur</a>
                                    <a href="#"> Coimbatore</a>
                                </div>
                                <div className='modal-bg-color'>
                                    <p className='txt-color'>International Cities</p>
                                    <a href="#"> Chicago</a>
                                    <a href="#"> New York</a>
                                    <a href="#"> New Jersey</a>
                                    <a href="#"> Houston</a>
                                    <a href="#"> Washington</a>
                                    <a href="#"> Arizona</a>
                                    <a href="#"> Dubai</a>
                                    <a href="#"> Thailand</a>
                                    <a href="#"> USA</a>
                                    <a href="#"> Canada</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}
