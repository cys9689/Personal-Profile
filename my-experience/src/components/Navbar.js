import React from 'react'
import Experirence from './Experience';
import Experience from "./Experience"
import Home from "./Home"


const displaycomponent = false;
export default function Navbar(){
    const [count,setCount]=React.useState(3)
    function first(){
        setCount(prevCount => 1)
    }
    function second(){
        setCount(prevCount => 2)
    }
    function third(){
        setCount(prevCount => 3)
    }
    function fourth (){
        setCount(prevCount => 4)
    }
    return(
        <div>
            <nav className="navigation--bar">
                <button onClick={first}>Home</button>
                <button onClick={second}>About</button>
                <button onClick={third}>Experience</button>
                <button onClick={fourth}>Projects</button>
            </nav>
            {count==1 ? <Home/> : count==2 ? <Experience/> : count==3 ? <Experirence/>: <Experience/>}
        </div>
    )
}