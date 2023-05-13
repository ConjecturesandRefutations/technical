import { Link } from "react-router-dom"

import Screen from './../images/orangechairsscreen.jpg'

function Home() {


    return (
      <nav className='Home'>
  
          <section className="openingSection">

            <div className="openingText">
              <h1 id="mainHeading">Lorem ipsum dolor</h1>
              <p>Quem vide tincidunct pri ei, id mea ominum denique</p> 

              <Link className="centralContact" to="/contact-us" >
                <a>Contact us</a>
              </Link>

            </div> 

          </section>


          <section className="secondRow" >
 
              <div className="secondText">
                
              <h3>Justo petentium te vix, scripta regione urbanitas</h3>

                          <p>Enim tortor at auctor urna. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Volutpat ac tincidunt vitae semper quis lectus nulla. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Viverra accumsan in nisl nisi scelerisque eu. Lorem mollis aliquam ut porttitor leo. Lorem donec massa sapien faucibus et. Sapien pellentesque habitant morbi tristique.</p>
                          
                          <ul className="firstList">
                            <li>Duis at consectetur lorem donec.</li>
                            <li>Nisi est sit amet facilisis magna etiam tempor orci. Leo in vitae turpis massa.</li>
                            <li>Proin fermentum leo vel orci porta non pulvinar neque laoreet.</li>
                            <li>Turpis massa tincidunt dui ut ornare lectus.</li>
                          </ul>

                          <Link id="learnMore" to="#" >
                              <a >Learn More</a>
                            </Link>

              </div>

              <img src={Screen} className="screenImage" alt="chairs with a screen" />


          </section>


          <section className="thirdRow">

          </section> 
      
          <section className="fourthRow">

          </section> 

      </nav>
    );
  }
  
  export default Home;
  