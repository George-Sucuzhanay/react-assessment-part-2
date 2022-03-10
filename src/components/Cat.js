import { useState, useEffect } from "react"
import randomCat from "../services/constant-2"

export default function Cat(){
    const [cats, setCat] = useState([])

    const testingSecondApi = async() => {
        const gettingCats = await randomCat()
        setCat(gettingCats.data[0])
    }
    useEffect(() => {
        testingSecondApi()
    }, [])
    return(
        <div>
           <button onClick={() => testingSecondApi()}>Click me for Random Cat</button>
           <br></br>
           <img className="catPhoto"src={cats.url}/>
        </div>
    )
}