import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from "../Footer/Footer"
import { Link } from 'react-router-dom'
import gridview from "./gridview.css"
export const Gridview = () => {
    let griddata = [
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/project/10352/1535775417_image8469.jpg?crop=161,234,1078,606',
            'name': 'The Pergola',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/project/213901/1662724497_A53I6638_Edit.jpg?crop=32,291,1910,1074',
            'name': 'Regenta Central',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/30488/1657006058_IMG_20220427_111742__01.jpg?crop=100,184,1848,1039',
            'name': 'RedWood Resort',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/102242/1594452043_image5005.jpg?crop=146,201,1012,569',
            'name': 'Regenta Central',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/493938/1643258047_IMG_6067.JPG?crop=9,184,2030,1142',
            'name': 'RedWood Resort',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/2737069/1649686905_2022_04_11__21_.png?crop=7,134,1322,744',
            'name': 'Regenta Central',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/3574567/1666885954_WhatsApp_Image_2022_10_26_at_4.10.59_PM.jpeg?crop=112,47,1071,602',
            'name': 'RedWood Resort',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/844251/1655463444_WhatsApp_Image_2022_06_17_at_4.26.19_PM.jpeg',
            'name': 'Regenta Central',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/project/121214/1612245816_IMG_3178.JPG?crop=9,266,2031,1142',
            'name': 'RedWood Resort',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        }, {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/14059/1594373663_WhatsApp_Image_2020_06_30_at_2.28.58_PM__1_.jpeg?crop=134,195,1013,570',
            'name': 'Regenta Central',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/1336927/1646294081_IMG_0363.JPG?crop=10,103,2028,1140',
            'name': 'RedWood Resort',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        }, {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/108539/1477552985_25_Banquet_Round_Table_R.jpg?crop=13,2,997,561',
            'name': 'Regenta Central',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/519757/1632297394_IMG_6998.JPG?crop=113,120,853,480',
            'name': 'RedWood Resort',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        }, {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/23416/1667379565_B__18_.jpg?crop=180,413,1620,911',
            'name': 'Regenta Central',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/43249/1640686157_PUNHR_P088_Facade.jpg?crop=13,227,2023,1138',
            'name': 'RedWood Resort',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        }, {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/2592409/1647418527_2048_x_1152_pixels.jpg?crop=15,134,1615,908',
            'name': 'Regenta Central',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        },
        {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/member/3478166/1664635788_Windsor_Stage.jpeg?crop=166,427,1122,631',
            'name': 'RedWood Resort',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        }, {
            'img': 'https://image.wedmegood.com/resized/450X/uploads/project/214359/1663054417_haldi__31__1_.jpg?crop=13,219,1975,1111',
            'name': 'Regenta Central',
            'rating': '4.8',
            'location': 'Yashwanthpur',
            'vge-price': "1,499",
            "nonveg-price": '1,699'
        }
    ]
    let feedback = [
        {
            'img': 'https://image.wedmegood.com/resized/100X/uploads/member/538461/1553331297_DJI_0048.JPG',
            'name': 'Nahata Lawns',
            'feed': 'Best Venue for Weddings. Packages are most econimical and they have the best service in town.My Wedding and Reception was managed in a very professional way.Thanks to Rishabh Nahata sir and the whole staff of Nahata Lawns',
            'date&time': 'Reviewed By: DASHARATH BIRHAMANE | 16 Nov 2022'
        },
        {
            'img': 'https://image.wedmegood.com/resized/100X/uploads/member/2842538/1662992464_Screenshot_20220912_194946_Instagram.jpg',
            'name': 'Orchid Banquet, Karve Nagar',
            'feed': 'Visited here for small ceremony. Has a good ambience, seating capacity of approx 150 people.Food was provided from Ratna Veg Cusine and it was delicious. Overall a great experience.',
            'date&time': 'Reviewed By: Ruturaj Dhaneshwar | 14 Nov 2022'
        },
        {
            'img': 'https://image.wedmegood.com/resized/100X/uploads/member/3307206/1658995048_Screenshot_2022_07_28_132517.png',
            'name': 'Tulsi Villa Banquets',
            'feed': 'One of Pune\'s top locations for weddings!! Their service is timely, and they have wonderful decorating ideas. Definitely in a different class',
            'date&time': 'Reviewed By: Manjeet Mark | 14 Nov 2022'
        },
        {
            'img': 'https://image.wedmegood.com/resized/100X/uploads/member/2846463/1658485858_WhatsApp_Image_2022_07_22_at_3.59.15_PM.jpeg',
            'name': 'Iskcon Banquet Hall',
            'feed': 'Fantastic and outstanding service.',
            'date&time': 'Reviewed By: Ravi | 14 Nov 2022'
        }
    ]

    return (
        <>
            <div className='bg-color'>

                <div className='section-p2 displaygrid' >
                    {griddata.map((gridinfo) => {
                        return (
                            <>
                               <div id='gridview'>
                               <Link to="../Cardview" >  <img src={gridinfo.img} alt="" /> 
                                    <div className='grid-all-data'>

                                        <div className='grid-data'>
                                            <p className='name'>{gridinfo.name}</p>
                                            <h6 className='mt-2 '> 
                                            <i class="fa fa-star margin-r-5 star"></i>  
                                            {gridinfo.rating} <span className='faid-txt'> (43 reviews)</span></h6>
                                        </div>
                                        <div className='grid-data'>
                                            <span className='faid-txt'>{gridinfo.location}</span>
                                            <span className='faid-txt'>Lawns/Farmhouse</span>
                                        </div>
                                        <div className='dishprices'>
                                            <div>
                                                <p className='faid-txt'>Veg</p>
                                                <p className='name'>Rs.{gridinfo['vge-price']} per plate</p>
                                            </div>
                                            <div className='nonveg'>
                                                <p className='faid-txt'>Non Veg</p>
                                                <p className='name'>Rs.{gridinfo['nonveg-price']} per plate</p>
                                            </div>
                                        </div>
                                        <button>outdoor</button>
                                        <button>outsite Caterering only</button>

                                    </div></Link>
                                </div> 

                            </>
                        )
                    })}
                </div>

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
            <Footer />
        </>
    )
}
