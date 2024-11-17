import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className='navbar-logo-container'><h2>Logo</h2></div>
      <div className='navbar-links-container'>
        <div className='hamburger' onClick={() => {setIsOpen(!isOpen)}}><RxHamburgerMenu /></div>        
        <ul className={isOpen ? 'open' : ''}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>        
      </div>
    </nav>
  );
}

export default Navbar;