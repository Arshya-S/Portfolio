import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsOne from './components/Projects';


// Color theme => https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd
// Color theme => https://coolors.co/palette/5aa9e6-7fc8f8-f9f9f9-ffe45e-ff6392
// Color gradient => https://mycolor.space/gradient?ori=to+right&hex=%23979696&hex2=%23FAFAFA&sub=1

function App() {

  const scrollToElement = (id) => {
    const elementById = document.getElementById(id);
    elementById.scrollIntoView({ behavior: 'smooth' });
  };

  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('loader');
        } else {
          entry.target.classList.remove('loader');
        }
      });
    });

    // Get the element once it's in the DOM
    const aboutElement = document.querySelector('.about');
    const skillsElement = document.querySelector('.skills');
    const projectOne = document.querySelector('.project-one');
    const projectTwo = document.querySelector('.project-two');
    const projectThree = document.querySelector('.project-three');
    const projectFour = document.querySelector('.project-four');
  

    // Check if the element was found before observing
    if (aboutElement) {
      observer.observe(aboutElement);
    } 
    if (skillsElement) {
      observer.observe(skillsElement);
    }
    if (projectOne) {
      observer.observe(projectOne);
    }
    if (projectTwo) {
      observer.observe(projectTwo);
    }
    if (projectThree) {
      observer.observe(projectThree);
    }
    if (projectFour) {
      observer.observe(projectFour);
    }
    

  

    // Clean up the observer when the component unmounts
    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      } 
      if (skillsElement) {
        observer.unobserve(skillsElement);
      }
      if (projectOne) {
        observer.unobserve(projectOne);
      }
      if (projectTwo) {
        observer.unobserve(projectTwo);
      }
      if (projectThree) {
        observer.unobserve(projectThree);
      }
      if (projectFour) {
        observer.unobserve(projectFour);
      }

    };
  }, []); // Empty dependency array ensures this effect runs only once
  

  return (
    <div className="App">
      <Navbar scrollToElement={scrollToElement}/>
      <About scrollToElement={scrollToElement}/>
      <Skills/>
      <ProjectsOne scrollToElement={scrollToElement}/>
      {/* <ProjectsTwo/> */}
    </div>
  );
}

export default App;
