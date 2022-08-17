import React from "react"
import ucbenglogo from "../images/ucbeng_logo.png"
import msuedulogo from "../images/msuedu_logo.png" 
import bilogo from "../images/BI_logo.png"
import tcilogo from "../images/tci_logo.jpeg"
import ExpMoreLess from "./ExpMoreLess"

export default function Experirence(){
    return (
        <div>
            <div className="container--education">
                <h1 className="education--title">Education</h1>
                <div className="education--box">
                    <img className="education--img" src={ucbenglogo} alt="ucbenglogo"/>
                    <div className="education--info">
                        <h3 className="education--info--title">UC Berkeley College of Engineering</h3>
                        <p className="education--info--degree">Master's degree, Bioengineering</p>
                        <p className="education--info--time">2018-2019</p>
                    </div>
                </div>
                <hr className="line"></hr>
                <div className="education--box">
                    <img className="education--img" src={msuedulogo} alt="msuedulogo"/>
                    <div className="education--info">
                        <h3 className="education--info--title">Michigan State University </h3>
                        <p className="education--info--degree">Bachelor's degree, Chemical of Engineering</p>
                        <p className="education--info--time">2014-2018</p>
                    </div>
                </div>
                
            </div>

            <div className="container--education">
                <h1 className="education--title">Experience</h1>
                <div className="education--box">
                    <img className="education--img" src={tcilogo} alt="tcilogo"/>
                
                    <div className="education--info">
                            <h3 className="education--info--title">Engineer </h3>
                            <p className="education--info--degree">TCI Gene., Ltd. 大江基因 · Full-time</p>
                            <p className="education--info--time">Mar 2021 - Present · 1 yr 6 mos</p>
                            <p className="education--info--time">Neihu District, Taipei City, Taiwan</p>
                    </div>
                </div>
                <p className="experience--description--paragraph">
                    As the main software developer of the department, responsible for building different data
                    pipelines to help researchers within the company reduce repetitive work. The content of the 
                    project includes the COVID-19 result interpretation program, the departmental case application 
                    webpage, and the experimental data analysis web application.
                </p>
                <ExpMoreLess>
                    <ul className="experience--description--lst">
                        <li>Replacing  the manual operation in report generation by building a web app for automating and generating client report on user-centered design.</li>
                        <li>Building Front-end to support applicant in case submission using PHP,HTML,CSS,JavaScript and Apache</li>
                        <li>Performing data analysis and creating data pipeline from ETL to analyze, design and develop database schema with Amazon AWS servies</li>
                    </ul>
                </ExpMoreLess>

                <hr className="line"></hr>

                <div className="education--box">
                    <img className="education--img" src={bilogo} alt="bilogo" />
                
                    <div className="education--info">
                            <h3 className="education--info--title">Engineer </h3>
                            <p className="education--info--degree">TCI Gene., Ltd. 大江基因 · Full-time</p>
                            <p className="education--info--time">Mar 2021 - Present · 1 yr 6 mos</p>
                            <p className="education--info--time">Neihu District, Taipei City, Taiwan</p>
                    </div>
                </div>
                <div className="experience--descrption">
                    <p className="experience--description--paragraph">
            
                        As the main software developer of the department, responsible for building different data
                        pipelines to help researchers within the company reduce repetitive work. The content of the 
                        project includes the COVID-19 result interpretation program, the departmental case application 
                        webpage, and the experimental data analysis web application.
                
                    </p>
                        <ExpMoreLess>
                            <ul className="experience--description--lst">
                                <li>Replacing  the manual operation in report generation by building a web app for automating and generating client report on user-centered design.</li>
                                <li>Building Front-end to support applicant in case submission using PHP,HTML,CSS,JavaScript and Apache</li>
                                <li>Performing data analysis and creating data pipeline from ETL to analyze, design and develop database schema with Amazon AWS servies</li>
                            </ul>
                        </ExpMoreLess>
                </div>
            </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        </div>
    )

}