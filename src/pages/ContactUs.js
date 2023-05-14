import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import ContactImage from './../images/Img_Contact.png'

function ContactUs() {

  const [secondPhone, setSecondPhone] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  const toggleSecondPhone = (e) => {
    e.preventDefault(); 
    setSecondPhone(!secondPhone); 
  }

  const toggleShowAddress = (e) => {
    setShowAddress(!showAddress); 
  }

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

              {secondPhone &&
              <div id='phoneTwo'>
                <p>Phone number 02 - <span style={{fontStyle:'italic'}}>optional</span></p>
                <input className='inputStyle' style={{marginBottom:20}}/>
              </div>
              }

              <button id='newPhone' className='inputStyle' onClick={toggleSecondPhone}>{ !secondPhone ? 'Add new phone' : 'Remove phone' }</button>

              <div>
                <p>Message</p>
                <textarea className='inputStyle' placeholder='Maximum Text Length is 500 characters'/>
              </div>

              <div id='checkbox'>
                <input type='checkbox' checked={showAddress}
                   onChange={(event) => setShowAddress(event.target.checked)}/>
                <label>Add address details</label>
              </div>

              <div className='submitButton'>
                  <FontAwesomeIcon className="fa" icon={faPaperPlane} />
                  <input type="submit" name="submit" id="submit" class="submit-button" value="Submit"/>
              </div>

              { showAddress ?

              <>

              <div className='formFirstRow'>
                
              <div>
                <p>Address line 1</p>
                <input id='addressInput' style={{marginRight:20}}/>
              </div>

                <div>
                  <p>Address line 2</p>
                  <input id='adressTwoInput'/>
              </div>
  
            </div>

            <div className='formSecondRow'>
              <div>
                <p>City/Town</p>
                <input id='cityInput' style={{width:75, marginRight:13}}/>
              </div>

                <div>
                  <p>State/County</p>
                  <input id='countyInput' style={{width:75, marginRight:13}}/>
              </div>
              <div>
                <p>Postcode</p>
                <input id='postcode' style={{width:75, marginRight:13}}/>
              </div>

                <div>
                  <p>Country</p>
                  <input id='country' style={{width:75, marginRight:13}}/>
              </div>
  
            </div>

            </>

            : null}
                            
          </form>

        </div>
        <img src={ContactImage} alt='stylised infinity symbol rotated ninety degrees' id='contactImage'/>
          
      
      </div>
    );
  }
  
  export default ContactUs;
  