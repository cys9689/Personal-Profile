import React from "react"
import result1 from "../images/result1.png"
import result2 from "../images/result2.png"
export default function Project(){
    return (
        <div>
            <div className="container--education">
                <h1 className="education--title">Project</h1>
                <div className="container--project">
                    <p className="container--project--overview">Project Overview</p>
                    <hr className="line"></hr>
                    <p className="container--project--paragraph">&nbsp;&nbsp;&nbsp;&nbsp;In 2019, more than 19 million Americans had at least one unsecured personal loan. Personal lending is growing faster than credit card, auto, mortgage, and even student debt. With such incredible growth, FinTech firms are storming ahead of traditional loan processes. By using the latest machine learning techniques, 
                        these FinTech firms can continuously analyze large amounts of data and predict trends to optimize lending.</p>
                    <p className="container--project--paragraph">&nbsp;&nbsp;&nbsp;&nbsp;In this module, we used Python to build and evaluate several machine learning models to predict credit risk. Being able to predict credit risk with machine learning algorithms can help banks and financial institutions predict anomalies, reduce risk cases, monitor portfolios, 
                    and provide recommendations on what to do in cases of fraud.</p>
                    <p className="container--project--overview">Instructions</p>

                    <hr className="line"></hr>
                    <p className="container--project--paragraph">
                    &nbsp;&nbsp;&nbsp;&nbsp;this project use the imbalanced-learn library to resample the data and build and evaluate logistic regression classifiers using the resampled data. The datasets were inside of the challenge-resources file. This project include two parts: Sampling and Ensemble Learners. Credit risk is an inherently unbalanced classification problem, as the number of good loans easily outnumber the number of risky loans. Therefore, we’ll need to employ different techniques to train and evaluate models with unbalanced classes. 
                    we use imbalanced-learn and scikit-learn libraries to build and evaluate models using resampling.
                    </p>
                    <p className="container--project--overview">Datasets</p>
                    <hr className="line"></hr>
                    <p className="container--project--paragraph">  &nbsp;&nbsp;&nbsp;&nbsp;The dataset contains the 2019 financial information for individual. Columns include the loan amount,
                         interest rate, home ownership, annual income, loan status.... etc. Overall, we wants to use this information to see does people consider as a potential credit risk person.</p>
                
                    <p className="container--project--overview">Results</p>
                    <hr className="line"></hr>
                    <p className="container--project--results">Combination(Over and Undersampling results)</p>
                    <img className="container--project--resultsimg" src={result1} alt="result1"/>
                    <p className="container--project--results_2">Ensemble Learner</p>
                    <img className="container--project--resultsimg_2" src={result2} alt="result2"/>
                </div>

            </div>

        </div>
    )
}