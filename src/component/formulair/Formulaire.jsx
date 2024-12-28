import './formulair.css';
import Bouton from '../boutoncom/bouton';
import { IoChatbubbleEllipses } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import Image from '../../assets/home.svg';


const Formulaire = () => {
  return (
    <section className='formulaire'>
      <div className='formulaire__contact_btn' >
           <Bouton text="Via Le Chat" icon={<IoChatbubbleEllipses />} />
      <Bouton text="Via Le Telephone" icon={<BsFillTelephoneFill />} />
      </div>
   
      <div className='formulaire__container'>
        
        <h2>Contact Us Now</h2>
        <form className='formulaire__form'>
          <div className='inputgrup'>
            <label htmlFor="name">Your Name</label>
            <input type='text' name='name' id="name" aria-label="Your Name" />
          </div>
          <div className='inputgrup'> 
            <label htmlFor="mail">Your Email</label>
            <input type='email' name='mail' id="mail" aria-label="Your Email" />
          </div>

          <div className='inputgrup'>
            <label htmlFor="phone">Your Phone</label>
            <input type='text' name='phone' id="phone" aria-label="Your Phone" />
          </div>

          <div className='inputgrup'>
          <label htmlFor="Message">Your Message</label>

            <textarea ></textarea>
          </div>
          
          <Bouton text="Envoyer" icon={<MdMarkEmailRead />} />
        </form>

        <div className='formulaire__image'>
          <img src={Image} alt="" />
        </div>

      </div>
    </section>
  );
};

export default Formulaire;
