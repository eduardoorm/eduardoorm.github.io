import React from 'react'
import "./About.css"

export const About = () => {
  return (
    <section className='sectionAbout'>
                <h2>About</h2>
                    <p className='textAbout'>Hello everyone, my name is Eduardo, 
                      I am a software developer based in Peru, GitHub Campus Expert and a graduate of systems engineering at UNICA,
                      I am passionate about the world of computing, especially data and competitive programming. 
                      I am currently practicing for programming contests and I also collaborate in local and national 
                      software communities. I never want to stop learning and teaching. My dream is to be a machine learning engineer.
                    </p>
                    <figure className='figureAbout'>
                         <img className='imgAbout' src='/images/imgAbout.png'></img>
                    </figure>
    </section>
  )
}
