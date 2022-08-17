import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


export default function App() {
    return (
        <div className="Page">
        <div className="container--first">
            <Hero />
            <Navbar/>
        </div>
        </div>
    )
}