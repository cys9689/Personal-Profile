import {useState} from "react";


const ExpMoreLess=({children})=>{
    const [isReadMoreShown,setReadMoreShown] = useState(false)
    const toggleBtn =()=>{
        setReadMoreShown(prevState => !prevState)
    }

    return(
        
        <div>
            {isReadMoreShown ? children : ""}
            <button onClick={toggleBtn} className={isReadMoreShown ? "readless--button" :"readmore--button" }>{isReadMoreShown ? "Read Less ":"...Read More" }</button>
        </div>
    )
}

export default ExpMoreLess;