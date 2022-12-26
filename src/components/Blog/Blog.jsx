import React from 'react'
import blog from "./blog.css"
import { Navbar } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"
import { Link } from 'react-router-dom'
export const Blog = () => {
    let article_data = [
        {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2018/08/chamee1.jpg",
            "title": "Glamorous Engagement With The Bride In A Neon Lehenga",
            "time": "By Aakansha  |  13 Feb, 2021  |  2 min read",
            'discription': 'Anisa & Aniket\'s glamorous engagement was totally out of a princess fairyland! Anisa looked like a fairy queen in a bright neon coloured lehenga while Aniket complimented her perfectly in his off-white ensemble. Add to that the pink decor, and it was the perfect engagement. Scroll down and see for yourself how Anisa & Aniket celebrated their love.'
        },
        {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2019/09/Collage_Fotor26.jpg",
            "title": "WMG Spotted: Chanderi Lehengas Perfect For Your Haldi! *With Links & Prices!",
            "time": "By Aakansha  |  13 Feb, 2021  |  2 min read",
            'discription': 'Chanderi is a rich fabric that\'s perfect to rock on something like the Haldi or the Mehendi- after all, not only does it look rich, but it doesn\'t come with the bulk and weight like a lot of other fa...'
        },
        {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2018/01/Day_0115of592.jpg",
            "title": "New Way To Co-ordinate With Your Groom: Twin In Prints!",
            "time": "By Aakansha  |  13 Feb, 2021  |  2 min read",
            'discription': 'There are three things a bride should remember while looking for that perfect lehenga. One, it needs chutzpah, two, the outfit should stand beautifully against the decor and three, it should fit in we...'
        }, {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2022/11/oonchal.jpg",
            "title": "Glamorous Engagement With The Bride In A Neon Lehenga",
            "time": "By Aakansha  |  13 Feb, 2021  |  2 min read",
            'discription': 'Anisa & Aniket\'s glamorous engagement was totally out of a princess fairyland! Anisa looked like a fairy queen in a bright neon coloured lehenga while Aniket complimented her perfectly in his off-white ensemble. Add to that the pink decor, and it was the perfect engagement. Scroll down and see for yourself how Anisa & Aniket celebrated their love.'
        }, {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2017/11/1478217385_DD__3191.jpg",
            "title": "How to Find the Best Wedding Photographer?",
            "time": "By Aakansha  |  13 Feb, 2021  |  2 min read",
            'discription': 'It must be extremely arduous to try to pick a photographer amongst so many good candid photographers known to us. But if you observe keenly, every photographer has his own style of shooting pictur...'
        }, {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2014/08/8.jpg",
            "title": "A Pink & Yellow Mehendi Event : Bride Zarneen",
            "time": "By Aakansha  |  13 Feb, 2021  |  2 min read",
            'discription': 'OK i get it- you love the whole flower jewellery trend and want to wear it for your mehendi as well. But lets take a feather or two from our gorgeous bride Zarneen\'s cap to really learn how to wear ...'
        }
    ]
    let article_data2 = [
        {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2021/11/Collage_Fotor13.jpg",
            "title": "Rajkummar Rao & Patralekha's Wedding Teaser Is Sheer Poetry On Screen",
            "time": "  BY Sakshi | 22 Nov, 2021 | 1 min read",
            'discription': 'Now this is what a wedding teaser should be like- especially a celebrity one! No pretence, no over the top setups, just raw emotions and pure love. That\'s what we felt when we saw Rajkummar Rao and P...'
        },
        {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2020/09/FB-FI79.jpg",
            "title": "Thaalams in Kerala Weddings and How WE Can Add Them To Intimate Weddings",
            "time": "BY Meenu | 12 Oct, 2020 | 3 min read",
            'discription': 'When you think of a Malayalee wedding, one of the beautiful things that come to mind is the procession of girls in off white which creates a bridal entry. A staple in Malayalee weddings, thaals for'
        },
        {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2017/08/Peachesandblush11.jpg",
            "title": "Dreamy Pune Wedding With The Cutest Decor Ever.",
            "time": "By Aakansha  |  13 Feb, 2021  |  2 min read",
            'discription': 'If there was an award for the most interesting decor, this wedding would hands down, win it. The number of interesting ideas that were jam-packed into this were too good to be true. From a beautiful f...'
        }, {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2022/11/oonchal.jpg",
            "title": "Glamorous Engagement With The Bride In A Neon Lehenga",
            "time": "By Aakansha  |  13 Feb, 2021  |  2 min read",
            'discription': 'Anisa & Aniket\'s glamorous engagement was totally out of a princess fairyland! Anisa looked like a fairy queen in a bright neon coloured lehenga while Aniket complimented her perfectly in his off-white ensemble. Add to that the pink decor, and it was the perfect engagement. Scroll down and see for yourself how Anisa & Aniket celebrated their love.'
        }, {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2021/11/Downloads4.jpg",
            "title": "Lakmé Salon Showcases Beautiful Looks For The Gen-Next Brides Of Bangalore!",
            "time": "BY Sakshi | 01 Nov, 2021 | 2 min read",
            'discription': 'It must be extremely arduous to try to pick a photographer amongst so many good candid photographers known to us. But if you observe keenly, every photographer has his own style of shooting pictur...'
        }, {
            "img": "https://image.wedmegood.com/resized-nw/450X650/wp-content/uploads/2021/03/NIKON.jpg",
            "title": "A Pink & Yellow Mehendi Event : Bride Zarneen",
            "time": "By Aakansha  |  13 Feb, 2021  |  2 min read",
            'discription': 'Bangalore is a cosmopolitan city, with modern gen-next brides who know exactly the look that they want! From totally modern to totally traditional, Lakm Salon recreated some luxe looks to take insp...'
        }
    ]
    return (
        <>
            <Navbar />
            <section className='section-p1'>
                <div className='row blog-intro'>
                    <div className='col-6 blog-headding'>
                        <div>
                            <h3>Bridal Makeup</h3>
                            <p>Your wedding look is incomplete without bridal makeup. Browse through our blogs for tons of ideas and inspirations for the perfect makeup look for your special day.</p>
                        </div>
                        <div id='blog-links'>
                            <div className='col-6'>
                                <Link to="./Blogdetails">Bridal Beauty Checklists and To-dos</Link> <br />
                                <Link to="./Blogdetails">100+ Bridal makeup images</Link> <br />
                                <Link to="./Blogdetails">Best Engagement Makeup Looks</Link> <br />
                            </div>
                            <div className='col-6'>
                                <Link to="./Blogdetails">South Indian Bridal Makeup Looks</Link> <br />
                                <Link to="./Blogdetails">Find Bridal Makeup Artists</Link> <br />
                                <Link to="./Blogdetails">Things to ask your makeup Artist</Link>
                            </div>


                        </div>
                    </div>
                    <div className='blog-img col-6'>
                        <img src="https://images.wedmegood.com/uploads/images/cca7a33b7d534599b055ccd3063e83berealwedding/1521539254_RBP_11739.jpg" alt="" />
                    </div>
                </div>
                <div className='artical-search'>
                    <input type="text" placeholder='Search Wedding Articles' className='col-9' />
                </div>
                <div className='row my-5'>
                    <div className='col-5 article-data'>
                        {article_data.map((article) => {
                            return (<>
                                <div className='col-12 my-5'>
                                    <img src={article.img} alt="" />
                                    <h4>{article.title}</h4>
                                    <p>{article.time}</p>
                                    <p className='faid-txt discrp'>{article.discription}</p>
                                </div>
                            </>)
                        })}

                    </div>
                    <div className='col-5 article-data'>
                        {article_data2.map((article) => {
                            return (<>
                                <div className='col-12 my-5'>
                                    <img src={article.img} alt="" />
                                    <h4>{article.title}</h4>
                                    <p>{article.time}</p>
                                    <p className='faid-txt discrp'>{article.discription}</p>
                                </div>
                            </>)
                        })}
                    </div>
                    <div className='col-2 article-adds'>
                        <img src="https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/688452/ed714934-ccce-4481-a7a7-013bd9804f9b320x480.jpg" alt="" />
                        <img src="https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/688452/45710361-e498-4e31-b684-0f3ccf98d9a6PDOL-Store-banner-300x400.jpg" alt="" />
                        <img src="https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/688452/cc0c0766-3be4-4840-b8c2-4a3fd0cca526InApp%20Pop-Up-01.jpg" alt="" />
                        <img src="https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/1994777/4f914309-af64-45e8-b0cd-7a5fffdaa61cgenie-blog-banner.jpg" alt="" />
                        <img src="https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/1994777/b8da3b7b-858e-4d67-96e7-b5a274e492c9BlogBanner.png" alt="" />
                        <img src="https://image.wedmegood.com/resized/400X/blog-banner/blog_banner_image/1994777/789de60c-ee1b-46e6-bdc0-a32c59e33568gallery.jpg" alt="" />
                        <img src="https://image.wedmegood.com/blog/instagram.png" alt="" />
                        <img src="https://image.wedmegood.com/blog/facebook.jpg" alt="" />
                    </div>
                </div>
            </section>

            <section className='guides'>
                <div className='wed-guides'>

                    <h3 className='my-5 pt-3'>Browse Our Guides</h3>
                    <img src="https://image.wedmegood.com/blog/decor.jpg" alt="" />
                    <img src="https://image.wedmegood.com/blog/dress.jpg" alt="" />
                    <img src="https://image.wedmegood.com/blog/real-wedding.jpg" alt="" />
                    <img src="https://image.wedmegood.com/blog/wedding-ideas.jpg" alt="" />

                </div>
            </section>
            <section className='wed-guides guide-search'>
                <h4 className='my-3'>Find the best wedding vendors with thousands of trusted reviews</h4>
                <p className='my-3'>I am looking for <input type="text" placeholder='Search for Vendors' /> </p>
                <div className='btn1'>
                    <button className='my-3'>Search</button>
                </div>
            </section>
            <section className='socail-acc-handle '>
                <div className='socail-acc-text'>

                    <h2>More Inspiration on Instagram</h2>
                    <h3>@Wedmegood</h3>
                </div>
                    <button>Follow</button>
            </section>
            <section className='app-details'>
                <div>
                <h1>Get more Wedding Ideas</h1>
                <h3>Download the WedMeGood App now</h3>
                <div className='generate-app-link'>
                <p>Get a link to download the App</p>
                <input type="number" placeholder='Enter Mobile Number ' className='my-2' /><br />
                <button className='my-2'>Text me the download link</button>
                </div>
                </div>
                <div>
                    <img src="https://image.wedmegood.com/images/download-app-hand.png" alt="" />
                </div>
            </section>
            <section className='feature-WMG'>
                <div className='left'>
                    <h2>Share your own wedding to feature on WMG</h2>
                    <button>Submit Wedding </button>
                </div>
                <div className='right'>
                    <h2>Get more Wedding ideas in your indox</h2>
                    <input type="text" placeholder='Enter your email' />
                    <button>I Want More</button>
                </div>
            </section>
            <Footer />
        </>
    )
}
