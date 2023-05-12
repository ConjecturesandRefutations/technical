import { Link } from "react-router-dom"

function Home() {


    return (
      <nav className='Home'>
  
          <section className="openingSection">

            <div className="openingText">
              <h1>Lorem ipsum dolor</h1>
              <p>Quem vide tincidunct pri ei, id mea ominum denique</p> 

              <Link className="centralContact" to="/contact-us" >
                <a>Contact us</a>
              </Link>

            </div> 

          </section>

          <section className="centralRow">

          </section> 

          <section className="bottomRow">

          </section> 
      
      </nav>
    );
  }
  
  export default Home;
  