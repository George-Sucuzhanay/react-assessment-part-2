import { useState, useEffect } from "react"
import { dogBreeds } from "../services/constants"

export default function Dog(){
    const [listofBreeds, setDogBreeds] = useState([])

    const settingApi = async () => {
        const handleDogBreeds = await dogBreeds();
        setDogBreeds(handleDogBreeds.data.message);
    }
    useEffect(() => {
        settingApi()
    }, [])
    return(
        <ul className="listItem">
            {Object.keys(listofBreeds).map((dogBreed, key) => {
            return(
                    <li className="item" key={key}> 
                        {dogBreed}
                    </li>
            )
            })}
        </ul>
    )
}