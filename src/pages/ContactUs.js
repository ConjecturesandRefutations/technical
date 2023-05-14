import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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

          <form className='contactForm'>

            <div className='formFirstRow'>
              <div>
                <p>Full name</p>
                <input id='nameInput'/>
              </div>

                <div>
                  <p>Email Address</p>
                  <input id='emailInput'/>
              </div>
  
            </div>

            <div>
                <p>Phone number 01 - <span style={{fontStyle:'italic'}}>optional</span></p>
                <input className='inputStyle'/>
              </div>

              <div id='phoneTwo'>
                <p>Phone number 02 - <span style={{fontStyle:'italic'}}>optional</span></p>
                <input className='inputStyle' style={{marginBottom:20}}/>
              </div>

              <input id='newPhone' placeholder='Add new phone number' className='inputStyle'/>

              <div>
                <p>Message</p>
                <textarea className='inputStyle' placeholder='Maximum Text Length is 500 characters'/>
              </div>

              <div id='checkbox'>
                <input type='checkbox'/>
                <label>Add address details</label>
              </div>

              <div>
                  <input type="submit" name="submit" id="submit" class="submit-button" value="Submit"/>
              </div>

          </form>

        </div>
        <img src={ContactImage} alt='stylised infinity symbol rotated ninety degrees' id='contactImage'/>
          
      
      </div>
    );
  }
  
  export default ContactUs;
  