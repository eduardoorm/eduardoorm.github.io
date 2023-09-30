import React from 'react'
import "./About.css"

export const About = () => {
  return (
    <section className='sectionAbout' id='about'>
                <h2>About</h2>
                    <p className='textAbout'>Hello everyone, my name is Eduardo, 
                      I am a software developer based in Peru, <u><a href='https://githubcampus.expert/eduardoorm/'>GitHub Campus Expert</a></u>  and a graduate of systems engineering at <u><a href='https://www.unica.edu.pe/' target='_blank'>UNICA</a></u>,
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
