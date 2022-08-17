import React from 'react'
import Profolio from "../images/ProfolioPicture-Sphere.png"
import Coverphoto from "../images/cover-photo.jpeg"
import ucblogo from "../images/ucb_logo.png"
import msulogo from "../images/msu_logo.png"
import bilogo from "../images/BI_logo.png"
import tcilogo from "../images/tci_logo.jpeg"
import ucbenglogo from "../images/ucbeng_logo.png"



export default function Hero(){
    return( 
        <div>
            <nav className="navigation--first">
                <div>
                <img src = {Profolio} className="profolio" alt="profolio"/>
                <img src = {Coverphoto} className="cover" alt="cover"/>
                </div>
                <div className="Abstract">
                    <p className="abstract--name">Yu-Shuo(Nick) Chen</p>
                    <p className="abstract-description">Enthusastic coder , beliver of data can change the world</p>
                    <p className="abstract-location">Internet • Taipei, Taiwan • Engineer at Biotech company</p>
                    <div >
                        <img src={bilogo} className="abstract--img_1" alt="bilogo"/>
                        <img src={msulogo} className="abstract--img_2" alt="msulogo"/>
                        <img src={ucblogo} className="abstract--img_3" alt="ucbloog"/>
                        <div className="abstract--info">
                            <p >104 followers • 101 connection</p>
                        </div>
                    </div>
                    <div className="button--lst">
                        <button className="follow--button">+ Follow</button>
                        <button className="visit--button"> Visit Website</button>
                        <button className="more--button">+ More</button>

                    </div>
                    
                </div>
                <div className="Exp">
                    <div className="exp--info">
                        <img src={tcilogo} className="exp--img" alt="tcilogo"/>
                        <p>TCI Gene., Ltd. 大江基因</p>
                    </div>
                    <div  className="exp--info">
                        <img src={ucbenglogo} className="exp--img" alt="ucbenglogo" />
                        <p>UC Berkley College of Engineering</p>
                    </div>
                </div>
            </nav>
            <hr></hr>
        </div>

        
    )
    }