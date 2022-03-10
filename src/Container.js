import { Route, Routes } from "react-router-dom"
import Cat from "./components/Cat"
import Dog from "./components/Dog"
import NotFound from "./components/NotFound"

export default function Container(){
    return(
        <div>
           <Routes>
               <Route path="/"/>
               <Route path="/dog" element={<Dog/>}/>
               <Route path="cat" element={<Cat/>}/>
               <Route path="*" element={<NotFound/>}/>
           </Routes>
        </div>
    )
}