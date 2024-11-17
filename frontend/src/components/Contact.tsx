import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact'>
      <h2>Contact</h2>
      <div className='social-networks'>
        <div><a href=''><FaWhatsapp size={30} /></a></div>
        <div><a href=''><FaInstagram  size={30} /></a></div>
      </div>

    </div>
  );
}

export default Contact;