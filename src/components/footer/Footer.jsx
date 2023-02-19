import React from 'react';
import './footer.css';
import Logo from '../../assets/images/logo.svg';
import { Link} from "react-router-dom";
import { BsFacebook,BsInstagram,BsDiscord,BsLinkedin } from 'react-icons/bs';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='logoFooter'>
            <Link className='linkLogoFooter' to="/">
                <img src={Logo} alt='logo' />
            </Link>
        </div>
        <div className='separator'>
            
            </div>
        <div className='infoFooter'>
            <ul className="nav-linksFooter">
                <div className='buttonsFooter'>
                    <div className='pageBtnFooter'>
                        <Link className='linkFooter' to="/">
                            <h1>Home</h1>
                        </Link>
                    </div>
                    <div className='pageBtnFooter'>
                        <Link className='linkFooter' to="/show">
                            <h1>Show</h1>
                        </Link>
                    </div>
                    <div className='pageBtnFooter'>
                        <Link className='linkFooter' to="/about">
                            <h1>About</h1>
                        </Link>
                    </div>
                </div>     
            </ul>
        </div>
        <div className='separator'>

        </div>
        <div className='followFooter'>
            <div className='textFooter'>
                <h1>Contact me</h1>
                <p>email: iliecristian12@gmail.com</p>
                <p>phone: +40746569105</p>
            </div>
            <div className='follow'>
            <a href='https://www.facebook.com/MrSomeBody02/'><h1><BsFacebook/></h1></a>
            <a href='https://www.instagram.com/mrsomebody02/'><h1><BsInstagram/></h1></a>
            <a href='Mr.SomeBody#2438'><h1><BsDiscord/></h1></a>
            <a href='https://www.linkedin.com/in/ilie-cristian-vasiliu-2431801b8/'><h1><BsLinkedin/></h1></a>
            </div>
            
            
        </div>
     
    </div>
  )
}

export default Footer
