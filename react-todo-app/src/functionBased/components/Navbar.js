import React, {useState} from "react";
import { NavLink } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar = () =>{
    const[navbarOpen, SetNavbarOpen] = useState(false)
    const links = [
         {
        id:1,
        path: "/",
        text: "Home",
        },
        {
            id:2,
            path: "/about",
            text: "About",
            },
    ]
    const handleToggle = ()=>{
        SetNavbarOpen(prev => !prev)
        console.log("you state have changed ")
    }
    const closeMenu = () =>{
        SetNavbarOpen(false)
    }
    return (
        <nav className="navBar">
            <button onClick={handleToggle}>{navbarOpen ? (<MdClose style={{color:"#fff", width:"40px", height:"40px"}}/>) :
             (<FiMenu style={{color:"#7b7b7b", with:"80px", height:"80px",}}/>)}
             </button>
            <ul className={`menuNav ${navbarOpen?"showMenu":""}`}>
                {links.map(link =>{
                    return(
                        <li key = {link.id}>
                            <NavLink to={link.path} activeclassname="active-link" onClick={()=>closeMenu()} exact="true">{link.text}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Navbar