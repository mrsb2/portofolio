import React from 'react'
import { Link} from "react-router-dom";
import './navbar.css';
import Logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className="nav-links">
            <div className='logo'>
                <Link className='linkLogo' to="/">
                    <img src={Logo} alt='logo' />
                </Link>
            </div>
            <div className='buttons'>
                <div className='pageBtn'>
                    <Link className='link' to="/">
                        <h1>Home</h1>
                    </Link>
                </div>
                <div className='pageBtn'>
                    <Link className='link' to="/show">
                        <h1>Show</h1>
                    </Link>
                </div>
                <div className='pageBtn'>
                    <Link className='link' to="/about">
                        <h1>About</h1>
                    </Link>
                </div>
            </div>     
        </ul>
    </div>
    )
}

export default Navbar



