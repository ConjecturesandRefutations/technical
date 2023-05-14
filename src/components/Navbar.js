import { Link } from "react-router-dom";


import company from './../images/company.png'

function Navbar() {


    return (
      <nav className='Navbar'>
        
           <img src={company} className="companyLogo"/>   
  
            <div className="links">
                <Link className="buttons" to="/" >
                  <a id='homeButton'>HOME</a>
                </Link>

            <Link className="buttons" to="/about-us" >
              <a id='aboutButton'>ABOUT US</a>
            </Link>

            <Link className="buttons" to="/contact-us" >
              <a id='contactButton'>CONTACT US</a>
            </Link>

            <Link id='logInButton' to="#" >
              <a>Log in</a>
            </Link>
        </div>
      
      </nav>
    );
  }
  
  export default Navbar;
  