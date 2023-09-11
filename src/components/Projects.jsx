import "../styles/projects.css";
const ProjectsOne = (props) => {
  return(
    <div className="container-fluid p-5 d-flex flex-column justify-content-center" id="project-one">

        <div className='project-one container-fluid d-flex flex-row align-items-center p-4' >
          <img className="image border border-dark border-2" src='/images/fitness.png' alt=""/>
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4 className="description text-dark-emphasis p-2 "><strong>AI Fitness Planner</strong></h4>
            <h6 className="text-dark-emphasis p-2 ">Workout planning with the help of AI</h6>
            <a href="https://github.com/Arshya-S/Fitness-Planner" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-2 p-2" >Github</a>
          </div>
        </div>

        <div className='project-two container-fluid d-flex flex-row align-items-center p-4' >
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4 className="description text-dark-emphasis p-2 "><strong>Smart To-Do List</strong></h4>
            <h6 className="text-dark-emphasis p-2 ">Auto-categorizing TODO list</h6>
            <a href="https://github.com/Arshya-S/Smart-TODO-List" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-2 p-2" >Github</a>
          </div>
          <img className="image border border-dark border-2" src='/images/Todo.png' alt=""/>
        </div>

        <div className='project-three container-fluid d-flex flex-row align-items-center p-4'>
          <img className="image border border-dark border-2" src='/images/plant.png' alt=""/>
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4 className="text-dark-emphasis p-2 "><strong>Plant Ecommerce</strong></h4>
            <h6 className="description text-dark-emphasis p-2 ">Mini e-commerce application for buying and selling plants</h6>
            <a href="https://github.com/Arshya-S/Jungle-Rails" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-2 p-2" >Github</a>
          </div>
        </div>

        <div className='project-four container-fluid d-flex flex-row align-items-center p-4'>
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4 className="text-dark-emphasis p-2 "><strong>Photo Share</strong></h4>
            <h6 className="description text-dark-emphasis p-2 ">Users manage their photos and interact with other's</h6>
            <a href="https://github.com/Arshya-S/Photolabs" target="_blank" rel="noopener noreferrer" className="btn btn-dark ms-2 p-2" >Github</a>
          </div>
          <img className="image border border-dark border-2" src='/images/photolabs.png' alt=""/>
        </div>



    </div>
      
      

  );
};

export default ProjectsOne;