import { useState, useEffect } from "react"
import randomCat from "../services/constant-2"

export default function Cat(){
    const [cats, setCat] = useState([])

    const testingSecondApi = async() => {
        const gettingCats = await randomCat()
        console.log(gettingCats.data[0])
        setCat(gettingCats.data[0])
    }
    useEffect(() => {
        testingSecondApi()
    }, [])
    return(
        <div>
           <button onClick={() => testingSecondApi()}></button>
           <br></br>
           <img src={cats.url}/>
        </div>
    )
}