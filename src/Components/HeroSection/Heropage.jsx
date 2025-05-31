import React from 'react'
import './Heropage.css'
import Flipkar from '../../assets/images/Logo/Flipkar.jpeg';
import Amazon from '../../assets/images/Logo/Amazon.jpg';
import Shose from '../../assets/images/Logo/Shose.png';

function Heropage() {
    return (
        <>
            <div className='hero mt-5'>
                <div className="hero-content">
                    <div className="hero-text mt-5">
                        <h1>YOUR FEET
                            DESERVE
                            THE BEST OF THE BEST</h1>
                        <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.<br />
                            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    </div>
                    <div className="hero-buttons">
                        <button className='btn'>Shop Now</button>
                        <button className='btn1'>Category</button>
                    </div>
                    <div className="availability">
                        <p>Also Available On</p>
                        <div className="stores">
                            <img src={Flipkar} alt="Flipkart" />
                            <img src={Amazon} alt="Amazon" />
                           
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={Shose} alt="Premium Shoes" />
                </div>
            </div>
        </>
    )
}

export default Heropage
