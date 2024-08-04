import React, { Suspense, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

const About = React.lazy(() => import('./components/About'))
const Skills = React.lazy(() => import('./components/Skills'))
const Experience = React.lazy(() => import('./components/Experience'))
const Contact = React.lazy(() => import('./components/Contact'))


function App() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      AOS.refresh();
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (

    <div className="w-full bg-gradient-to-b from-slate-900 via-black to-gray-800"
    >{
        !showComponent ?
          <div className='h-screen w-screen flex justify-center items-center'>
            <div className="w-12 h-12 rounded-full animate-spin
                    border-y-4 border-solid border-green-500 border-t-transparent shadow-md"></div>
          </div>
          :
          <div>
            <Navbar />
            <Home  AOS={AOS}/>
            <Suspense fallback={<div >Loading</div>}>
              <About AOS={AOS} />
              <Skills AOS={AOS} />
              <Experience AOS={AOS} />
              <Contact AOS={AOS} />
            </Suspense>
          </div>


      }

    </div>
  );
}

export default App;
