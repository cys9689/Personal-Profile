import React,{useState} from "react";
import Experience from "./Experience";
import Home from "./Home";
import Project from "./Project";
import styled from "styled-components";

const Button =styled.button `
    color:#666666;
    background-color: transparent;
    font-size: 14px;
    font-weight:bold;
    border:none;
    padding:5px 15px;
    outline:0;
    cursor:pointer;
    &:hover{
        color: #337347;
    }    
    `
  
const types = ['Home','Experience','Project']

function ToggleGroup(){
    const [active, setActive] = useState(types[1])
    return <div>
        {types.map(type =>(
            <ButtonToggle
            active={ active === type}
            onClick={()=>setActive(type)}
            key = {type}
            >
                {type}
            </ButtonToggle>
        ))}
        <div>
            {active===types[0] && <Home/>}
            {active===types[1] && <Experience/>}
            {active===types[2] && <Project/>}
        </div>
    </div>
}


const ButtonToggle =styled(Button)`
    color:#666666;
    ${({active}) => active && `
        color: #337347;
        border-bottom: solid #337347;
    `}
`
export default function Navbar(){

    return(
        <div>
            <nav className="navigation--bar">
                <ToggleGroup />
            </nav>
        </div>
    )
}