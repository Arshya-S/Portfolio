import '../styles/about.css';

const About = (props) => {

  return(
    <div className='about-container container d-flex flex-column justify-content-center align-items-center' id="aboutId">
        <h2 className='text-dark-emphasis p-4'>My name is <strong>Arshya</strong></h2>
        <h4 className='text-dark-emphasis p-4'>I’m a <strong>software developer</strong></h4>
        <h4 className='text-dark-emphasis p-4'>My educational background is in <strong>mathematics</strong>, <strong>statistics</strong> and <strong>software devlopment</strong></h4>
        <h4 className='text-dark-emphasis p-4'>Check out my skills and projects bellow! </h4>
        <button className="btn btn-link" onClick={() => {props.scrollToElement('skillsId')}} ><svg className="ms-1 icon-arrow" xmlns="http://www.w3.org/2000/svg" height="0.875em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></button>
    </div>
  );
};


export default About;