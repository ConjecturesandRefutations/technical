import { createContext, useState } from 'react'; 
 
const PictureContext = createContext();
 
function PictureProviderWrapper(props) {
  const [picture, setPicture] = useState('light'); 
 
  const togglePicture = () => {    
    if (picture === 'one') {
      setPicture('two');
    } else {
      setPicture('one');
    }
  };
 
  return (
    <PictureContext.Provider value={{ picture, togglePicture }}>   
      {props.children}
    </PictureContext.Provider>
  );
}
 
export { PictureContext, PictureProviderWrapper };