import '../styles/about.css';

const About = (props) => {

  return(
    <div className='container-fluid about-container d-flex flex-column justify-content-center align-items-center' id="aboutId">
      <div className='about container d-flex flex-column justify-content-center allign-items-center'>
        <h2 className='text-dark-emphasis mb-4'>My name is <strong>Arshya.</strong></h2>
        <br />
        <h4 className='text-dark-emphasis mt-4'>I’m a <strong>software developer</strong> with an educational background in mathematics, statistics, and computer science.</h4>
        <br />

        <h4 className='text-dark-emphasis mt-4'>Check out my projects and skills bellow!</h4>

      </div>
    </div>
  );
};


export default About;