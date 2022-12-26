import React from 'react'
import cardview from './cardview.css';
import { Navbar } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Cardview = () => {
    let albumimg = [{
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028952_211601783_2996771790570737_5013296894555989962_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028983_231998863_3018996685014914_8348397631250300769_n.jpg?crop=7,114,1267,713'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028936_158947129_2912906705623913_1476772217925302255_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028883_118242799_2746717985576120_1712321095814930286_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028905_118731133_2761325424115376_697283525237670657_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648029002_252698197_3087607171487198_8795812430020476922_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028994_245852706_3070514263196489_6293076398735825196_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028877_117910611_2742862269295025_5542733014904919616_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648029012_248945949_3079318662316049_5872388513319842785_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028889_118189407_2751983475049571_4080637858990218889_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028912_119047700_2765580850356500_1026676348957679325_n.jpg'
    }, {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028952_211601783_2996771790570737_5013296894555989962_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028983_231998863_3018996685014914_8348397631250300769_n.jpg?crop=7,114,1267,713'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028936_158947129_2912906705623913_1476772217925302255_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028883_118242799_2746717985576120_1712321095814930286_n.jpg'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/177385/1648028994_245852706_3070514263196489_6293076398735825196_n.jpg'
    }

    ]
    let user_feedback = [{
        'username': 'Tia Singh',
        "months": 'Tia Singh',
        "feedback": 'i have never seen this type of venue ,amazing decoration '
    },
    {
        'username': 'kirtan',
        "months": '5 months ago',
        "feedback": 'We actually came here to attend a wedding or a work-related event. The hotels entrance is enormous and captivating. The cuisine was moderate yet delicious, and the wedding hall was fantastic. The restrooms were neat and clean. The personnel was kind and helpful, and the service was also excellent.'
    },
    {
        'username': 'manoj',
        "months": '5 months ago',
        "feedback": 'Excellent meal and service. really friendly staff Navaneet and his crew did an excellent job. Well, there was a camera for the Agarwal wedding, and the meal made by Chef Dashrat Chef was  excellent. Will return without a doubt.'
    },
    {
        'username': 'aakash',
        "months": '5 months ago',
        "feedback": 'came to town for a wedding. I adored the hotel\'s atmosphere. From the service to the decor to the  rooms, there was a sense of grandeur across the entire property. I would like to specifically thank Ms. Trisha Fernandes for her help. Ill defintely tell my relatives and friends about this property.'
    },
    {
        'username': 'Riya Ahuja Arora',
        "months": '8 months ago',
        "feedback": 'One of the best property for wedding.They had different space were we could do our wedding rituals.Thanks Conrad-Pune (Hema) for the best service.'
    },
    {
        'username': 'jyuthika',
        "months": '8 months ago',
        "feedback": 'We planned our wedding at CONRAD Pune in November 2021. We were indeed satisfied and happy with our decision as We found them extremely cooperative both pre function as well as during the wedding. Pre wedding their Sales staff and Directors made very decision easy for us and during the functions they stood by their commitments as well as were extremely professional and were an epitome of hospitality.  Most importantly they focused on service amd made us all feel at home. Truly a magical experience crafted out for me and my Husband and we are thankful to them'
    },
    {
        'username': 'shivani deshmukh',
        "months": '8 months ago',
        "feedback": 'We got married at Conrad, Pune from 15th to 17th of February. We had a wonderful experience during our stay at Conrad, Pune. Our rooms were very comfortable, the food was delicious throughout all the events. They went over and beyond to help make our stay and wedding enjoyable. I highly recommend this hotel for anyone having a wedding in Pune. It is a perfect location, based in the city center, multiple venues for multiple events.'
    }
    ]
    let QandA = [{
        'Q': 'What is Conrad Pune\'s policy on catering?',
        'A': 'Inhouse & outside catering allowed'
    },
    {
        'Q': 'What is Conrad Pune\'s policy on decor?',
        'A': 'Decorators from panel only'
    },
    {
        'Q': 'Is outside alcohol permitted at Conrad Pune?',
        'A': 'In house alcohol available, Outside alcohol permitted'
    },
    {
        'Q': 'What is Conrad Pune\'s policy on DJ?',
        'A': 'In house DJ available, Outside DJ permitted'
    },
    ]
    let similerdata = [{
        'img': 'https://image.wedmegood.com/resized/450X/uploads/project/53512/1668690883_IMG_20221117_WA0014.jpg?crop=13,245,1460,821',
        'hotel': 'Zaras Resort,Khandala',
        'location': 'Pune',
        'price': '4000 per plate'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/2020982/1654777914_2022_06_09__21_.png?crop=3,223,687,387',
        'hotel': 'Nahata Lawns',
        'location': 'Sinhagad Road',
        'price': '4000 per plate'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/489088/1613974298_IMG_4986_copy.jpg?crop=254,94,1619,911',
        'hotel': 'Zaras Resort,Khandala',
        'location': 'Mumbai',
        'price': '3000 per plate'
    },
    {
        'img': 'https://image.wedmegood.com/resized/450X/uploads/member/28601/1648092545_20220224_125331.jpg?crop=247,0,1641,923',
        'hotel': ' The President',
        'location': 'Sinhagad Road',
        'price': '2500 per plate'
    },
    ]
    return (
        <>
            <Navbar />
            <section className='section-p1 bg-color'>
                <div className='faid-txt '>
                    <p>Home  &gt; Vendors  &gt; Wedding Venues  &gt; Wedding Venues Pune</p>
                </div>
                <section className='main-section'>
                    <div className='card-enter-data'>
                        <div>
                            <img src="https://c4.wallpaperflare.com/wallpaper/750/566/555/costa-adeje-gran-hotel-4k-hd-computer-desktop-wallpaper-preview.jpg" alt="" />
                            <div id='card-info'>
                                <div className='card-name-ratring'>
                                    <div>
                                        <h5>Conrad Pune</h5>
                                    </div>
                                    <div>
                                        11 Reviews
                                    </div>
                                </div>
                                <div className='card-location'>
                                    <span>Pune
                                        <span className='faid-txt'>&nbsp; (View on Map)</span>
                                        <p className='faid-txt'>  Conrad Pune,7, Mangaldas Road,Sangamvadi,Pune,Maharashtra,India</p></span>
                                    <i class="fa fa-phone"></i> <span className='green-txt'>Contact</span>
                                </div>
                                <div className='card-options-photos-review'>
                                    <a href='#'>29 Photos &nbsp;&nbsp;|</a>
                                    <a href='#'>Shortlist &nbsp;&nbsp;|</a>
                                    <a href='#'>Write a Review &nbsp;&nbsp;|</a>
                                    <a href='#'>Share</a>
                                </div>
                            </div>
                        </div>
                        <div id="details-filling">
                            <div id='pricing-details'>
                                <div className='pricing'>
                                    <div>
                                        <h6>Starting Price</h6>
                                    </div>
                                    <div>
                                        <p className='color-txt'>Pricing Info</p>
                                    </div>
                                </div>
                                <hr className='hr' />
                                <div className='pricing'>
                                    <div>
                                        <p><span className=' h5'>Rs. 4,000 Per Plate </span><span className='faid-txt'>  (taxes extra)</span></p>
                                    </div>
                                    <div>
                                        <h6>Veg price</h6>
                                    </div>
                                </div>
                                <hr className='hr' />
                                <div className='pricing'>
                                    <div>
                                        <p><span className='h5'>Rs. 4,500 Per Plate </span><span className='faid-txt'> (taxes extra)</span> </p>
                                    </div>
                                    <div>
                                        <h6>Non Veg price</h6>
                                    </div>
                                </div>
                            </div>
                            <div id='form-filling'>
                                <div className='form-fields'>
                                    <div className='send-msg'>
                                        <button>Send Message</button>
                                    </div>
                                    <div className='contact'>
                                        <button>View Contact</button>
                                    </div>
                                </div>
                                <hr className='hr' />
                                <p className='location'>Hi Conrad Pune,</p>
                                <div className='form-fields'>
                                    <div>
                                        <input type="text" placeholder='Full name*' />
                                    </div>
                                    <div>
                                        +91 <input type="Number" />
                                    </div>
                                </div>
                                <div className='form-fields'>
                                    <div>
                                        <input type="text" placeholder='Email address*' />
                                    </div>
                                    <div className='date'>
                                        <input type="text" placeholder='Function date*' />
                                    </div>
                                </div>
                                <div className='form-fields'>
                                    <div>
                                        <input type="text" placeholder='No of guests* (min 50)' />
                                    </div>
                                    <div>
                                        <input type="Number" placeholder='No of rooms' />
                                    </div>
                                </div>
                                <div className='form-fields'>
                                    <div>Function Type</div>
                                    <div className='fun-time'>Function Time</div>
                                </div>
                                <div className='form-fields radio'>

                                    <input type="radio" checked name="wedding" id="" />Pre-wedding
                                    <input type="radio" name="wedding" id="" />Wedding
                                    <input type="radio" checked name="day" id="" />Evening
                                    <input type="radio" name="day" id="" />Day
                                </div>
                                <div className='form-fields'>
                                    <p>Notify me on whatsapp</p>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                    </div>

                                </div>
                                <button className='button'>Check Availability & Prices</button>
                                <p className='faid-txt p'>Complete information ensures you get accurate and timely vendor responses</p>
                            </div>
                        </div>
                    </div>

                    <div className='features'>
                        <a href="">Areas Available</a>
                        <a href="">Projects</a>
                        <a href="">About</a>
                        <a href="">Reviews</a>
                    </div>
                    <div className='room-details'>
                        <h4>Areas Available (4)</h4>
                        <hr />
                        <div className='seating-floating'>
                            <div>
                                <img src="https://images.wedmegood.com/images/indoor.svg" alt="" />
                                <span className='mx-2'>1000 Seating | 1200 Floating</span>
                                <p>Ballroom</p>
                                <br />
                                <img src="https://images.wedmegood.com/images/indoor.svg" alt="" />
                                <span className='mx-2'>40 Seating | 50 Floating</span>
                                <p>Meeting</p>
                            </div>
                            <div className='second-room'>
                                <img src="https://images.wedmegood.com/images/poolside.svg" alt="" />
                                <span className='mx-2'>150 Seating | 200 Floating</span>
                                <p>Poolside</p>
                                <br />
                                <img src="https://images.wedmegood.com/images/indoor.svg" alt="" />
                                <span className='mx-2'>40 Seating | 50 Floating</span>
                                <p>Meeting</p>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-albums'>
                        <div className='portfolio'>
                            <p className='color-txt'>PORTFOLIO(18)</p>
                            <p>ALBUMS(3)</p>
                            <p>VIDEOS(0)</p>
                        </div>

                        <div className='photosgrid'>
                            {albumimg.map((albimg) => {
                                return (
                                    <>


                                        <div className='album-photos'>
                                            <div>
                                                <img src={albimg.img} alt="" />
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className='btn'>
                            <button>View More</button>
                        </div>
                    </div>
                    <div className='details-of-venue'>
                        <h5>About Conrad Pune - Wedding Venues, Pune</h5>
                        <hr />
                        <p>
                            Conrad Pune is the Hilton company's first luxury hotel in India. An iconic structure in the heart of Pune's dynamic central business district, the striking Conrad Pune is only minutes from major corporations, key government institutions and premier residential neighborhoods. It is a place to stay inspired. They offer their guests one-of-a-kind experiences with sophisticated, locally inspire the surroundings. Service offered is more than personal, it's intuitive. While your stay at hote, your connections to people and places around the corner, and half way around the world will be at best. The hotel takes the responsibility of meeting every couple need. The wedding at this place will help you to pile memories bit by bit in an organised manner.
                            <br />
                            <br />
                            Each Conard venue will reflect local take on culture, art, food and adventure. Guest can make most of the place while their stay at this venue. The place is also prepared for honeymoon and anniversaries. The hotel has several luxurious rooms designed to provide you the outmost comfort. The multi-cuisne restaurant is all set to serve you the delicasies unique in taste. Also, they allow outside decorators and vendors of your choice so that everything will be done according to your choice. To release your hectic day, they provide the facility of both inhouse and out of house drinking facility in the bar available. Oudoor DJ is also allowed due to which you can relish your favourite music.
                        </p>
                    </div>
                    <div className='Rating-of-venue'>
                        <h5>Reviews for Conrad Pune (11)</h5>
                        <hr />
                        <div className='row'>
                            <div className='col-4 review-rating'>
                                <div>
                                    <div>Rating Distribution</div>
                                </div>
            
                                <div class="progress">
                                <input type="checkbox" /> 5 <i className='fa fa-star star' ></i>
                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                        100%
                                    </div> 
                                </div> 11  reviews <br />
                            
                                <p className='faid-txt'>Last Review Updated on 30 Jun 2022</p>
                            </div>
                            <div className='col-8 feedback'>
                                <p>Review Conrad Pune</p>
                                <p>Rate Vendor*</p>
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" />
                                <input type="checkbox" /> <br />
                                <textarea name="" id="" cols="80" rows="5" placeholder='Tell us about your experience*'></textarea>
                                <input type="text" placeholder='How much did you spend on this vendor?' />
                                <br /> <button className='addphotobtn'>Add Photos</button>
                                <button className='submitbtn'>Submit Review</button>
                            </div>
                            <div>
                            </div>
                        </div>
                        <hr className='hr' />
                    </div>
                    {user_feedback.map((feed) => {
                        return (<>
                            <div className='users-feedback'>
                                <div className='user-name'>
                                    <div>
                                        <h6><i class="fa-solid fa-user mx-1 my-2" style={{ 'font-size': '28px' }}></i>{feed.username}</h6>
                                        <p className='faid-txt'>{feed.months}</p>
                                    </div>
                                    <div className='handles'>
                                        <i class="fa-brands fa-facebook one mx-5" style={{ 'font-size': '28px' }}></i>
                                        <i class="fa-brands fa-twitter two mx-5" style={{ 'font-size': '28px' }}></i>
                                    </div>
                                </div>
                                <p>{feed.feedback}</p>
                                <hr className='hr' />
                            </div>
                        </>)
                    })}

                    <div className='Q_and_A'>
                        <h5>
                            FAQ about Conrad Pune
                        </h5>
                        <hr className='hr' />
                        {QandA.map((qa) => {
                            return (<>
                                <div className='qAnda'>
                                    <h3 className='h3'>{qa.Q}</h3>
                                    <p className='p'>{qa.A}</p>
                                </div>
                            </>)
                        })}
                    </div>
                    <div className='similar-options'>
                        <div className='heading'>
                            <h5 className='mx-4 my-2'>
                                Browse Similar Wedding Venues
                            </h5>
                            <div className='viewmore'>
                                <Link to="../Breedcrup"><button>View More</button></Link>

                            </div>
                        </div>
                        <hr className='hr' />
                        <div className='similardata'>
                            {similerdata.map((similardt) => {
                                return (<>
                                    <div className='card'>

                                        <img src={similardt.img} alt="" />
                                        <div className='img'>
                                            <h6>{similardt.hotel}</h6>
                                            <p className='faid-txt'>{similardt.location}</p>
                                            <p >Rs.{similardt.price}</p>
                                        </div>
                                    </div>
                                </>)
                            })}
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}
