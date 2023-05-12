import { Link } from "react-router-dom"

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

          <section className="secondRow">

          </section> 

          <section className="thirdRow">

          </section> 
      
          <section className="fourthRow">

          </section> 

      </nav>
    );
  }
  
  export default Home;
  