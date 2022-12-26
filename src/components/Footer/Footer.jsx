import React from 'react'
import footer from './footer.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <>
            <section id="footer" className='section-p1'>
                <p><strong>WedMeGood - Your Personal Wedding Planner</strong></p>
                <p>Plan your wedding with Us</p>
                <p>WedMeGood is your personal wedding planning site. Browse through the site to find vendors for your wedding.
                    Explore wedding inspiration &
                    ideas and our very popular wedding blog to prepare for your wedding following latest trends. Contact us for more details.</p>
                <div id="footer-align">
                    <div id="footer-bottom">
                        <div>
                            <p><strong>Contact us to get best deals</strong></p>
                            <p>
                                vendors@wedmegood.com | info@wedmegood.com
                                <br />
                                0124-6812345
                            </p>
                            <p><strong>Get Latest Blog Alerts</strong></p>
                            <input type="email" placeholder='Email*' className='input-sub' />
                            <button className='subtn'>Submit</button>
                            <p></p>
                            <div className='d-flex footer-btns'>
                           <Link to="../Login"> <button type="button" class="btn onee ">Submit Wedding</button><br/><br/></Link>
                          <Link to="../Login">  <button type="button" class="btn  twoo mx-3">Register as a Vendor</button></Link>
                            </div>
                        </div>
                        <div id="socail-acc">
                            <p><strong>Follow us on:</strong></p>
                            <a href='#'>Facebook</a> <br />
                            <a href='#'>Twitter</a> <br />
                            <a href='#'>Pinterest</a> <br />
                            <a href='#'>Instagram</a> <br />
                            <a href='#'>Snapchat</a> <br />
                            <a href='#'>Youtube</a> <br />
                        </div>
                    </div>
                    <div id='app-btns'>
                        <p><strong>Get The WedMeGood App</strong></p>
                      
                          <img src="https://www.wedmegood.com/static/media/download-app-store.9a3541d8.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModall" alt="" />
                        <br />
                           <img src="https://www.wedmegood.com/static/media/download-play-store.787ef1b7.png" type="button" data-bs-toggle="modal" data-bs-target="#exampleModall" alt="" />
                    </div>
                </div>
                <hr />
                <div id="footer-below-line">
                    <div>
                        <p><strong>Start Planning</strong></p>
                        <a href="">Search By Vendor</a> <br />
                        <a href="">Search By City</a> <br />
                        <a href="">Download Our App</a> <br />
                        <a href="">Top Rated Vendors</a> <br />
                        <a href="">Destination Wedding</a> <br />
                    </div>
                    <div>
                        <p><strong>Wedding Ideas</strong></p>
                        <a href="">Wedding BLog</a> <br />
                        <a href="">Wedding Inspiration Gallery</a> <br />
                        <a href="">Real Wedding</a> <br />
                        <a href="">Submit Wedding</a> <br />
                    </div>
                    <div>
                        <p><strong>Photo Gallery</strong></p>
                        <a href="">Bridal Wear</a> <br />
                        <a href="">Wedding Jewellery</a> <br />
                        <a href="">Bridal Makeup & Hair</a> <br />
                        <a href="">Wedding Decor</a> <br />
                        <a href="">Wedding Photography</a> <br />
                        <a href="">Groom Wear</a> <br />
                        <a href="">Invitation & Favours</a> <br />
                        <a href="">Wedding Accessories</a> <br />
                        <a href="">Mehendi Designs</a> <br />
                    </div>
                    <div>
                        <p><strong>Home</strong></p>
                        <a href="">About WedMeGood</a> <br />
                        <a href="">Carrers</a> <br />
                        <a href="">Contact Us</a> <br />
                        <a href="">Site Map</a> <br />
                        <a href="">Terms & Conditions</a> <br />
                        <a href="">Privacy policy</a> <br />
                    </div>
                    <div>
                        <p><strong>Wedding Invitation Maker</strong></p>
                        <a href="">Wedding card Designs</a> <br />
                        <a href="">Save the Date Templates</a> <br />
                        <a href="">Invitation Videos Templates</a> <br />

                    </div>
                </div>

            </section>
            <section id="copy-rights">
                <div className='section-p1'>
                    <p>&#169; 2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; WedMeGood</p>
                </div>
            </section>
        </>
    )
}
