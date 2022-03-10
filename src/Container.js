import { Route, Routes } from "react-router-dom"
import Cat from "./components/Cat"
import Dog from "./components/Dog"
import NotFound from "./components/NotFound"
import Home from "./components/Home"
import './App.css';


export default function Container(){
    return(
        <div className="links">
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/dog" element={<Dog/>}/>
               <Route path="cat" element={<Cat/>}/>
               <Route path="*" element={<NotFound/>}/>
           </Routes>
        </div>
    )
}