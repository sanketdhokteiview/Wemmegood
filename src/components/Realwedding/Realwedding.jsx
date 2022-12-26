import React from 'react'
import realwedding from "./realwedding.css"
import { Navbar } from '../Navbar/Navbar'
import { Footer } from "../Footer/Footer"
export const Realwedding = () => {
    const photos = [{
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/89c7779451824ed2903eafe54492c898realwedding/wedding-1.jpg?crop=328,190,1619,911",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/12ff2ffed5b245b990cfa9dbf1d8e9d0realwedding/reedit-1.jpg",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/a1c49b920b014a89819c65b7cd9d5ae9realwedding/0D7A7981.jpg?crop=249,376,1619,911"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/febb27b15f35494380b115bdc338b892realwedding/_IT_8159.jpg?crop=220,872,1629,916",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/f6c9120395d94f269acf675d275137a2realwedding/193A0483.JPG",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/4aefa47727724546a97ffa4fb9cd30b7realwedding/ARV_5408.jpg"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/12c87e4946ef4600929d84ea29fd768drealwedding/Wedding-313.jpg?crop=215,108,1619,911",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/773e17a243234ff9874450f5a01e640crealwedding/71_7Y3A1653.jpg?crop=235,0,1583,890",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/225836d6f3dc4059bc8f67b93f34eb04realwedding/19.jpg"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/5d280eda29e749daa99e08fae903fa0drealwedding/AI_1_Wedding_109.jpg?crop=201,320,1621,912",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/fac86f6afd9d4441a630c74a38d93351realwedding/AD_19396-2.jpg?crop=276,590,1358,764",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/1cf68fb5401b48a3a06f5f94a937daberealwedding/FRV_1907.jpg?crop=11,71,2024,1138"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/1cf68fb5401b48a3a06f5f94a937daberealwedding/FRV_1907.jpg?crop=11,71,2024,1138",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/6b72cf8871d14aadb4d9b986ce6d0bdfrealwedding/ANK_9873.jpg",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/a9abb804e84d4622a7ddb3fc53ca79e8realwedding/AGGY5283.jpg"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/01a820df7cba4d479008b8b810cd19d4realwedding/_69A4243.JPG?crop=11,45,1619,910",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/2373f7c586754421827614b87f93dd36realwedding/_69A4263.JPG",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/2bb4fa0ae76f40fe9dbc033421a35174realwedding/JEZ01570.jpg?crop=235,284,1619,910"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/89c7779451824ed2903eafe54492c898realwedding/wedding-1.jpg?crop=328,190,1619,911",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/12ff2ffed5b245b990cfa9dbf1d8e9d0realwedding/reedit-1.jpg",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/a1c49b920b014a89819c65b7cd9d5ae9realwedding/0D7A7981.jpg?crop=249,376,1619,911"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/cb16d0227b194c6aa4f860a563c364f5realwedding/DSC05905-2.jpg?crop=188,669,1629,916",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/c624168a49004666a06df8ef0ba23915realwedding/274085571_354090619903496_434262524981361747_n.jpg",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/b32fc68172b74b5883f07f82dc9e3353realwedding/JEZ02609.jpg"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/c930f314cb5047608f71744a41855011realwedding/0G7A1992.JPEG?crop=12,0,1823,1025",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/1f6095233a9b403ba8910389452f3280realwedding/IMG_0260.JPG",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/faff47a9fa234cd99d1758bac9b47bd4realwedding/281298209_720101785798634_4695889886556133881_n.jpg"
    }, {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/12c87e4946ef4600929d84ea29fd768drealwedding/Wedding-313.jpg?crop=215,108,1619,911",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/773e17a243234ff9874450f5a01e640crealwedding/71_7Y3A1653.jpg?crop=235,0,1583,890",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/225836d6f3dc4059bc8f67b93f34eb04realwedding/19.jpg"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/cd42c0af517d4f409cf2fdec5ccd5020realwedding/Arjun-Sumalya-41.jpeg?crop=206,1275,1630,917",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/be0402bc3fee40be8a51beb13108696arealwedding/52.jpg?crop=4,658,2038,1146",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/5e0d28d72309478ba36a0d6538e72461realwedding/TEC_32221.jpg?crop=173,102,1623,913"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/5d280eda29e749daa99e08fae903fa0drealwedding/AI_1_Wedding_109.jpg?crop=201,320,1621,912",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/fac86f6afd9d4441a630c74a38d93351realwedding/AD_19396-2.jpg?crop=276,590,1358,764",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/1cf68fb5401b48a3a06f5f94a937daberealwedding/FRV_1907.jpg?crop=11,71,2024,1138"
    }, {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/01a820df7cba4d479008b8b810cd19d4realwedding/_69A4243.JPG?crop=11,45,1619,910",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/2373f7c586754421827614b87f93dd36realwedding/_69A4263.JPG",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/2bb4fa0ae76f40fe9dbc033421a35174realwedding/JEZ01570.jpg?crop=235,284,1619,910"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/febb27b15f35494380b115bdc338b892realwedding/_IT_8159.jpg?crop=220,872,1629,916",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/f6c9120395d94f269acf675d275137a2realwedding/193A0483.JPG",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/4aefa47727724546a97ffa4fb9cd30b7realwedding/ARV_5408.jpg"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/89c7779451824ed2903eafe54492c898realwedding/wedding-1.jpg?crop=328,190,1619,911",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/12ff2ffed5b245b990cfa9dbf1d8e9d0realwedding/reedit-1.jpg",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/a1c49b920b014a89819c65b7cd9d5ae9realwedding/0D7A7981.jpg?crop=249,376,1619,911"
    }, {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/5d280eda29e749daa99e08fae903fa0drealwedding/AI_1_Wedding_109.jpg?crop=201,320,1621,912",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/fac86f6afd9d4441a630c74a38d93351realwedding/AD_19396-2.jpg?crop=276,590,1358,764",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/1cf68fb5401b48a3a06f5f94a937daberealwedding/FRV_1907.jpg?crop=11,71,2024,1138"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/1cf68fb5401b48a3a06f5f94a937daberealwedding/FRV_1907.jpg?crop=11,71,2024,1138",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/6b72cf8871d14aadb4d9b986ce6d0bdfrealwedding/ANK_9873.jpg",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/a9abb804e84d4622a7ddb3fc53ca79e8realwedding/AGGY5283.jpg"
    },
    {
        'img1': "https://image.wedmegood.com/resized/450X/uploads/images/01a820df7cba4d479008b8b810cd19d4realwedding/_69A4243.JPG?crop=11,45,1619,910",
        "img2": "https://image.wedmegood.com/resized/450X/uploads/images/2373f7c586754421827614b87f93dd36realwedding/_69A4263.JPG",
        "img3": "https://image.wedmegood.com/resized/450X/uploads/images/2bb4fa0ae76f40fe9dbc033421a35174realwedding/JEZ01570.jpg?crop=235,284,1619,910"
    }
    ]
    return (
        <>
            <Navbar />
            
            <section id='banner-img-txt'>
                <h5>Real Wedding on WedMeGood | Photos & Trending Ideas</h5>
                <p>Browse pictures from real weddings shared by couples on WedMeGood. Know latest wedding trends, outfit ideas, vendors chosen by real brides & grooms in different cities and culture.</p>

            </section>
            <div id='real-wedding-filter' className='section-p1 global-txt'>
                <div className='mx-2'>
                    <select>
                        <option>All Cities</option>
                    </select>
                </div>
                <div className='mx-2'><select>
                    <option>All Cultures</option>
                </select></div>
                <div className='mx-2'><select>
                    <option>All Themes</option>
                </select></div>
                <div className='mx-2'>
                    <input type="text" placeholder='Search by vendors, bride/groom' />
                </div>
            </div>
            <div className='bg-color'>
                <section className='section-p1'>
                    <p className='faid-txt'>Home &gt; Real Weddings</p>

                    <p>Showing 1718 results in All Cities</p>
                </section>
                <div className='section-p3 photos-grid-view bg-color'>
                    {photos.map((data) => {
                        return (
                            <>
                                <div className='photos-grid'>
                                    <div className='big-img'>
                                        <img src={data.img1} alt="" />
                                    </div>
                                    <div className='side-by-side flex-photos'>
                                        <div>
                                            <img src={data.img2} alt="" />
                                        </div>
                                        <div>
                                            <img src={data.img3} alt="" />
                                        </div>
                                    </div>
                                    <div className='text-center my-2'>Chahela tanaya</div>
                                    <div className='text-center'>Mumbai</div>
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
