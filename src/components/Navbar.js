import { Link, useNavigate } from "react-router-dom";


import company from './../images/company.png'

function Navbar() {

/* In case you are wondering why I am using 'useNavigate' and adding an 'onClick' instead of taking the simpler
and more elegant approach of using a <Link> or <a> element on the company logo - essentially the <a> and <Link>
elements are messing with the positioning of the image .companyLogo, and this method prevents that, 
even though it is a bit unwieldly! */

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); 
  };

    return (
      <nav className='Navbar'>
        
           <img src={company} className="companyLogo" onClick={handleClick}/>   
  
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
  