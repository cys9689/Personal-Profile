import React,{useState} from 'react'
import Profolio from "../images/ProfolioPicture-Sphere.png"
import Coverphoto from "../images/cover-photo.jpeg"
import Output from "../images/outputicon.png"
import ucblogo from "../images/ucb_logo.png"
import msulogo from "../images/msu_logo.png"
import bilogo from "../images/BI_logo.png"
import tcilogo from "../images/tci_logo.jpeg"
import ucbenglogo from "../images/ucbeng_logo.png"
import styled from "styled-components";
import Popup from "./Popup";
import link from "../images/link.png"
import email from "../images/email.png"
import linkdin from "../images/linkdin.png"
const theme={
    follow:{
        background_color:'#2A66BC',
        color:'white',
        hover: '#014182',
        width:'130px',
        border:'none'
    },
    visit:{
        background_color:'#FFFFFF',
        color:'#2A66BC',
        hover:'#e4f0fe',
        width:'130px',
        border:'2px solid #2A66BC'
    },
    info:{
        background_color:'#FFFFFF',
        color:'#696969',
        hover: "#eeeeee",
        width:'60px',
        border:'2px solid #696969'
    }
}

const Button =styled.button `
    background-color:${props => theme[props.theme].background_color};
    border:${props=>theme[props.theme].border};
    color:${props=>theme[props.theme].color};
    width:${props=>theme[props.theme].width};
    height:33px;
    border-radius:99px;
    font-size: 14px;
    font-weight:bold;
    padding:5px 5px;
    margin:15px 3px;
    outline:0;
    cursor:pointer;
    transition: ease background-color 300ms;
    &:hover{
        background-color: ${props => theme[props.theme].hover};
    }    
    `

Button.defaultProps={
    theme:'follow'
}


export default function Hero(){
    const [isOpen,setIsOpen] =useState(false);
    const togglePopup =() =>{
        setIsOpen(!isOpen);
    }
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
                    <div className="abstract--info">
                        <img src={bilogo} className="abstract--img_1" alt="bilogo"/>
                        <img src={msulogo} className="abstract--img_2" alt="msulogo"/>
                        <img src={ucblogo} className="abstract--img_3" alt="ucbloog"/>
                        <p className="abstract--info--paragraph">104 followers • 101 connection</p>
                    </div>
                    <div className="button--lst">
                        <a href="https://www.linkedin.com/in/nickchen89/">
                            <Button>+ Follow</Button>
                       </a>
                       <a href="https://www.linkedin.com/in/nickchen89/">
                            <Button theme="visit"> <img src={Output} className="output--icon" alt="output--icon"/>Visit Website
                            </Button>
                       </a>
                            <Button onClick={togglePopup} theme="info"> Info</Button>
                        {isOpen && <Popup handleClose={togglePopup}
                                content={<div>
                                        <p className="popup--name">Yu-Shuo(Nick) Chen</p>
                                        <hr className="popup--line"></hr>
                                        <p className="popup--name">Contact Info</p>
                                            <div className="popup--container">
                                                <img src={linkdin} alt="linkdinIcon"/>
                                                <div className="popup--subcontainer">
                                                    <p>Your Profile</p>
                                                    <a href="https://linkedin.com/in/nickchen89">https://linkedin.com/in/nickchen89</a>
                                                </div>
                                            </div>

                                            <div className="popup--container">
                                                <img src={link} alt="WebsiteIcon"/>
                                                <div className="popup--subcontainer">
                                                    <p>Website</p>
                                                    <a href="https://github.com/cys9689">https://github.com/cys9689</a>
                                                </div>
                                            </div>

                                            <div className="popup--container">
                                                <img src={email} alt="emailicon"/>
                                                <div className="popup--subcontainer">
                                                    <p>Email</p>
                                                    <a href="mailto:chenyus3@berkeley.edu">chenyus3@berkeley.edu</a>
                                                </div>
                                            </div>
                                        </div>
                                    }/>}
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
            <hr className="first--line"></hr>
        </div>

        
    )
    }