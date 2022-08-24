import React from 'react';
import styled from "styled-components";

const Button =styled.button `
        background-color: #ffffff;
        color:#717171;
        font-size:30px;
        font-weight: 100;
        border:none;
        position:absolute;
        right:3%;
        margin-top:1%;
        cursor:pointer;
       `


const Popup = props =>{
    return (
        <div className="popup--box">
            <div className="box">
                <Button onClick={props.handleClose}>x</Button>
                {props.content}
            </div>
        
        
        </div>       
        )
}


export default Popup;