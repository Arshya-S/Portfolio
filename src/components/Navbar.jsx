import '../styles/nav.css'
const Navbar = (props) => {
  return (
    <nav class="navbar navbar-color navbar-expand-md">
      <div class="container-fluid">
        <button className="navbar-brand btn btn-link text-light" onClick={() => props.scrollToElement('aboutId')}>Arshya Soleimani</button>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <button className="nav-link btn btn-link text-light" onClick={() => props.scrollToElement('aboutId')}>About</button>
            </li>
            <li class="nav-item">
              <button className="nav-link btn btn-link text-light" onClick={() => props.scrollToElement('skillsId')}>Skills</button>
            </li>
            <li class="nav-item">
              <button className="nav-link btn btn-link text-light" onClick={() => props.scrollToElement('projectsId')}>Projects</button>
            </li>
            <li class="nav-item">
              <a className="nav-link btn btn-link text-light" href='https://github.com/Arshya-S' target="_blank" rel="noopener noreferrer">Github</a>
            </li>
            <li class="nav-item">
              <a className="nav-link btn btn-link text-light" href='https://www.linkedin.com/in/arshya-soleimani-b586141b2/' target="_blank" rel="noopener noreferrer">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






