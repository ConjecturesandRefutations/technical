import Screen from './../images/orangechairsscreen.jpg'

function AboutUs() {


    return (
      <div className='AboutUs'>
        <hr/>
  
      <div className="aboutText">

        <h1>About Us</h1>
        <p><span style={{fontFamily: 'Arial', fontWeight:900}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span><br/>
        Risus ultricies tristique nulla aliquet enim. Viverra maecenas accumsan lacus vel facilisis volutpat est. Egestas diam in arcu cursus euismod quis viverra.
         A erat nam at lectus urna duis convallis convallis. Magnis dis parturient montes nascetur ridiculus. Dignissim suspendisse in est ante in nibh mauris. 
         Morbi tincidunt augue interdum velit euismod in. Egestas sed tempus urna et pharetra pharetra massa. Fermentum iaculis eu non diam <a href="#">phasellus vestibulum lorem</a> sed risus. 
         Placerat orci nulla pellentesque dignissim enim.<br/><br/> Semper eget duis at tellus at urna. Donec et odio pellentesque diam. In nisl nisi scelerisque eu ultrices. 
         Convallis convallis tellus id interdum velit laoreet. Ut sem nulla pharetra diam sit amet nisl suscipit. Ornare arcu dui vivamus arcu felis bibendum ut tristique. 
         Sit amet risus nullam eget felis eget nunc lobortis. Velit euismod in pellentesque massa placerat duis ultricies lacus. Amet nulla facilisi morbi tempus. 
         Platea dictumst vestibulum rhoncus est pellentesque rhoncus est pellentesque elit ullamcorper dignissim.</p>

      </div>

      <img src={Screen} className="screenImageAbout" alt="chairs with a screen" />

      <div className="aboutText">

        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Risus ultricies tristique nulla aliquet enim. Viverra maecenas accumsan lacus vel facilisis volutpat est. Egestas diam in arcu cursus euismod quis viverra.
         A erat nam at lectus urna duis convallis convallis. Magnis dis parturient montes nascetur ridiculus. Dignissim suspendisse in est ante in nibh mauris. 
         Morbi tincidunt augue interdum velit euismod in. Egestas sed tempus urna et pharetra pharetra massa. Fermentum iaculis eu non diam <a href="#">phasellus vestibulum lorem</a> sed risus. 
         Placerat orci nulla pellentesque dignissim enim. Convallis convallis tellus id interdum velit laoreet.</p>

         <h3>Tario duo vis semper abhorreant:</h3>

         <ul className='secondList'>
          <li>Donec adipiscing tristique risus nec. Pharetra convallis posuere morbi leo.</li>
          <li>Ornare massa eget egestas purus.</li>
          <li>Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.</li>
          <li>Placerat in egestas erat imperdiet. Quisque non tellus orci ac auctor.</li>
         </ul>

         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Risus ultricies tristique nulla aliquet enim. Viverra maecenas accumsan lacus vel facilisis volutpat est. Egestas diam in arcu cursus euismod quis viverra.
         A erat nam at lectus urna duis convallis convallis. Pharetra convallis posuere morbi leo.</p>

         <p> Dignissim suspendisse in est ante in nibh mauris. Morbi tincidunt augue interdum velit euismod in. Egestas sed tempus urna et pharetra pharetra massa. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. 
         Placerat orci nulla pellentesque dignissim enim. Convallis convallis tellus id interdum velit laoreet. Magnis dis parturient montes nascetur ridiculus. Dignissim suspendisse in est ante in nibh mauris. 
         Morbi tincidunt augue interdum velit euismod in. Egestas sed tempus urna et pharetra pharetra massa. Sagittis purus sit amet volutpat consequat mauris. Velit euismod in pellentesque massa placerat.</p>

      </div>

      </div>
    );
  }
  
  export default AboutUs;
  