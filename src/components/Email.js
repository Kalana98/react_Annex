import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Email.css';

const Email = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_95hbcen', 'template_4vfurhh',
     form.current, 'bZOtagDSdK2Rm8Eyk')
      .then((result) => {
          console.log(result.text);
          alert("Your email sent succesfully");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      
  };
  
  return (
    <section>
      <p className='--text-center'>Send us your requirement...</p>

      <div className="container">

        <form ref={form} onSubmit={sendEmail}

        className='--form-control --card --flex-center --dir-column'>
          
          <lable className="eHeader">Your Name :</lable><br/>
          <input type='text' name='user_name' className='box' required/><br/><br/>
          <lable className="eHeader">Your Email :</lable><br/>
          <input type='email'   name='user_email'className='box' required/><br/><br/>
          <lable className="eHeader">Your Message :</lable><br/>
          <textarea name="message"  cols="30" rows="10" className='boxMsg'></textarea><br/><br/>
          <button type="submit" className='--btn--btn-primary'>Send Message</button><br/>
        </form>
      </div>
    </section>
  )
}

export default Email;