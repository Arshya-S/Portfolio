import "../styles/icon.css"
import "../styles/skills.css"

const Skills = (props) => {

  return (
    <div className="skills-container container-fluid p-4 d-flex flex-column justify-content-center align-items-center" id="skillsId">
      <div className="skills">
        <div className="skill container-fluid p-4">
          <h3 className="row justify-content-center text-dark">Languages</h3>
          <div className="container-fluid p-4 row justify-content-center">
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt=""/>
          </div>
        </div>

        <div className="skill container-fluid p-5">
          <h3 className="row justify-content-center text-dark text-dark">Frameworks & Libraries</h3>
          <div className="container-fluid p-4 row justify-content-center">
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" alt=""/>
          </div>


        </div>

        <div className="skill container-fluid p-5">
          <h3 className="row justify-content-center text-dark text-dark">Dev Tools</h3>
          <div className="container-fluid p-4 row justify-content-center">
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg" alt=""/>
            <button className="btn btn-link p-3 mt-5" onClick={() => {props.scrollToElement('project-one')}} ><svg className="ms-1 icon-arrow" xmlns="http://www.w3.org/2000/svg" height="0.875em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></button>
          </div>
          
        </div>
      </div>
      
    </div>

  );
};

export default Skills;

