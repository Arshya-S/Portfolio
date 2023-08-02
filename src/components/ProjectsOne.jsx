import "../styles/projects.css";
const ProjectsOne = (props) => {
  return(
    <div className="container-fluid projects-container d-flex flex-column justify-content-center align-items-center" id="projectsId">
      <div className="projects d-flex flex-column justify-content-center align-items-center info">
        <div className='container d-flex flex-row align-items-center p-5' >
          <img className="image border border-dark border-2" src='/images/Todo.png' alt=""/>
          <div className="container side-info">
            <h2 className="text-dark-emphasis p-4 title"><strong>Smart TODO List</strong></h2>
            <h4 className="text-dark-emphasis p-4 text">TODO list that auto categorizes items</h4>
            <a href="https://github.com/Arshya-S/Smart-TODO-List" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-4 p-2 button" >Github</a>
          </div>
        </div>

        
        <div className='container mt-5 d-flex flex-row align-items-center p-5' id="projectsId">
          <img className="image border border-dark border-2" src='/images/photolabs.png' alt=""/>
          <div className="container side-info">
            <h2 className="text-dark-emphasis p-4 title"><strong>Photolabs</strong></h2>
            <h4 className="text-dark-emphasis p-4 text">Users manage their photos and interact with other's</h4>
            <a href="https://github.com/Arshya-S/Photolabs" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-4 p-2 button" >Github</a>
          </div>
        </div>

        <button className="button btn" onClick={() => props.scrollToElement('projects-two')}><h4 className='text-dark-emphasis p-5'>See More<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></h4> </button>
      </div>

      
      
      
    </div>
  );
};

export default ProjectsOne;