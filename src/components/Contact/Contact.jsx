import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png"


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "95364256-0f1d-4977-b4c2-90686bcae217");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully",data);
      setResult(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
        <div className="contact-col">
      <h3 >Send us a message <img src={msg_icon} alt="" /></h3>
      <p>Feel free to reach out through contact form or find our contact
        information below. Your feedback, question, and suggetions are important
        to us as we strive to provide exceptional service to our
        university community.
      </p>
      <ul>
        <li><img src={mail_icon} alt="" />Contac@GreatStack.dev</li>
        <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
        <li><img src={location_icon} alt="" />77 Massachusetts Ave, cambridge <br /> MA 02139, United 
        States</li>
      </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder='Enter your name' required/>
            <label htmlFor="">Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number'required/>
            <label htmlFor="">Write your massage here</label>
            <textarea name="massage" id="" rows="6" placeholder='Enter your massage' required></textarea>
       <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact;
