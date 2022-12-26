import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import blogdetails from "./blogdetails.css"
import { Footer } from "../Footer/Footer"
export const Blogdetails = () => {
  const data = [

    {
      title: "Clean face, thick liner, bold brows and bright red lips",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/02/1512547565__DSC4656.jpg",
      by: "Image via YOU by Poonam Kotecha",
      disc: "Who would've thought makeup like this would work with a mint pastel outfit like that one? But it works!"
    },
    {
      title: "Shimmery nude eyes with glossy peach lips",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/02/1498472549__9_.jpg",
      by: "Image via Cupcake Productions★ 4.7",
      disc: "So pretty and dainty- this is one of our fave bridal looks for the engagement!"
    },
    {
      title: "Smokey matte brown eyes with MLBB ",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/02/16123894_1253067018080954_7283868465016864768_n.jpg",
      by: "Image via Morvi Images Photography",
      disc: "Taking natural nude makeup to another level, this one is so gorgeous and understated!"
    },
    {
      title: "Shimmery silver eyes with soft mauve lips ",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/02/1511764041_BeautyPlus_20171126221456_save.jpg",
      by: "Image via Make-up by Afsha Rangila",
      disc: "Glam to the core, this look is for brides who want to shine!"
    },
    {
      title: "Bronzed look with highlighter on cheeks",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/02/1510140414_IMG_20171108_WA0011.jpg",
      by: "Image via Jackson James Photography",
      disc: "So sultry and amazing for dusky brides- gorgeous!"
    },
    {
      title: "Smokey eyes with magenta lips",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/02/1470664256_13914019_1053792594675130_5470139609359601305_o-11.jpg",
      by: "Image via Raaga and Paul's Engagement ",
      disc: "A pretty look for a pastel outfit, we love that shade of magenta!"
    },
    {
      title: "Natural-looking no-makeup look",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/02/1518791670_1516797202_ANKITA_VEER___152_16.jpg",
      by: "Image via Ankita & Veer (Delhi)",
      disc: "Yup, looks almost like a no-makeup look, but still pretty!"
    },
    {
      title: "Smokey eyes, nude lips",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/02/1494396439_2.jpg",
      by: "Image via Dhrumil & Anusha (Muscat) and Vipin Photography",
      disc: "Smokey eyes and nude lips can never fail you if done well!"
    },
    {
      title: "Soft pink makeup look",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/02/1511215847_image8037.jpg",
      by: "Image via Tamanna Rooz",
      disc: "Another super pretty engagement look- love it!"
    },
    {
      title: "Gold eyes, bold brows and lips",
      img: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2018/02/1489994939_6278ccfe_4ecf_47d3_b920_ff09c02e5c17.jpeg",
      by: "Image via Makeup by Nandini Advani",
      disc: "Not for the faint-hearted bride, if you can carry off bold lips, we say go for it!"
    },
  ]
  return (
    <>
      <Navbar />
     
        <div className='flex-row logos my-5'>
          <img src="https://images.wedmegood.com/images/fb-icon.png" className='my-3' alt="" /> <br />
          <img src="https://images.wedmegood.com/images/twitter-icon-blog.png" className='my-3' alt="" /> <br />
          <img src="https://images.wedmegood.com/images/pinsharewmg.png" className='my-3' alt="" />
        </div>
        <div className="container">
          <div className='blog-details'>
            <h3>Best Engagement Makeup Looks We Spotted on Real Brides!</h3>
            <p className='my-5'>BY Sakshi | 26 Feb, 2018 | 40424 views | 2 min read</p>
            <h6 className='faid-txt'>From pretty and dainty to bold and glam, we've spotted all kinds of makeup looks on brides for their engagement, and if you have yours coming up and are confused about what look to go with, here's some help! Yep, we've put together some of the prettiest engagement makeup looks we spotted on Real Brides, and sigh! they're all so so gorgeous! <br /> </h6>
            {data.map((enterdata) => {
              return (
                <>
                  <h6><strong className='genie-txt display-1'>{enterdata.title}</strong></h6>
                  <img src={enterdata.img} alt="" />
                  <h5 className='my-3 genie-txt'>{enterdata.by}</h5>
                  <h5 className='my-3'>{enterdata.disc}</h5>
                </>
              )
            })}

          </div>
        </div>

      <Footer />
    </>
  )
}
