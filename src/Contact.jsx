import React,{useRef} from 'react'
import {BiMessageDetail} from 'react-icons/bi'
import emailjs from 'emailjs-com'
import './style.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zil5oso', 'template_zdpsdcf', form.current, 'i-P7o958HGHVlVjeV')
  
      
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
      };
  
    return (
    <section id='contact'>
      <h5>Get in touch</h5>
    <h2>My Contact</h2>
      <div className='contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <BiMessageDetail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>jc.n@northeastern.edu</h5>
            <a href='mailto:jc.n@northeastern.edu'>Send a message</a>
          </article>
  
          <article className='contact_option'>
          <BiMessageDetail className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Namitha JC</h5>
            <a href='https://www.linkedin.com/in/namitha-jc-9b478416b/'>Send a message</a>
          </article>
  
          <article className='contact_option'>
          <BiMessageDetail className='contact_option-icon'/>
            <h4>Gihub</h4>
            <h5>Njc27</h5>
            <a href='https://github.com/Njc27'>Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' className='form-input' required/>
          <input type="email" name='email' placeholder='Your Email' className='form-input' required/>
          {/* <textarea type="message" name='message' row='7' placeholder='Your Message' required></textarea> */}
          <textarea name="message" placeholder='Your Message' className='form-input-message' required/>
          <button type='submit' className='send-msg'>Send Message</button>
        </form>
  
      </div>
    </section>
    )
}

export default Contact