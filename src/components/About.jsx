import '../styles/about.css';

const About = (props) => {

  return(
    <div className='about-container container d-flex flex-column justify-content-center align-items-start' id="aboutId">
        <h2 className='text-dark-emphasis p-3'>My name is <strong>Arshya.</strong></h2>
        <h4 className='text-dark-emphasis p-3'>I’m a <strong>software developer</strong> with an educational background in mathematics, statistics, and computer science.</h4>
        <h4 className='text-dark-emphasis p-3'>Check out my projects and skills bellow!</h4>
    </div>
  );
};


export default About;