import React from 'react'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import allfunctionphotos from "./allfunctionphotos.css"
export const Allfunctionphotos = () => {
    const all_function_images = [
        {
            img: 'https://image.wedmegood.com/resized/450X/uploads/images/c000bbaf39434d2ea6a558c36be181a5realwedding/Ombrebyhj_CT-09831.jpg?crop=212,305,1619,911'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/55fc35babf7143f7b21f50c6f19a81fbrealwedding/Ombrebyhj_CT-09795.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/47745c5be7d34484b519f3ce70f2feb7realwedding/Ombrebyhj_CT-09780.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/d0c690bbce4b4ceca791ef298f229a00realwedding/Ombrebyhj_CT-09716.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/56adc54a5ad14fbb8ae0bb0504523a86realwedding/Ombrebyhj_CT-09560.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/94c20692ba7d4d69a1d4dc68ce7972b6realwedding/Ombrebyhj_CT-09555.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/ee3b995e9bd6427399bc6694f055b40crealwedding/Ombrebyhj_CT-09374.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/e3f13110deb44afaba9039ddb70bd233realwedding/Ombrebyhj_CT-09352.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/6dfb6ba4134e4c47b18b94cd0c4caef5realwedding/Ombrebyhj_CT-07869.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/64db878499f14920bc87d976992a3df5realwedding/Ombrebyhj_CT-07361.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/5160a878ec87447dbbbd57e96ec7a1f3realwedding/Ombrebyhj_CT-07320.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/149813e879af462bba3416061a478c37realwedding/Ombrebyhj_CT-2397.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/e870c8835a9a4607b86c5a4cd15c0b00realwedding/Ombrebyhj_CT-2193.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/9ee64029ddc1485e9e98ba0f93e9f921realwedding/Ombrebyhj_CT-0731.jpg'
        }, {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/c1460a7e77ee478a91f65ad89aad82d5realwedding/Ombrebyhj_CT-09775.jpg'
        }, {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/6dfb6ba4134e4c47b18b94cd0c4caef5realwedding/Ombrebyhj_CT-07869.jpg'
        }
    ]
    const Top_function_images = [

        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/ee3b995e9bd6427399bc6694f055b40crealwedding/Ombrebyhj_CT-09374.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/e3f13110deb44afaba9039ddb70bd233realwedding/Ombrebyhj_CT-09352.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/149813e879af462bba3416061a478c37realwedding/Ombrebyhj_CT-2397.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/e870c8835a9a4607b86c5a4cd15c0b00realwedding/Ombrebyhj_CT-2193.jpg'
        },
        {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/9ee64029ddc1485e9e98ba0f93e9f921realwedding/Ombrebyhj_CT-0731.jpg'
        }, {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/c1460a7e77ee478a91f65ad89aad82d5realwedding/Ombrebyhj_CT-09775.jpg'
        }, {

            img: 'https://image.wedmegood.com/resized/450X/uploads/images/6dfb6ba4134e4c47b18b94cd0c4caef5realwedding/Ombrebyhj_CT-07869.jpg'
        }
    ]
    const more_options = [
        {
            img: '',
            title: "Its An Affair",
            work: 'Decorators',
        }, {
            img: '',
            title: "Miss Beyond Beauty",
            work: 'Bridal Makeup',
        }, {
            img: '',
            title: "Gallops",
            work: 'Venues',
        }, {
            img: '',
            title: "Four Seasons Hotel",
            work: 'Venues',
        }, {
            img: '',
            title: "Kunal Rawal",
            work: 'Groom Wear',
        }, {
            img: '',
            title: "Ombre by Harsheen Jammu",
            work: 'Photographers',
        }
    ]
    return (
        <>
            <Navbar />
            <section className='section-p1'>
                <div className='faid-txt'>
                    Home &gt; Real Wedding &gt; Chahel and Tanay
                </div>
                <div id='allfunction-background'>
                    <img src="https://image.wedmegood.com/resized/1000X/uploads/images/c000bbaf39434d2ea6a558c36be181a5realwedding/Ombrebyhj_CT-09831.jpg?crop=212,305,1619,911" alt="" />
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='name-date'>
                        <h5>Chahel</h5>
                        <img src="https://media.istockphoto.com/id/176830145/photo/wedding-rings.jpg?s=612x612&w=0&k=20&c=AeZdAkKLzyCHwQdj4A0GPfwyZumaOJa0Z2jrDt_TRok=" alt="" />
                        <h5>Tanay</h5>
                        <hr />
                        <p>Mumbai</p>
                        <p>Fri Dec 02 2022</p>
                    </div>
                    <div className='btn-div'>
                        <button>View Tagged Vendors (9)</button>
                    </div>
                </div>
                <hr />
                <section className='all-functions'>
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All Functions</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Top Photos</button>

                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <p className='all-fun-photos-p'>Wedding(22) Sangeet / Cocktail (11)</p>
                            <div className='row frame '>
                                {all_function_images.map((data) => {
                                    return (
                                        <>
                                            <img src={data.img} alt="" />
                                        </>
                                    )
                                })}
                                <button>View All</button>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <p className='all-fun-photos-p'>Main Photos Off All Functions</p>
                            <div className='row frame '>
                                {Top_function_images.map((data) => {
                                    return (
                                        <>
                                            <img src={data.img} alt="" />
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='option-below-all-fun'>
                    <h4 className='my-3'> Tagged Vendors </h4>
                  <Link to="../Breedcrup">  <div className='d-flex '>
                        {more_options.map((data) => {
                            return (<>
                                <div className='few-details-card'>
                                    <div>
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div>
                                        <h6>{data.title}</h6>
                                        <h6 className='faid-txt'>{data.work}</h6>
                                        <p className='genie-txt'>Read Review</p>
                                    </div>
                                </div>
                            </>)
                        })}
                    </div></Link>

                </section>
            </section>
            <Footer />

        </>
    )
}
