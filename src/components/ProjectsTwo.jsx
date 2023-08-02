import "../styles/projects.css";

const ProjectsTwo = () => {
  return(
    <div className="container-fluid projects-container-two d-flex flex-column justify-content-center" id="projects-two">
      <div className="projects-two">
        <div className='container d-flex flex-row align-items-center p-5'>
          <img className="image border border-dark border-2" src='/images/tweeter.png' alt=""/>
          <div className="container">
            <h2 className="text-dark-emphasis p-4 "><strong>Tweeter</strong></h2>
            <h4 className="text-dark-emphasis p-4 ">Twitter clone where user's tweet and view other's tweets</h4>
            <a href="https://github.com/Arshya-S/tweeter" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-4 p-2" >Github</a>
          </div>
        </div>

        <div className='container d-flex flex-row align-items-center p-5' id="projectsId">
          <img className="image border border-dark border-2" src='/images/tiny.png' alt=""/>
          <div className="container">
            <h2 className="text-dark-emphasis p-4 "><strong>Tiny App</strong></h2>
            <h4 className="text-dark-emphasis p-4 ">URL shortening app</h4>
            <a href="https://github.com/Arshya-S/tinyapp/tree/63bbdad21aba56fa7e80b1dea84de41ea13960c9" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-4 p-2" >Github</a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectsTwo;