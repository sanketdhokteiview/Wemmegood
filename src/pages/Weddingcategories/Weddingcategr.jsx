import React from 'react'
import weddingcategr from './weddingcategr.css'
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer"
export const Weddingcategr = () => {
    let categories = [
        {
            "title": "Venues",
            "location": "Banquet Halls,Lawns / Farmhouses",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg',
            'bgcolor':"rgb(216, 223, 252)"
        },
        {
            "title": "Makeup",
            "location": "Bridal Makeup,Family Makeup",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/3/makeup.jpg',
            'bgcolor':"rgb(244, 213, 194)"
        },
        {
            "title": "Groom Wear",
            "location": "Sherwani,Wedding Suits/Tuxes",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/5/groom-wear.jpg',
            'bgcolor':"rgb(223, 178, 173)"
        },
        {
            "title": "Planning & Decor",
            "location": "Wedding Planners,Decorators",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/7/planning-decor.jpg',
            'bgcolor':"rgb(207, 205, 184)"
        },
        {
            "title": "Invites & Gifts",
            "location": "Invitations,Favors,Trousseau Packers",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/9/invites-gifts.jpg',
            'bgcolor':"rgb(220, 247, 247)"


        },
        {
            "title": "Jewellery & Accessories",
            "location": "Jewellery,Flower Jewellery, Bridal Jewellery",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/11/jewellaries-accessories.jpg',
            'bgcolor':"rgb(229, 211, 189)"

        },
        {
            "title": "Photographers",
            "location": "Photographers,Cinerma/Video,pre Wedding",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/2/photographers.jpg',
            'bgcolor':"rgb(246, 184, 150)"

        },
        {
            "title": "Bridal Wear",
            "location": "Bridal Lehengas,Kanjeevaram / Silk",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/4/bridal-wear.jpg',
            'bgcolor':"rgb(212, 187, 208)"

        },
        {
            "title": "Mehndi",
            "location": "Mehendi Artist",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/6/mehendi-artists.jpg',
            'bgcolor':"rgb(242, 216, 212)"

        },
        {
            "title": "Food",
            "location": "Catering Services,Cake,Chaat & Food",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/8/food.jpg',
            'bgcolor':"rgb(239, 191, 155)"

        },
        {
            "title": "Pandits",
            "location": "Wedding Pandits",
            "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/12/panditji.jpg',
            'bgcolor':"rgb(244, 235, 189)"

        },
    ]
    let Choreographers = [
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/vendor_cover_pic/105941/6756725b-7d9a-40d1-b4e1-93a3a658875f.png',
            'company': 'Revolution Dance',
            'location': 'Ashram Road,Ahmedabad',
            'price': 'Rs.35000 onwards'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/522282/1551189546_1551162282_IMG_20190205_223212_313.jpg',
            'company': 'Dhadkan Group',
            'location': 'Ahmedabad',
            'price': 'Rs.35000 onwards'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/23151/1489016420_1465475564_39.jpg',
            'company': 'Srushti Shah',
            'location': 'Ahmedabad',
            'price': 'Rs.21000 onwards'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/3246345/1657422512_image9244.jpg?crop=0,174,2048,1152',
            'company': 'Parthi Chauhan',
            'location': 'Ahmedabad',
            'price': 'Rs.15000 onwards'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/1057234/1637917730_WhatsApp_Image_2021_11_26_at_2.18.23_PM.jpeg?crop=11,104,895,504',
            'company': 'Mansi Luhana',
            'location': 'Ahmedabad',
            'price': 'Rs.15000 onwards'
        },
    ]
    let makeup = [
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/101158/1594010859_IMG_20200706_WA0011.jpg?crop=3,121,846,476",
            'name': 'Pristine Makeovers',
            'location': "Thaltej,Ahmedabad",
            'price': 'Rs.15000'
        },
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/166847/1663270006_image6400.jpg?crop=0,522,2048,1153",
            'name': 'Foram Atara',
            'location': "Ashram Road,Ahmedabad",
            'price': 'Rs.17000'
        },
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/533122/1589604315_image8432.jpg?crop=195,167,1630,917",
            'name': 'Ridhima Makeovers',
            'location': "Memnagar,Ahmedabad",
            'price': 'Rs.13500'
        },
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/308154/1642240440_1J1A0144.jpg?crop=0,481,2048,1152",
            'name': 'Richa Thakkar',
            'location': "Ahmedabad",
            'price': 'Rs.20000'
        },
    ]
    let photographers=[
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/project/222056/1667218970_DHR04418.jpg?crop=8,196,2032,1143",
            'name': 'Taj Wedding Films',
            'location': "Thaltej,Ahmedabad",
            'price': 'Rs.20000'
        },
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/1002817/1654843741_IMG_9083.jpg?crop=69,224,1619,910",
            'name': 'Jayesh Badlani',
            'location': "Thaltej",
            'price': 'Rs.30000'
        },
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/1467101/1601276756_shrihari.JPG",
            'name': 'Shree Hari Creations',
            'location': "Thaltej,JK",
            'price': 'Rs.15000'
        },
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/2841848/1645784487_CJ7_7516__1_.jpg?crop=14,16,2020,1136",
            'name': '7 Pixels',
            'location': "Ahmedabad",
            'price': 'Rs.15000'
        },
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/922355/1578118055_Screenshot_from_2020_01_04_11_36_46.png",
            'name': 'The Moment by Foran',
            'location': "Navrangpura,Ahmedabad",
            'price': 'Rs.15000'
        }
    ]
    let Venues = [
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/249176/1663403078_Wedding_Mandapa_0851.jpg?crop=337,556,1439,809",
            'name': 'Renaissance Ahmedabad',
            'location': "Gota,Ahmedabad",
            'price': 'Rs.1200'
        },
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/1142250/1647425295_ppp.PNG?crop=8,0,786,442",
            'name': 'Fairfield Marriott',
            'location': "Usmanpura,Ahmedabad",
            'price': 'Rs.1000'
        },
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/715652/1653046956_image2400.jpg?crop=6,662,2036,1145",
            'name': 'Hotel German Palace',
            'location': "Bhat,Ahmedabad",
            'price': 'Rs.650'
        },
        {
            'img': "https://image.wedmegood.com/resized/450X/uploads/member/741595/1569421776_Screenshot_from_2019_09_25_19_58_53.png",
            'name': 'Vastrapur Ahphitheatre',
            'location': "Ahmedabad",
            'price': 'On Request'
        },
    ]

    return (
        <>
            <Navbar />
            <h3 className='section-p1'>Wedding Categories</h3>
            <section id="wedding-categories" className='section-p1'>
                {categories.map((category) => {
                    return (<div id="categories-1" style={{backgroundColor:category.bgcolor}}>
                        <div>
                            <h3>{category.title}</h3>
                            <p>{category.location}</p>
                        </div>
                        <div>
                            <img src={category.img} alt="" />
                        </div>
                    </div>)
                })}

            </section>
            <h3 className='section-p1'>Trending Choreographers</h3>
            <section id="Trending-choreographers" className='section-p1'>
                {Choreographers.map((dancers) => {
                    return (

                        <div id="choreographers-card-1">
                            <img src={dancers.img} alt="" />
                            <h5>{dancers.company}</h5>
                            <h6 className='text-tertiary'>{dancers.location}</h6>
                            <h5 className='h6 text-bold '>{dancers.price}</h5>
                        </div>
                    )
                })}


            </section>
            <h3 className='section-p1'>Wedding Makeup Artist</h3>

            <section id="wedding-makeup" className='section-p1'>
                {makeup.map((makeupartist) => {
                    return (
                        <div id="makeup-card">
                            <div>
                            <img src={makeupartist.img} alt="" />
                            </div>
                            <div>
                            <h5>{makeupartist.name}</h5>
                            <h6 className='text-tertiary'>{makeupartist.location}</h6>
                            <h5 className='h6 text-bold '>{makeupartist.price}</h5>
                            </div>
                        </div>
                    )
                })}

            </section>
            <h3 className='section-p1'>Top Pre Wedding Photographers</h3>
            <section id="Trending-choreographers" className='section-p1'>
            {photographers.map((photos)=> {
                    return (

                        <div id="choreographers-card-1">
                        <img src={photos.img} alt="" />
                        <h5>{photos.name}</h5>
                        <h6 className='text-tertiary'>{photos.location}</h6>
                        <h5 className='h6 text-bold '>{photos.price}</h5>
                    </div>
                    )
                })}
               
            </section>
            <h3 className='section-p1'>Venues Near You</h3>
            <section id="wedding-makeup" className='section-p1'>
            {Venues.map((Venue) => {
                    return (
                        <div id="makeup-card">
                            <div>
                            <img src={Venue.img} alt="" />
                            </div>
                            <div>
                            <h5>{Venue.name}</h5>
                            <h6 className='text-tertiary'>{Venue.location}</h6>
                            <h5 className='h6 text-bold '>{Venue.price}</h5>
                            </div>
                        </div>
                    )
                })}
              
            </section>
            <Footer />
        </>
    )
}
