import React,{useRef} from 'react';
import Header from './header';
// import Main from './main';
import Footer from './footer';


const App = () => {
  const nameref =useRef(null);
  return (
    <div>
      <Header nameref={nameref}/>
      <Footer nameref={nameref}/>
    </div>
  );
}

export default App;


