import React from 'react'
import home from './home.css'
import { Navbar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0,0)
  }, []);
  let fun_loc = [
    {
      'img': 'https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/wedsta_dweb.jpg',
      'funName': 'WedSta',
      'location': 'WMG At Home. Family Makeup Services',
      'button': 'Know More'
    },
    {
      'img': 'https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/genie_dweb.jpg',
      'funName': 'Genie Services',
      'location': 'Plan your dream wedding in your budget',
      'button': 'Know More'
    },
    {
      'img': 'https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/venue_dweb.jpg',
      'funName': 'Venuw Booking Service',
      'location': 'Best Price Guaranteed',
      'button': 'Know More'
    },
    {
      'img': 'https://image.wedmegood.com/resized-nw/570X/uploads/wmg_services/mynt_dweb.jpg',
      'funName': 'Mynt',
      'location': 'Exclusive deals from 100+ preminum brands',
      'button': 'Know More'
    }
  ]
  let real_wedding = [{
    'img': 'https://image.wedmegood.com/resized/450X/uploads/images/99c7bf9dd483472a8878e5270c56b135realwedding/R+S-39.jpg?crop=267,363,1619,911',
    'name': 'Riya & Siddharth',
    'discription': 'Dreamy Engagement Simple Outfits & Elegant Decor!',
    'date': '19 April 2022'
  },
  {
    'img': 'https://image.wedmegood.com/resized/450X/uploads/images/c1d8234fa187471d98c6b73ce752617brealwedding/9DJ_6983.jpg?crop=139,617,848,477',
    'name': 'Mitali & Siddharth',
    'discription': 'Classic & Intimate Wedding With Customised Decor & Details',
    'date': '20 December 2022'
  },
  {
    'img': 'https://image.wedmegood.com/resized/450X/uploads/images/0b0cd133b2c645398821bd9863936d10realwedding/Wedding-199.JPG?crop=200,934,1630,917',
    'name': 'Ridhi & Simrranjit',
    'discription': 'Gorgeous Wedding With Royal Bridal & Groom Looks',
    'date': '28 October 2022'
  }
  ]
  let homegallery = [{
    'img': 'https://image.wedmegood.com/resized/300X/uploads/im_cat_image/36/bridal-lehenga.jpg',
    'name': 'Bridal Lehenga'
  },
  {
    'img': 'https://image.wedmegood.com/resized/300X/uploads/im_cat_image/4/outfits.jpg',
    'name': 'Outfits'
  },
  {
    'img': 'https://image.wedmegood.com/resized/300X/uploads/im_cat_image/37/blouse-designs.jpg',
    'name': 'Blouse Designs'
  },
  {
    'img': 'https://image.wedmegood.com/resized/300X/uploads/im_cat_image/38/sarees.jpg',
    'name': 'Wedding Sarees'
  },
  {
    'img': 'https://image.wedmegood.com/resized/300X/uploads/im_cat_image/33/mehndi.jpg',
    'name': 'Mehndi Designs'
  }
  ]
  let makeup = [
    {
      'img': "https://image.wedmegood.com/resized/450X/uploads/member/568989/1657926141_FaceApp_1657890041187__01.jpg?crop=6,465,2036,1145",
      'name': 'Saakshi MUA',
      'location': "Bridal Makeup,Wanowrie",
      'price': 'Rs.12000'
    },
    {
      'img': "https://image.wedmegood.com/resized/450X/uploads/member/394342/1588850545_SID_78191588253502220.jpg?crop=0,145,2048,1152",
      'name': 'KST Films',
      'location': "Wedding Photographers",
      'price': 'Rs.65000 per day'
    },
    {
      'img': "https://image.wedmegood.com/resized/450X/uploads/project/194001/1653377319_KART5178.jpg?crop=12,39,2024,1139",
      'name': 'The Merrymakers',
      'location': "Wedding Photographers,Ahmedabad",
      'price': 'Rs.81000 per day'
    },
    {
      'img': "https://image.wedmegood.com/resized/450X/uploads/project/150602/1629793752_IMG_20210824_134259.jpg?crop=3,707,1065,599",
      'name': 'Akash Mehandi',
      'location': "Bridal Mehandi",
      'price': 'Rs.31000 onwoards'
    },
  ]
  let Latest_blog = [{
    'img': 'https://image.wedmegood.com/resized-nw/500X300/wp-content/uploads/2014/08/88.jpg',
    'name': 'Riya & Siddharth',
    'discription': 'Its always interesting to see weddings of different cultures, and while so far our coverage of Nikahs has been limited to Pakistani brides whome we absolutely love, Im pretty excited to have our fir...',
    'date': '19 April 2022'
  },
  {
    'img': 'https://image.wedmegood.com/resized-nw/500X300/wp-content/uploads/2017/08/Peachesandblush11.jpg',
    'name': 'Mitali & Siddharth',
    'discription': 'If there was an award for the most interesting decor, this wedding would hands down, win it. The number of interesting ',
    'date': '20 December 2022'
  },
  {
    'img': 'https://image.wedmegood.com/resized-nw/500X300/wp-content/uploads/2017/03/ColorBlastDestinationWeddingRonakKomalCorinthians92.jpg',
    'name': 'Ridhi & Simrranjit',
    'discription': 'We see a ton of weddings every day and we will admit - there seems to be a slight lack of originality when it comes to bridal lehengas. ',
    'date': '28 October 2022'
  }
  ]
  let categories = [
    {
      "title": "Venues",
      "location": "Banquet Halls,Lawns / Farmhouses",
      "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/1/venues.jpg',
      'bgcolor': "rgb(216, 223, 252)"
    },
    {
      "title": "Makeup",
      "location": "Bridal Makeup,Family Makeup",
      "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/3/makeup.jpg',
      'bgcolor': "rgb(244, 213, 194)"
    },
    {
      "title": "Groom Wear",
      "location": "Sherwani,Wedding Suits/Tuxes",
      "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/5/groom-wear.jpg',
      'bgcolor': "rgb(223, 178, 173)"
    },
    {
      "title": "Planning & Decor",
      "location": "Wedding Planners,Decorators",
      "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/7/planning-decor.jpg',
      'bgcolor': "rgb(207, 205, 184)"
    },
    {
      "title": "Invites & Gifts",
      "location": "Invitations,Favors,Trousseau Packers",
      "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/9/invites-gifts.jpg',
      'bgcolor': "rgb(220, 247, 247)"


    },
    {
      "title": "Jewellery & Accessories",
      "location": "Jewellery,Flower Jewellery, Bridal Jewellery",
      "img": 'https://image.wedmegood.com/resized/250X/uploads/m_v_cat_image/11/jewellaries-accessories.jpg',
      'bgcolor': "rgb(229, 211, 189)"

    }]
  return (
    <>
      <Navbar />
      <section className='section-s1'></section>
      <section id="langingpage-banner">
        <div id="hero">
        </div>
        <div className='hero-filter'>
          <h3><strong>Your Wedding, Your Way</strong></h3>
          <h4>Find the best wedding vendors with thousands of trusted reviews</h4>
          <select className='select1'>
            <option>Select Vendor Type</option>
            <option>All Categories</option>
            <option>Wedding Venue</option>
            <option>Wedding Photographers</option>
            <option>Bridal Makeup</option>
            <option>Family Makeup</option>
            <option>Bridal Wear</option>
            <option>Groom Makeup</option>
          </select>
          <select className='select2'>
            <option>Select City</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Ahemdabad</option>
            <option>Hyderabad</option>
            <option>Mumbai</option>
            <option>Pune</option>
          </select>
          <button id="filter-btn">Get Started</button>
          <p>Popular Searches: Wedding Photographers in India | Bridal Makeup in india | Wedding Cards in India | Wedding Venues in India</p>
        </div>

      </section>
      <section className='parntdiv'>
        <section id="bridal-outfit" className='section-p1 section-m1 '>
        </section>
        <section id="popular-venue" className='section-p1' >
          <h3>Popular Venue Searches</h3>
          <div className='carousel'>
            <div className='carousel-img'>
              <div>
                <img src={require("../../assets/img/4-star-above-hotels.jpg")} alt="" />
              </div>
              <div>
                <h4>4 Star & Above Hotels</h4>
                <a href="#">Bodakdev | Bopal | Memnagar |</a>
                <a href="#">All Localities</a>
              </div>
            </div>
            <div className='carousel-img'>
              <div>
                <img src={require("../../assets/img/banquet-halls.jpg")} alt="" />
              </div>
              <div>
                <h4>Banquet Halls</h4>
                <a href="#">Bodakdev | Ghandhinagar | Thanltej |</a>
                <a href="#">All Localities</a>
              </div>
            </div>
            <div className='carousel-img'>
              <div>
                <img src={require("../../assets/img/hotel.jpg")} alt="" />
              </div>
              <div>
                <h4>Hotel</h4>
                <a href="#">Gandhinagar | Bodakdev | Thanltej |</a>
                <a href="#">All Localities</a>
              </div>
            </div>
          </div>
        </section>
        <section id='popular-search' className='section-p1'>
          <h3>Popular Searches</h3>
          <div id='popular-search-item'>
            <div>
              <div className='doing-small-img'>
                <img src={require('../../assets/img/popular-search/bridal-wear.jpg')} alt="" />
              </div>
              <h5>Bridal Wear</h5>
            </div>
            <div>
              <div className='doing-small-img'>
                <img src={require('../../assets/img/popular-search/mua.jpg')} alt="" />
              </div>
              <h5>Make Up</h5>
            </div>
            <div>
              <div className='doing-small-img'>
                <img src={require('../../assets/img/popular-search/photography.jpg')} alt="" />
              </div>
              <h5>Photography</h5>
            </div>
            <div>
              <div className='doing-small-img'>
                <img src={require('../../assets/img/popular-search/cards.jpg')} alt="" />
              </div>
              <h5>cards</h5>
            </div>
            <div>
              <div className='doing-small-img'>
                <img src={require('../../assets/img/popular-search/caterers.jpg')} alt="" />
              </div>
              <h5>caterers</h5>
            </div>
          </div>
        </section>
        <div className='d-flex justify-content-between '>
          <h3 className='section-p1 '>Wedding Categories</h3>
          <Link to="../Weddingcategories">
            <h3 className='section-p1 genie-txt'>View All Categories&gt;</h3>
          </Link>

        </div>
        <section id="wedding-categories" className='section-p1'>
          {categories.map((category) => {
            return (<div id="categories-1" style={{ backgroundColor: category.bgcolor }}>
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
        <section className='section-p1 d-flex'>
          {/* <div id="accordion" className='w-50 '>
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                  </button>
                </h5>
              </div>

              <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor  synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit,  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                  </button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                </div>
              </div>
            </div>
          </div>
          <div id="accordion" className='w-50'>
            <div class="card">
              <div class="card-header" id="headingfour">
                <h5 class="mb-0">
                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapsefour" aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                  </button>
                </h5>
              </div>

              <div id="collapsefour" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingfive">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                  </button>
                </h5>
              </div>
              <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingsix">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                  </button>
                </h5>
              </div>
              <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </section>
      <h3 className='section-p1'>WMG Inhouse Services</h3>
      <section id='function-location' className='section-p1'>
        {fun_loc.map((functionlocation) => {
          return (
            <>
              <div id='function-card'>
                <div className='doing-small-img-WMG'>
                  <img src={functionlocation.img} alt="" />
                </div>
                <p></p>
                <p><strong>{functionlocation.funName}</strong></p>
                <p>{functionlocation.location}</p>
               <Link to="../Wedsta"> <button id="btn">{functionlocation.button}</button></Link>
              </div>
              <br />
            </>
          )
        })}
      </section>
      <section className='section-p1 '>
        <div id='app_details'>
          <div>
            <h3>Download The WedMeGood Mobile App Today!</h3>
            <div className='d-flex'>
              <p className='mx-3'> Save Weddig Ideas</p>
              <p className='mx-3'>Shortlist Vendors</p>
              <p className='mx-3'>Get Fress Wedding Checklist</p>
            </div>
            <h3>You Will receive an SMS witth a link to download the App</h3>
            <input type="text" id='' disabled className='country-format' placeholder='+91' name="" />
            <input type="text" id='' className=' mx-3' placeholder='Enter your Number..' name="" />
            <br />
            <br />
            <button>Download The App</button>
          </div>
          <div>
            <img src='https://image.wedmegood.com/resized/500X/images/banner/download_app.jpg' alt="" />
          </div>
        </div>
      </section>
      <h3 className='section-p1'>Real Wedding Stories</h3>
      <section id='realWedding' className='section-p1 '>
        {real_wedding.map((realwedding) => {
          return (
            <div class="card">
              <div className='overflow-hidden'>
                <img src={realwedding.img} class="card-img-top" />
              </div>
              <div class="card-body">
                <h4>{realwedding.name}</h4>
                <p>{realwedding.discription}</p>
                <p>{realwedding.date}</p>
              </div>
            </div>
          )
        })}
      </section>
      <h3 className='section-p1'>Gallery To Look For</h3>
      <section id='homegallery' className='section-p1'>
        {homegallery.map((homegal) => {
          return (
            <>
              <div class="card overflow-hidden">
                <img src={homegal.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{homegal.name}</h5>
                </div>
              </div>
            </>
          )
        })}

      </section>
      <h3 className='section-p1'>Featured Vendors</h3>
      <section id="Featuredvendor" className='section-p1'>
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
      <h3 className='section-p1'>Latest Blogs</h3>
      <section id='latestblogs' className='section-p1'>
        {Latest_blog.map((realwedding) => {
          return (
            <div class="card">
              <img src={realwedding.img} class="card-img-top" />
              <div class="card-body">
                <h6>{realwedding.name}</h6>
                <p>{realwedding.discription}</p>
                <p>{realwedding.date}</p>
              </div>
            </div>
          )
        })}
      </section>
      <Footer />
    </>
  )
}
