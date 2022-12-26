import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Gridview } from '../Gridview/Gridview'
import { Navbar } from '../Navbar/Navbar'
import { Theamview } from '../Theamview/Theamview'
export const Breedcrup = (props) => {
    const [isGridView, setisGridView] = useState(false);
    return (
        <>
            <Navbar />
            <div className='bg-color'>

                <div className='section-p2 '>
                    <p className='faid-txt'>Home &gt; Venodrs &gt; Wedding Venues</p>
                    <h5>Wedding Venues in Pune</h5>
                </div>
                <div className='search-help-genie '>
                    <div>
                        <p>Showing 175 results as per your search criteria</p>
                    </div>
                    <div className='d-flex justify-content-around'>
                       <Link to="../Genieservices"> <div>
                            <button className='gine-btn'>
                                <img src="https://images.wedmegood.com/images/icons/genie_icon.svg" alt="" />
                                Need Help? <span className='mx-1 genie-txt'>WMG Genie</span>  can help out! <i className='fa fa-caret-down icon margin-l-10 mx-1'></i> </button>
                        </div></Link>
                        <div className='genie-search'>
                            <input type="text" placeholder='search wedding venues' />
                        </div>
                    </div>
                    <div className='listgrid d-flex'>
                        <div onClick={() => setisGridView(false)}>
                            <img src="https://images.wedmegood.com/react-frontend-v4/static/media/ListColoured.81109c0b.svg" alt="" />
                            <span className= {isGridView?"color-txt mx-1":"mx-1"}>List</span>
                        </div>
                        <div onClick={() => setisGridView(true)} className="mx-3">
                            <div to="../Gridview">
                                <img src="https://images.wedmegood.com/react-frontend-v4/static/media/GridBlackIcon.3ef07762.svg"  className='mx-1' alt="" />
                                <span className= {isGridView?"color-txt mx-1":"mx-1"} >Grid</span></div>  
                        </div>
                    </div>
                </div>

                {isGridView ? <Gridview /> : <Theamview />}


            </div>
        </>
    )
}
