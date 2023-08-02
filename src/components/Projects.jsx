import "../styles/projects.css";
const ProjectsOne = (props) => {
  return(
    <div className="container-fluid p-5 d-flex flex-column justify-content-center" id="project-one">

        <div className='project-one container-fluid d-flex flex-row align-items-center p-4' >
          <img className="image border border-dark border-2" src='/images/Todo.png' alt=""/>
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4 className="text-dark-emphasis p-2 "><strong>Smart TODO List</strong></h4>
            <h6 className="text-dark-emphasis p-2 ">TODO list that auto categorizes items</h6>
            <a href="https://github.com/Arshya-S/Smart-TODO-List" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-2 p-2" >Github</a>
          </div>
        </div>

        <div className='project-two container-fluid d-flex flex-row align-items-center p-4'>
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4 className="text-dark-emphasis p-2 "><strong>Photolabs</strong></h4>
            <h6 className="text-dark-emphasis p-2 ">Users manage their photos and interact with other's</h6>
            <a href="https://github.com/Arshya-S/Photolabs" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-2 p-2" >Github</a>
          </div>
          <img className="image border border-dark border-2" src='/images/photolabs.png' alt=""/>
        </div>

        <div className='project-three container-fluid d-flex flex-row align-items-center p-4'>
          <img className="image border border-dark border-2" src='/images/tweeter.png' alt=""/>
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4 className="text-dark-emphasis p-2 "><strong>Tweeter</strong></h4>
            <h6 className="text-dark-emphasis p-2 ">Twitter clone where user's tweet and view other's tweets</h6>
            <a href="https://github.com/Arshya-S/tweeter" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-2 p-2" >Github</a>
          </div>
        </div>

        <div className='project-four container-fluid d-flex flex-row align-items-center p-4'>
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4 className="text-dark-emphasis p-2 "><strong>Tiny App</strong></h4>
            <h6 className="text-dark-emphasis p-2 ">URL shortening app</h6>
            <a href="https://github.com/Arshya-S/tinyapp/tree/63bbdad21aba56fa7e80b1dea84de41ea13960c9" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-2 p-2" >Github</a>
          </div>
          <img className="image border border-dark border-2" src='/images/tiny.png' alt=""/>
        </div>

      
    </div>
      
      

  );
};

export default ProjectsOne;