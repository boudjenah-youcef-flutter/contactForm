import { AiFillWechat } from "react-icons/ai";
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navigation'>
        <a href="#" className='logo'> <AiFillWechat /></a>
        <ul>
            <li> 
                <a href="#"> Home</a>
            </li>
            <li> 
                <a href="#"> Service</a>
            </li>
            <li> 
                <a href="#"> Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar