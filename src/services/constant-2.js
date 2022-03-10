import axios from "axios";

export default async function randomCat(){
    try{
        const API_KEY = "a25652ea-2260-454e-86c9-89806a1f53b5"
        const BASE_URL = "https://api.thecatapi.com/v1/images/search"
        
        const response = await axios.get(BASE_URL)
        return response
    }
    catch(error) {
        console.log(error)
    }
}