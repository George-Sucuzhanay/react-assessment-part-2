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
        <div>
            {Object.keys(listofBreeds).map((dogBreed, key) => {
            return(
                    <h4 key={key}> 
                        {dogBreed}
                    </h4>
            )
            })}
        </div>
    )
}