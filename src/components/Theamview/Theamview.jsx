import React from 'react'
import theamview from "./theamview.css"
import { Link } from 'react-router-dom'
import { Navbar } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"
import { useEffect } from 'react'
export const Theamview = () => {
    const imagechange = (idx, a) => {
        console.log(`main-img${idx}${a}`)
        const mainimg = document.getElementById(`main-img${idx}`);
        const smallimg = document.getElementsByClassName('small-images');
        mainimg.src = smallimg[idx, a].src;
    }
    let carddata = [
        {
            'img1': 'https://image.wedmegood.com/resized/450X/uploads/member/25951/1448794559_03_3.jpg',
            'img2': 'https://image.wedmegood.com/resized/450X/uploads/member/79150/1468387361_ppc.jpg',
            "img3": 'https://image.wedmegood.com/resized/450X/uploads/project/166411/1639326322_0C1A7292.JPG',
            'img4': 'https://image.wedmegood.com/resized/450X/uploads/member/70722/1466742193_10_lobby1.jpg',
            'ratring': '4.9',
            'hotelname': 'Mumbai Metro',
            'location': 'Saki Naka,Mumbai',
            "type": 'Banquet Halls,Lawns/Farmhouses',
            "no-ppl": '60-300',
            'price1': '850',
            "price2": '950',
            'locatedat': 'Mumbai Metro With 3 Star facilities heart of the city, Andheri'
        },
        {
            'img1': 'https://image.wedmegood.com/resized/450X/uploads/member/70722/1601879906_GF_mum.jpg?crop=18,139,987,555',
            'img2': 'https://image.wedmegood.com/resized/450X/uploads/member/70722/1466742189_01_guest_room1.jpg',
            "img3": 'https://image.wedmegood.com/resized/450X/uploads/member/70722/1466742193_09_lobby.jpg',
            'img4': 'https://image.wedmegood.com/resized/450X/uploads/member/70722/1466742193_10_lobby1.jpg',
            'ratring': '4.9',
            'hotelname': 'Mumbai Metro',
            'location': 'Saki Naka,Mumbai',
            "type": 'Banquet Halls,Lawns/Farmhouses',
            "no-ppl": '60-300',
            'price1': '850',
            "price2": '950',
            'locatedat': 'Mumbai Metro With 3 Star facilities heart of the city, Andheri'
        },
        {
            'img1': 'https://image.wedmegood.com/resized/450X/uploads/member/25951/1448794559_03_3.jpg',
            'img4': 'https://image.wedmegood.com/resized/450X/uploads/member/22054/1444725781_01_14.jpg',
            'img2': 'https://image.wedmegood.com/resized/450X/uploads/member/70722/1466742189_01_guest_room1.jpg',
            "img3": 'https://image.wedmegood.com/resized/450X/uploads/project/152225/1630295333_IMG_20210709_WA0030.jpg',
            'ratring': '4.9',
            'hotelname': 'Mumbai Metro',
            'location': 'Saki Naka,Mumbai',
            "type": 'Banquet Halls,Lawns/Farmhouses',
            "no-ppl": '60-300',
            'price1': '850',
            "price2": '950',
            'locatedat': 'Mumbai Metro With 3 Star facilities heart of the city, Andheri'
        },
        {
            'img1': 'https://image.wedmegood.com/resized/450X/uploads/member/447849/1660049488_image130.jpg?crop=11,115,1898,1068',
            'img2': 'https://image.wedmegood.com/resized/450X/uploads/member/447849/1555180701_IMG_8936.JPG?crop=314,24,1622,912',
            "img3": 'https://image.wedmegood.com/resized/450X/uploads/member/22054/1536227578_1444725781_03_16.jpg',
            'img4': 'https://image.wedmegood.com/resized/450X/uploads/member/22054/1444725781_01_14.jpg',
            'ratring': '4.9',
            'hotelname': 'Mumbai Metro',
            'location': 'Saki Naka,Mumbai',
            "type": 'Banquet Halls,Lawns/Farmhouses',
            "no-ppl": '60-300',
            'price1': '850',
            "price2": '950',
            'locatedat': 'Mumbai Metro With 3 Star facilities heart of the city, Andheri'
        },
        {
            'img1': 'https://image.wedmegood.com/resized/450X/uploads/member/79150/1489015592_1468387361_ppc4.jpg',
            'img2': 'https://image.wedmegood.com/resized/450X/uploads/member/79150/1468387361_ppc.jpg',
            "img3": 'https://image.wedmegood.com/resized/450X/uploads/member/79150/1468387362_ppc1.jpg',
            'img4': 'https://image.wedmegood.com/resized/450X/uploads/member/79150/1468387362_ppc2.jpg',
            'ratring': '4.9',
            'hotelname': 'Mumbai Metro',
            'location': 'Saki Naka,Mumbai',
            "type": 'Banquet Halls,Lawns/Farmhouses',
            "no-ppl": '60-300',
            'price1': '850',
            "price2": '950',
            'locatedat': 'Mumbai Metro With 3 Star facilities heart of the city, Andheri'
        },
        {
            'img1': 'https://image.wedmegood.com/resized/450X/uploads/member/19149/1441622139_Lobby1.jpg',
            'img2': 'https://image.wedmegood.com/resized/450X/uploads/member/19149/1441622093_Shiva_BNQT.jpg',
            "img3": 'https://image.wedmegood.com/resized/450X/uploads/member/19149/1441622094_Panorama_BNQT.jpg',
            'img4': 'https://image.wedmegood.com/resized/450X/uploads/member/19149/1441622094_SHIVA.jpg',
            'ratring': '4.9',
            'hotelname': 'Mumbai Metro',
            'location': 'Saki Naka,Mumbai',
            "type": 'Banquet Halls,Lawns/Farmhouses',
            "no-ppl": '60-300',
            'price1': '850',
            "price2": '1000',
            'locatedat': 'Mumbai Metro With 3 Star facilities heart of the city, Andheri'
        }
    ]
    let feedback = [
        {
            'img': 'https://image.wedmegood.com/resized/100X/uploads/member/2020982/1654777914_2022_06_09__21_.png',
            'name': 'Nahata Lawns',
            'feed': 'Best Venue for Weddings. Packages are most econimical and they have the best service in town.My Wedding and Reception was managed in a very professional way.Thanks to Rishabh Nahata sir and the whole staff of Nahata Lawns',
            'date&time': 'Reviewed By: DASHARATH BIRHAMANE | 16 Nov 2022'
        },
        {
            'img': 'https://image.wedmegood.com/resized/100X/uploads/member/496311/1547115554_2column_pic_6.jpg',
            'name': 'Orchid Banquet, Karve Nagar',
            'feed': 'Visited here for small ceremony. Has a good ambience, seating capacity of approx 150 people.Food was provided from Ratna Veg Cusine and it was delicious. Overall a great experience.',
            'date&time': 'Reviewed By: Ruturaj Dhaneshwar | 14 Nov 2022'
        },
        {
            'img': 'https://image.wedmegood.com/resized/100X/uploads/member/2552391/1637143272_File_013__1_.jpeg',
            'name': 'Tulsi Villa Banquets',
            'feed': 'One of Pune\'s top locations for weddings!! Their service is timely, and they have wonderful decorating ideas. Definitely in a different class',
            'date&time': 'Reviewed By: Manjeet Mark | 14 Nov 2022'
        },
        {
            'img': 'https://image.wedmegood.com/resized/100X/uploads/member/2174453/1630671331_4.png',
            'name': 'Iskcon Banquet Hall',
            'feed': 'Fantastic and outstanding service.',
            'date&time': 'Reviewed By: Ravi | 14 Nov 2022'
        }
    ]
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);
    return (
        <>
            <div className='bg-color'>


                <div id='card-1'>
                    <div>
                        {carddata.map((card, idx) => {
                            return (
                                <Link to="../Cardview" > 
                                <div id='theamoptions' className='section-p1'>
                                    <>
                                        <div id='card-img'>
                                            <div id='first-img'>
                                                <img src={card.img1} id={`main-img${idx}`} alt="" />
                                                {console.log(`main-img${idx}`)}
                                            </div>
                                            <div className='second-img-set'>
                                                <img src={card.img1} className='small-images' onMouseEnter={() => imagechange(idx, 1)} alt="" />
                                                <img src={card.img2} className='small-images' onMouseEnter={() => imagechange(idx, 2)} alt="" />
                                                <img src={card.img3} className='small-images' onMouseEnter={() => imagechange(idx, 3)} alt="" />
                                                <img src={card.img4} className='small-images' onMouseEnter={() => imagechange(idx, 1)} alt="" />
                                            </div>
                                        </div>
                                        <div id='entier-data'>
                                            <div className='card-data'>
                                                <div>
                                                    <strong>{card.hotelname}</strong>
                                                </div>
                                                <div>
                                                    <i class="fa fa-star star"></i>{card.ratring}<span className='faid-txt'>(7 reviews)</span>
                                                </div>
                                            </div>
                                            <div className='card-location faid-txt'>
                                                <div>{card.location}</div>
                                                <div>{card.type}</div>
                                                <div>{card['no-ppl']} pax</div>
                                            </div>
                                            <div className='card-menu'>
                                                <div className='first-item'>
                                                    <p className='faid-txt'>veg</p>
                                                    <strong>Rs.{card.price1}</strong>
                                                </div>
                                                <div className='first-item'>
                                                    <p className='faid-txt'>Non veg</p>
                                                    <strong>Rs.{card.price2}</strong>
                                                </div>
                                            </div>
                                            <div id='card-options'>
                                                <div><button> Indoor </button></div>
                                                <div><button> Outdoor </button></div>
                                                <div><button> Inhouse Catering only </button></div>
                                            </div>
                                            <div id='located-at'>
                                                <p className='faid-txt'>{card.locatedat}</p>
                                                <button id='sendbtn'>Send Message</button>

                                            </div>
                                        </div>
                                    </>


                                </div>
                                </Link>
                                )
                        })}
                    </div>
                    <div>
                        <div id='venuebytype'>
                            <h6 className='my-1'>Venue By Budget</h6>
                            <div id='venueoptions'>
                                <div>
                                    <img src='https://image.wedmegood.com/resized/400X/uploads/member/212475/1581427578_IMG_20200131_WA0055.jpg?crop=7,174,1266,712' alt="" />
                                    <p>Budget Friendly</p>
                                    <img src='https://image.wedmegood.com/resized/400X/uploads/member/3907/1554265966_Full_fort_night_view.jpg' alt="" />
                                    <p>Preminum properties</p>
                                </div>
                                <div>
                                    <img src='https://image.wedmegood.com/resized/400X/uploads/member/121645/1489021594_1483001260_1403175674album_Swimming_pool.jpg' alt="" />
                                    <p>Value For Money</p>
                                    <img src='https://image.wedmegood.com/resized/400X/uploads/member/203285/1507554892_34688004.jpg' alt="" />
                                    <p>Luxury properties</p>
                                </div>
                            </div>
                        </div>
                        <div id='venuebybudget'>
                            <h6 className='my-1'>Venue By Type</h6>
                            <div id='venueoptions'>
                                <div>
                                    <img src='https://image.wedmegood.com/resized/400X/uploads/member/945233/1614876648_A53I9930_EDIT.jpg' alt="" />
                                    <p>Properties Friendly</p>
                                    <img src='https://image.wedmegood.com/resized/400X/uploads/member/740196/1582475411_hktbr_lobby_exterior_8393_hor_clsc.jpg' alt="" />
                                    <p>Preminum properties</p>
                                    <img src='https://image.wedmegood.com/resized/400X/uploads/member/14675/1489012523_1461411454_c493ad8b_02b0_4da5_97bf_49779aff2e0e.jpg' alt="" />
                                    <p>Value For Money</p>
                                </div>
                                <div>
                                    <img src='https://image.wedmegood.com/resized/400X/uploads/member/198988/1603460093_Bait.jpg' alt="" />
                                    <p>Luxury properties</p>
                                    <img src='https://image.wedmegood.com/resized/400X/uploads/member/199283/1554286033_Capture2.JPG' alt="" />
                                    <p>Value For Money</p>
                                    <img src='https://image.wedmegood.com/resized/400X/uploads/vendor_cover_pic/22581/9a036e6a-f2e6-4ad0-a70e-a2e74fc9891c.png' alt="" />
                                    <p>Luxury properties</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                    <div className='question'>
                        <p className='lite-data'>Gurgaon is one of the satellite towns of the NCR of Delhi. It is very well connected with all parts of the city through a well-maintained highway. The domestic and international airports are also very easily accessible from Gurgaon. Gurgaon is popularly known as the ‘millenium city’and all facilities are easily available here. It has banquet halls, farmhouses, hotels for all budgets and so much more to offer. With so much to offer, Gurgaon is fast emerging as a very popular location for weddings. Take your pick from a wide variety of wedding venues, all available on WMG and get started on planning your dream wedding.</p>
                        <p className='faid-txt'><strong> Which localities in Gurgaon have the best wedding venues?</strong></p>
                        <p className='lite-data'>The location of the venue holds utmost importance when we need to book it for hosting a wedding ceremony. It is important that the wedding venue is centrally located and is easily accessible so that your guests can reach without any hassles.
                            The most common searches are for wedding venues on MG Road, wedding venues on NH8/Kapashera, and wedding venues at Atul Kataria Chowk. To book a wedding venue in any locality in Gurgaon, you just have to select the locality from the filter and contact the vendor directly to book a site visit or check for availability.</p>
                        <p className='faid-txt'><strong>Which are the budget wedding venues in Gurgaon?</strong></p>
                        <p className='lite-data'>If you are getting married in Gurgaon and are looking for a banquet or venue to host your celebrations, then you are just at the right place. There are over 390 Gurgaon venues on WedMeGood and all you need to do is apply the filters and you can easily find the best wedding venues in Gurgaon, that too within your budget.</p>
                        <p>
                            <li>If you are getting married in Gurgaon and are looking for a banquet or venue to host your celebrations,
                                then you are just at the on WedMeGood and all you need
                                to do is apply the filters and you can easily find the best wedding venues in Gurgaon, that too within your budget.</li>
                            <li>You are just at the right place. There are over 390 Gurgaon venues on WedMeGood and all you need
                                to do is apply the filters and you can easily find the best wedding venues in Gurgaon, that too within your budget.</li>
                            <li>In Gurgaon and are looking for a banquet or venue to host your celebrations,
                                then you are just at the right place. There are over 390 Gurgaon venues on WedMeGood and all you need
                                to do is apply the filters and you can easily find the best wedding venues in Gurgaon, that too within your budget.</li>
                        </p>
                        <p className='faid-txt'><strong>How can WedMeGood help in finding a wedding venue in Gurgaon?</strong></p>
                        <p className='lite-data'>WMG is a wedding planning app and website that helps one in finding wedding vendors in any city, while sitting in the comfort of your own home. Be it wedding venues, wedding photographers, bridal makeup artists or bridal jewelers, you will find them all on WedMeGood. All you need to do is visit the WMG website or download the WMG App on Android as well as iOS.

                            WedMeGood is a trusted wedding planning platform, listing thousands of verified wedding vendors. You can find more than 390 wedding venues in Gurgaon with a capacity of 100-1500 pax, ranging from INR 500 to 1500 per plate. From veg to non-veg, venues with in-house bar, DJ & decor to the ones allowing outside decor & caterers, at WedMeGood you can find the venue of your choice in and around Gurgaon.

                            Apply various filters include cost, ratings, locality etc. and find a venue in Gurgaon as per your requirements and one that fulfills all your needs. You can check their menu, their prices, ratings and reviews, and shortlist your favorites and contact them directly to get the best quote or book a site visit.
                        </p>
                        <p className='faid-txt'><strong>Frequently Asked Questions</strong></p>
                        <div className='questions'>
                            <p className='faid-txt'><strong>How to find wedding venues near me?</strong></p>
                            <p className='lite-data'>
                                WedMeGood is the solution to all your problems. All you need to do is select the city and other filters such as locality, pricing etc. and you will find a number of suitable venues in your preferred city and locality. Then all you need to do is contact the vendors directly.</p>
                        </div>
                        <div className='questions'>
                            <p className='faid-txt'><strong>Which type of venue should I choose?</strong></p>
                            <p className='lite-data'>
                                The venue you choose should be easily accessible and centrally located. It should be able to accommodate all your guests comfortably. The type of venue you choose depends on a number of factors such as the weather, the time of the wedding etc., and of course, your personal choice.</p>
                        </div>
                        <div className='questions'>
                            <p className='faid-txt'><strong>What is the best time to book a wedding venue in Gurgaon?</strong></p>
                            <p className='lite-data'>
                                The best time to book a wedding venue anywhere and especially in Gurgaon (because if a popular location), is as soon as possible. Book the venue of your choice as soon as your wedding date is fixed and your guest list is finalized. The best venues get booked at the earliest, and they may also get more expensive as your wedding date draws closer. Therefore, it is best to book your wedding venue at the earliest.</p>
                        </div>
                        <div className='questions'>
                            <p className='faid-txt'><strong>How do venues in Gurgaon charge?</strong></p>
                            <p className='lite-data'>
                                Most venues charge on a per plate basis wherein they charge depending upon the number of plates used by the guests. The cost usually includes food, decor & other facilities. Some venues may charge on a ‘rent-only’ basis wherein they charge only for the space that they provide and all other services such as décor, catering etc. are arranged through external vendors.</p>
                        </div>
                        <div className='questions'>
                            <p className='faid-txt'><strong>What capacity should I look for in marriage venues?</strong></p>
                            <p className='lite-data'>
                                The capacity that you require depends on your guest list. Therefore, before you start looking for a wedding venue, you need to decide how many guests you are expecting, to get an idea of the capacity you require.</p>
                        </div>
                    </div>

                    <div className='question'>
                        <p>
                            <p className='faid-txt'><strong>What are the important questions to ask yourself before you start looking for your wedding venue in Pune?</strong></p>
                            <li>  Guest list Firstly, you need to decide on the number of people who will be attending your wedding and check if the banquet/lawn can accommodate all your guests.
                                Type of venue Various options such as banquet halls, hotels, open lawns, farmhouses and 5-star properties are available. WMG has several filters that help you to choose what is best suitable for you.
                                Space preferred Hosting wedding functions in outdoor space is very much in trend these days. However, do consider the season and the location of such a venue when making the bookings.</li>
                            Budget Your budget is one of the most important factors that need to consider before you start your hunt for your dream wedding venue.
                            <li>  One can easily apply different filters on WedMeGood that may help to make the selection process convenient for you. You can find venues that are well within your budget, the type and space you prefer and the one that has good ratings and reviews.</li>
                            <br />
                            <p className='faid-txt'><strong>What are the points to be considered before finalising your Pune wedding venue?</strong></p>
                            <li> Reviews Make sure to check all the ratings, reviews and experiences of people who have booked the same place previously. The more experienced your vendor is, less are the chances of default.
                                Pictures Some properties have more than one venue options such as banquet halls along with outdoor lawn. Do have a careful look at the pictures to get a fair idea about how your venue would look at the time of an actual event with the decoration
                                Location The locality plays an important role when finalising the venue in Pune. A centrally located venue or the one that is in close proximity to the airport or the railway station is generally considered ideal.</li>
                            <li> Policies Be clear about the payment and cancellation policy of the vendor before making your bookings for your wedding venue.
                                Rooms In case you want to accommodate guests in the same property as your wedding venue, just make sure to check with the vendor regarding the number and availability of rooms, this goes without saying in case of a destination wedding.
                                Services available Pune Wedding venues generally provide services such as rooms for bride & groom as well as valet parking. Apart from these, some vendors offer additional services such as in-house catering, DJ and décor. Thus, the hassle of booking another vendor is eliminated. However, if your wedding venue is not providing such services then worry not, WedMeGood is always there for your rescue. You can look up for different vendors available.
                                WedMeGood is a great platform that helps couples and their families to find Pune wedding venues in just a few clicks. The process becomes much more easy, convenient and hassle-free when done with the help of WedMeGood. After filtering the requirements, you can choose from a variety of options available and select the dream wedding venue.</li>
                        </p>
                    </div>
                    <div className='question' id='feedback'>
                        {feedback.map((feedbackdata) => {
                            return (
                                <>
                                    <div className='feedback-data'>
                                        <div>
                                            <img src={feedbackdata.img} alt="" />
                                        </div>
                                        <div>
                                            <p><strong>{feedbackdata.name}</strong></p>
                                            <p>{feedbackdata.feed} <span className='faid-txt'>Read more</span> </p>
                                            <p className='faid-txt'>{feedbackdata['date&time']}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>







                </div>
                <Footer />

            </>
            )
}
