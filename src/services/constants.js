import axios from "axios";
export async function dogBreeds(){
    try{
        const response = await axios.get("https://dog.ceo/api/breeds/list/all")
        return response
    }
    catch (error){
        console.log(error)
    }
    
}