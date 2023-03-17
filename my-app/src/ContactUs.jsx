import React from "react";
import  './contactus.css';



function ContactUs(){
    return(
      <diV className='container'>
        <label>First Name</label>
        <input type={Text} placeholder="Your name.."></input>
        <label>Last Name</label>
        <input type={Text} placeholder="Your Last name.."></input>
        <label>Subject</label>
        <textarea placeholder="Write Something..." style={{height: '200px'}}></textarea>
        <input type="submit" value="Submit"></input>
      </diV>
    )
}

export default ContactUs;