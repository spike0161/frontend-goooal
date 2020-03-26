import React from 'react'
import github from '../images/github.png'


const About = (props) => {

  return (

    <div className="about-container">
    <img src="https://media-exp1.licdn.com/dms/image/C5603AQHfHgEetxP9Yg/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=Ch-wb7UspDO1_tsymanGev-HSDj2icfak3iQVCYCQ2o" alt="Profile Picture" id="profile-pic"/>
    <h3>Dean Hildebrand</h3>
    <p>Fullstack Software Engineer</p>

    <a href="https://github.com/spike0161">
    <i className="fas fa fa-github"></i></a>

      <a href="https://www.linkedin.com/in/hildebranddean/">
      <i class="fab fa-linkedin"></i></a>

    </div>
  )
}

export default About
