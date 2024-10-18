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
import LandingPage from './assets/pages/LandingPage';





// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//   )
// )

function App() {

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    <Route path="/2024" element={<Layout />}>
      <Route path='/2024' element={<Home />} />
      <Route path="/2024/about" element={<About />} />
      {/* <Route path="/committee" element={<Committee />} /> */}
      <Route path="/2024/speakers" element={<Speakers/>} />
      <Route path="/2024/eventDetails" element={<EventDetails />} />
      <Route path="/2024/committee" element={<Committee/>} />
      <Route path='/2024/venue' element = {<Venue/>}/>
      <Route path='/2024/supporters' element = {<Supporters/>}/>

      <Route path="/2024/registration" element={<Registration />} />


      <Route path="/2024/contact" element={<Contact />} />

      <Route path="*" element={<NoPage />} /> 
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
