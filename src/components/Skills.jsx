import "../styles/icon.css"
import "../styles/skills.css"

const Skills = () => {

  return (
    <div className="container-fluid skills-container d-flex flex-column justify-content-center" id="skillsId">
      <div className="skills row">
        <div className="container-fluid col align-items-center justify-content-center">
          
         
          <h3 className="container mt-5 row justify-content-center text-dark">Languages</h3>
          <div className="container mt-5 row justify-content-center">
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt=""/>
          </div>

          <div className="container mt-5 row justify-content-center">
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt=""/>
          </div>

          <div className="container mt-5 row justify-content-center">
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt=""/>
          </div>

        </div>

        <div className="col">

          <h3 className="container mt-5 row justify-content-center text-dark text-dark">Frameworks & Libraries</h3>
          <div className="container-fluid mt-5 row justify-content-center">
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt=""/>
          </div>

          <div className="container-fluid mt-5 row justify-content-center">
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt=""/>
          </div>

          <div className="container-fluid mt-5 row justify-content-center">
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" alt=""/>
          </div>


        </div>

        <div className="col">

          <h3 className="container mt-5 row justify-content-center text-dark text-dark">Dev Tools</h3>
          <div className="container-fluid mt-5 row justify-content-center">
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt=""/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

