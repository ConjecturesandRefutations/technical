import { useState } from 'react'; 
import { Link } from "react-router-dom"

import BlueGlasses from './../images/blueglasseshat.jpg'
import OrangeChairs from './../images/orangechairs.jpg'
import Screen from './../images/orangechairsscreen.jpg'

function Home() {

  const [backgroundImage, setBackgroundImage] = useState(BlueGlasses);

  const togglePicture = () => {    
    if (backgroundImage === BlueGlasses) {
      setBackgroundImage(OrangeChairs);
    } else {
      setBackgroundImage(BlueGlasses);
    }
  };

    return (
      <div className='Home' >
  
          <section className="openingSection" style={{ backgroundImage: `url(${backgroundImage})`}}>

            <div className="openingText">

              <h1 id="mainHeading">Lorem ipsum dolor</h1>
              <p>Quem vide tincidunct pri ei, id mea ominum denique</p> 

              <Link className="centralContact" to="/contact-us" >
                <a>Contact us</a>
              </Link>

            </div> 

            <div className='arrows'>
                <button className='arrowLeft' onClick={togglePicture}>⬅️</button>
                <button className='arrowRight' onClick={togglePicture}>➡️</button>
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

                          <Link id="learnMore" to="/about-us" >
                              <a >Learn More</a>
                            </Link>

              </div>

              <img src={Screen} className="screenImage" alt="chairs with a screen" />


          </section>


          <section className="thirdRow">


            <div className="thirdText">
              <h1>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</h1>

              <p>Massa massa ultricies mi quis hendrerit dolor magna eget. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ut porttitor leo a diam sollicitudin. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Cursus in hac habitasse platea.</p>
              <Link id="loginCenter" to="#" >
                              <a >Log in</a>
                            </Link>
            </div>


          </section> 
      
          <section className="fourthRow">

            <div className="fourthText">
              <h1>Sed libero justo, lobrtis sit amet suscipit non</h1>
              <h3>tario duo ut vis semper abhorreant</h3>
            </div>
            <p className="fourthTextBulk">Enim neque volutpat ac tincidunt vitae semper quis lectus. Facilisis magna etiam tempor orci eu lobortis elementum. Leo vel fringilla est ullamcorper. Sed cras ornare arcu dui vivamus. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Eget nullam non nisi est sit amet. Rutrum quisque non tellus orci ac auctor augue mauris. Volutpat blandit aliquam etiam erat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. <br/><br/>
Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Aliquam sem et tortor consequat id porta nibh venenatis. Parturient montes nascetur ridiculus mus. Dictum non consectetur a erat nam at. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Ut tellus elementum sagittis vitae et leo duis ut diam. Libero volutpat sed cras ornare arcu dui vivamus. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Sed turpis tincidunt id aliquet risus feugiat in. <br/><br/> Integer enim neque volutpat ac tincidunt vitae. Morbi quis commodo odio aenean sed.
Eget duis at tellus at. Pharetra vel turpis nunc eget lorem. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Integer quis auctor elit sed vulputate mi sit amet. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est sit amet facilisis magna etiam tempor orci eu. Augue eget arcu dictum varius duis at consectetur lorem donec. Odio pellentesque diam volutpat commodo sed egestas. Amet porttitor eget dolor morbi non arcu risus. Lectus nulla at volutpat diam ut venenatis tellus in. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Tempor orci dapibus ultrices in iaculis nunc. 
Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.</p>

              <Link className="bottomContact" to="/contact-us" >
                <a>Contact us</a>
              </Link>

          </section> 

      </div>
    );
  }
  
  export default Home;
  