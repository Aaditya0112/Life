import Home from './assets/pages/Home';
import Layout from './assets/pages/Layout';
import About from './assets/pages/About';
import Registration from './assets/pages/Registration';
import NoPage from './assets/pages/NoPage';
import ComingSoon from './assets/pages/ComingSoon';


import EventDetails from './assets/pages/EventDetails';


// import speaker from './assets/js/speaker.js';
import { createBrowserRouter,Routes, Route, createRoutesFromElements, RouterProvider, BrowserRouter} from "react-router-dom";
import Contact from './assets/pages/Contact';

import Venue from './assets/pages/Venue';
import Supporters from './assets/pages/Supporters';
import Speakers from './assets/pages/Speakers';
import Committee from './assets/pages/Committee';





// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//   )
// )

function App() {

  return (
    <>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/committee" element={<Committee />} /> */}
      <Route path="/speakers" element={<Speakers/>} />
      <Route path="/eventDetails" element={<EventDetails />} />
      <Route path="/committee" element={<Committee/>} />
      <Route path='/venue' element = {<Venue/>}/>
      <Route path='/supporters' element = {<Supporters/>}/>

      <Route path="/registration" element={<Registration />} />


      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NoPage />} /> 
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
