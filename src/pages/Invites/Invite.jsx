import React from 'react'
import invite from "./invite.css"
import { Navbar } from '../../components/Navbar/Navbar'
import {Footer} from "../../components/Footer/Footer"
import { useEffect } from 'react'
export const Invite = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0,0)
      }, []);
    const wedding_card = [
        {
            'hedding': 'Wedding Cards 158 Items',
            'img1': 'https://image.wedmegood.com/e-invite-images/b67e0ca8-4d6b-4732-9c8b-b066389b0886-a.JPEG',
            'type-1': 'Twinkling Lights',
            'img2': 'https://image.wedmegood.com/e-invite-images/80b1264e-8e33-45ea-8b22-2045ad5a9949-1.JPEG',
            'type-2': 'Medieval Periods',
            'img3': 'https://image.wedmegood.com/e-invite-images/3291272b-c7ce-4b34-97ed-8ac2f109dc44-1.JPEG',
            'type-3': 'Tulip Garden',
            'img4': 'https://image.wedmegood.com/e-invite-images/f8838e6e-3bff-4183-8e9a-23cc718ac06c-1.JPEG',
            'type-4': 'Vivacious Pastel'

        }
        , {
            'hedding': 'Wedding Cards 158 Items',
            'img1': 'https://image.wedmegood.com/e-invite-images/10b904c2-f45b-4d82-b475-5791183c09c4-Screenshot_(64).JPEG',
            'type-1': 'Twinkling Lights',
            'img2': 'https://image.wedmegood.com/e-invite-images/ffbc670e-31b8-462b-9218-87aa7b724f3f-save_the_date.JPEG',
            'type-2': 'Medieval Periods',
            'img3': 'https://image.wedmegood.com/e-invite-images/67dea148-d41b-4176-8d8b-ad24b98b12e9-save_the_date.JPEG',
            'type-3': 'Tulip Garden',
            'img4': 'https://image.wedmegood.com/e-invite-images/9f3deec6-1eb7-4d12-a540-814928620f1e-save_the_date.JPEG',
            'type-4': 'Vivacious Pastel'

        },
    ]
    const video_card = [
        {
            'hedding': 'Video Cards 112 Items',
            'video1': 'https://videoinvites.wedmegood.com/16698935037578+%281%29.mp4',
            'type-1': 'Twinkling Lights',
            'video2': 'https://videoinvites.wedmegood.com/166989242513916+%282%29.mp4',
            'type-2': 'Medieval Periods',
            'video3': 'https://videoinvites.wedmegood.com/16698910643304+%281%29.mp4',
            'type-3': 'Tulip Garden',
            'video4': 'https://videoinvites.wedmegood.com/1669871026698omnipresent.mp4',
            'type-4': 'Vivacious Pastel'

        }
    ]
    return (
        <>
            <Navbar />
            <section className='section-p1 wedding-cards'>
                <h5 className='faid-txt'>Home &gt; Invitation Cards</h5>
                {wedding_card.map((card) => {
                    return (
                        <>
                            <h4>{card.hedding}</h4>
                            <div className='wedding-cards d-flex'>
                                <div>
                                    <img src={card.img1} alt="" />
                                    <h6 className='my-2 mx-1'> {card['type-1']}</h6>
                                </div>
                                <div> <img src={card.img2} alt="" />  <h6 className='my-2 mx-1'>{card['type-2']}</h6>

                                </div>
                                <div> <img src={card.img3} alt="" />  <h6 className='my-2 mx-1'>{card['type-3']}</h6>
                                </div>
                                <div> <img src={card.img4} alt="" />  <h6 className='my-2 mx-1'>{card['type-4']}</h6>
                                </div>
                            </div>
                            <div className='text-center my-5 view-all-btn'>
                                <button>View all &gt;</button>
                            </div>
                        </>
                    )
                })}
                {video_card.map((clip) => {
                    return (
                        <>
                            <h4>{clip.hedding}</h4>
                            <div className='wedding-cards d-flex'>
                                <div>
                                {/* autoPlay  controls loop */}
                                    <video src={clip.video1}  autoPlay controls muted loop/>
                                    <h6 className='my-2 mx-1'> {clip['type-1']}</h6>
                                </div>
                                {/* autoPlay controls  loop */}
                                <div> <video src={clip.video2} autoPlay controls muted loop/>  <h6 className='my-2 mx-1'>{clip['type-2']}</h6>
                                </div>
                                {/* autoPlay controls  loop */}
                                <div> <video src={clip.video3}  autoPlay controls muted loop/>  <h6 className='my-2 mx-1'>{clip['type-3']}</h6>
                                </div>
                                {/* autoPlay controls  loop */}
                                <div> <video src={clip.video4}  autoPlay controls muted loop/>  <h6 className='my-2 mx-1'>{clip['type-4']}</h6>
                                
                                </div>
                            </div>
                            <div className='text-center my-5 view-all-btn'>
                                <button>View all &gt;</button>
                            </div>
                        </>
                    )
                })}
            </section>
            <Footer/>
        </>
    )
}
