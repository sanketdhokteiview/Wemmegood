import React from 'react'
import footer from './footer.css'
import { Link } from 'react-router-dom'
import svg_fb from "../../assets/SVG/facebook.svg"
import svg_twr from "../../assets/SVG/twitter.svg"
import svg_snp from "../../assets/SVG/snapchat.svg"
import svg_yt from "../../assets/SVG/youtube.svg"
import svg_inst from "../../assets/SVG/instagram.svg"
import svg_pint from "../../assets/SVG/pinterest.svg"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, TelegramShareButton, PinterestShareButton, LinkedinShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, InstapaperIcon, LinkedinIcon, TelegramIcon, PinterestIcon, EmailIcon } from "react-share";

export const Footer = () => {
//     const d = new Date();
//    { let year = d.getFullYear();
//     document.getElementById("demo").innerHTML = year;
//    }
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
                                <Link to="../Login"> <button type="button" class="btn onee ">Submit Wedding</button><br /><br /></Link>
                                <Link to="../Login">  <button type="button" class="btn  twoo mx-3">Register as Link Vendor</button></Link>
                            </div>
                        </div>
                        <div id="socail-acc">
                            <p><strong>Follow us on:</strong></p>
                            <div className='img'>
                                <FacebookShareButton
                                    url={"https://erxes.mn/blog/customer-experience-mistakes"}
                                    className="Demo__some-network__share-button">
                                    <FacebookIcon size={32} round /> Facebook
                                </FacebookShareButton>
                                <br />
                                <EmailShareButton
                                    url={"https://in.linkedin.com/company/iviewlabs"}
                                    className="Demo__some-network__share-button" >
                                    <EmailIcon size={32} round /> Email
                                </EmailShareButton> <br />
                                <TelegramShareButton
                                    url={"https://telegram.org/"}
                                    className="Demo__some-network__share-button" >
                                    <TelegramIcon size={32} round /> Instagram
                                </TelegramShareButton> <br />
                                <LinkedinShareButton
                                    url={"https://in.linkedin.com/company/iviewlabs"}
                                    className="Demo__some-network__share-button" >
                                    <LinkedinIcon size={32} round /> LinkedIn
                                </LinkedinShareButton> <br />
                                <PinterestShareButton
                                    url={"https://in.linkedin.com/company/iviewlabs"}
                                    className="Demo__some-network__share-button" >
                                    <PinterestIcon size={32} round /> Pinterest
                                </PinterestShareButton> <br />
                                <TwitterShareButton
                                    title={"test"}
                                    url={"https://peing.net/ja/"}
                                    hashtags={["hashtag1", "hashtag2"]}>
                                    <TwitterIcon size={32} round />
                                    Twitter
                                </TwitterShareButton>
                            </div>
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
                        <Link to="/Breedcrup" className='footer-links'>Search By Vendor</Link> <br />
                        <Link to="/Breedcrup" className='footer-links'>Search By City</Link> <br />
                        <Link to="/Breedcrup" className='footer-links'>Download Our App</Link> <br />
                        <Link to="/Breedcrup" className='footer-links'>Top Rated Vendors</Link> <br />
                        <Link to="/Breedcrup" className='footer-links'>Destination wed</Link> <br />
                    </div>
                    <div>
                        <p><strong>Wedding Ideas</strong></p>
                        <Link to="/Blog" className='footer-links'>Wedding BLog</Link> <br />
                        <Link to="/Blog" className='footer-links'>Wedding Gallery</Link> <br />
                        <Link to="/Blog" className='footer-links'>Real Wedding</Link> <br />
                        <Link to="/Blog" className='footer-links'>Submit Wedding</Link> <br />
                    </div>
                    <div>
                        <p><strong>Photo Gallery</strong></p>
                        <Link to="/Photos" className='footer-links'>Bridal Wear</Link> <br />
                        <Link to="/Photos" className='footer-links'>Wedding Jewellery</Link> <br />
                        <Link to="/Photos" className='footer-links'>Makeup & Hair</Link> <br />
                        <Link to="/Photos" className='footer-links'>Wedding Decor</Link> <br />
                        <Link to="/Photos" className='footer-links'>Wedding Photos</Link> <br />
                        <Link to="/Photos" className='footer-links'>Groom Wear</Link> <br />
                        <Link to="/Photos" className='footer-links'>Invitation & Favours</Link> <br />
                        <Link to="/Photos" className='footer-links'>Wedding Accessories</Link> <br />
                        <Link to="/Photos" className='footer-links'>Mehendi Designs</Link> <br />
                    </div>
                    <div>
                        <p><strong>Home</strong></p>
                        <Link to="/" className='footer-links'>About WMG</Link> <br />
                        <Link to="/" className='footer-links'>Carrers</Link> <br />
                        <Link to="/" className='footer-links'>Contact Us</Link> <br />
                        <Link to="/" className='footer-links'>Site Map</Link> <br />
                        <Link to="/" className='footer-links'>Terms&Conditions</Link> <br />
                        <Link to="/" className='footer-links'>Privacy policy</Link> <br />
                    </div>
                    <div>
                        <p><strong>Wedding Invitation Maker</strong></p>
                        <Link to="/Invite" className='footer-links'>Wedding card Designs</Link> <br />
                        <Link to="/Invite" className='footer-links'>Save the Date Templates</Link> <br />
                        <Link to="/Invite" className='footer-links'>Invite VideosTemplates</Link> <br />

                    </div>
                </div>

            </section>
            <section id="copy-rights">
                <div className='section-p1'>
                    <p>&#169; <span id="demo">2022</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <bold>ConnectingSouls</bold>  IviewLabs</p>
                </div>
            </section>
        </>
    )
}
