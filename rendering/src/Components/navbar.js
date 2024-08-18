
import NavSearch from "./nav-search"
import Navlinks from "./nav-links"

export default function Navbar(){
    console.log("Navbar Rendered")
   
    return (
        <div>
            <Navlinks/>
            <NavSearch/>
        </div>
    )
}