import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import photos from './photos.css'
import { Footer } from "../Footer/Footer"
export const Photos = () => {
  const photos_catgr = [
    {
      'img': 'https://image.wedmegood.com/resized/200X/uploads/project/65697/1572259104_Pic__2_.jpg',
      'type': 'All Categories'
    }, {
      'img': 'https://image.wedmegood.com/resized/200X/uploads/im_cat_image/36/bridal-lehenga.jpg',
      'type': 'Bridal Lehenga'
    }, {
      'img': 'https://image.wedmegood.com/resized/200X/uploads/im_cat_image/4/outfits.jpg',
      'type': 'Outfits'
    }, {
      'img': 'https://image.wedmegood.com/resized/200X/uploads/im_cat_image/37/blouse-designs.jpg',
      'type': 'Blouse Designs'
    }, {
      'img': 'https://image.wedmegood.com/resized/200X/uploads/im_cat_image/38/sarees.jpg',
      'type': 'Wedding Sarees'
    }, {
      'img': 'https://image.wedmegood.com/resized/200X/uploads/im_cat_image/33/mehndi.jpg',
      'type': 'Mehndi Designs'
    }, {
      'img': 'https://image.wedmegood.com/resized/200X/uploads/im_cat_image/33/mehndi.jpg',
      'type': 'Mehndi Designs'
    }, {
      'img': 'https://image.wedmegood.com/resized/200X/uploads/im_cat_image/33/mehndi.jpg',
      'type': 'Mehndi Designs'
    },
  ]
  return (
    <>
      <Navbar />
      <div className='section-p4'>
        <div>
          <h5 className='faid-tx'>Home</h5>
          <h5>Wedding Photos, Latest Trends & Ideas (36000+ photos)</h5>
          <p>Browse from latest Wedding Photos,Ideas& Inspiration</p>
          <div className='d-flex flex-nowrap one'>
            {photos_catgr.map((catg) => {
              return (
                <>
                
                  <div className="card cardss" >
                    <img src={catg.img} className="card-img-top" alt="..." />
                    <p className="card-text genie-txt mx-2 ">{catg.type}</p>
                    <div className="card-body">
                    </div>
                  </div>
                </>
              )
            })}


          </div>
          <div className='d-flex justify-content-between'>
            <div>
              <h4>Sort: </h4> <span>Recent</span><span className='genie-txt'>Trending</span>
            </div>
            <div>
              <input type="text" placeholder='Search Photos & Ideas...' />
            </div>
          </div>
        </div>
        <div className=''>

          <div className='columns'>
          <div  class="" data-bs-toggle="modal" data-bs-target="#exampleModalll">
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/99d9a0c11be94990ab92d30600bb15carealwedding/0A5A9313.jpg" alt="" />
            </div>
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/42e2760f31404cb2a3b7b029c919399erealwedding/0A5A0292.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/134b5bf7e2e3432e90b71d27712918e0realwedding/0A5A0585.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/c13f5c3be587404aab751ef7f1e888acrealwedding/AKW-144.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/88926fa47aa54aefbb2a0d3fb83907b2realwedding/DEV_3085.JPG" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/f474f9570df3485f9fb0437cd617d29crealwedding/paromaweddimg_001.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/270ea64bea394a6e911f881b26d05feerealwedding/9.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/f9eaebefdb984f81a3f7982f3417fbeerealwedding/2(9).jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/083abd5966d04b6daf5cd7bff14ff7d6realwedding/03_MANOGNA_KARTHIK_WEDDING-4507-ADI.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/project/138316/1622189105_PicsArt_05_25_12.11.23.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/member/178758/1620312041_SSM_732.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/3de667e0eca24f50834bb7df1d65f23brealwedding/ASHU4376.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/f474f9570df3485f9fb0437cd617d29crealwedding/paromaweddimg_001.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/270ea64bea394a6e911f881b26d05feerealwedding/9.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/f9eaebefdb984f81a3f7982f3417fbeerealwedding/2(9).jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/083abd5966d04b6daf5cd7bff14ff7d6realwedding/03_MANOGNA_KARTHIK_WEDDING-4507-ADI.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/project/138316/1622189105_PicsArt_05_25_12.11.23.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/member/178758/1620312041_SSM_732.jpg" alt="" />
            <img src="https://image.wedmegood.com/resized/450X/uploads/images/3de667e0eca24f50834bb7df1d65f23brealwedding/ASHU4376.jpg" alt="" />
          </div>

        </div>
      </div>
      
      <div class="modal fade" id="exampleModalll" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
              {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
              {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            <div class="modal-body">
              <img src="https://image.wedmegood.com/resized/450X/uploads/images/99d9a0c11be94990ab92d30600bb15carealwedding/0A5A9313.jpg" alt="" />
            </div>
            {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

