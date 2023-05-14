import ContactImage from './../images/Img_Contact.png'

function ContactUs() {


    return (

      
      <div className='ContactUs'>   
  <hr id='secondHr'/>
        <div className="contactText">
         
          <h1>Contact Us</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.
          </p>
        </div>
        <img src={ContactImage} alt='stylised infinity symbol rotated ninety degrees' id='contactImage'/>
          
      
      </div>
    );
  }
  
  export default ContactUs;
  