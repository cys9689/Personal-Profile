import React from 'react'
import pictureofme from '../images/Pictureofme.png'
export default function Home(){
    return (
        <>
        <div className="container--education">
            <h1 className="education--title">About</h1>
            <div className="container--about">
                <img className="container--about--image" src={pictureofme} alt="pictureofme"/>
                <p className="container--about--description">  
                 Hello,
                 <br></br>
                 My name is Nick, and I am a programmer passionate about data science and software development. I received my master of engineering degree in 2019 from the University of California - Berkeley. I have two years of industry experience in process optimization as a data engineer by designing and implementing multiple data pipelines and building a website with a user interface and functionality. As a learner, I joined UC Berkley Data Science Bootcamp and received a certificate in 2020. I conducted several machine learning projects, including weather prediction and credit card fraud determination using SVM and logistic regression for classification. 
                Besides work and academics, I am an outdoor person who likes to do many outdoor activities like hiking and snorkeling. Doing sports allows me to relieve the stress and be prepared for my next challenge. Lastly, I am a quick learner and love to explore the unknown field. My goal is to utilize data to drive decisions in industry, helping human society to progress.</p>
            </div>

        </div>)
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </>
    )
}