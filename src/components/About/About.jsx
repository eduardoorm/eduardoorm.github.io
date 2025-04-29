import React from 'react'
import "./About.css"

export const About = () => {
  return (
    <section className='sectionAbout' id='about'>
                <h2>About</h2>
                    <p className='textAbout'>Backend Developer con más de 3 años de experiencia desarrollando soluciones escalables en
                       Node.js/NestJS, especializado en sistemas de pago, automatización y microservicios. Microsoft MVP, GitHub 
                       Campus Expert y GDG Organizer con trayectoria como expositor nacional en eventos tecnológicos. Líder EdTech con habilidades 
                       comprobadas en colaboración ágil y enfoque hacia arquitectura Cloud e Inteligencia Artificial.
                    </p>
                    <figure className='figureAbout'>
                         <img className='imgAbout' src='/images/talks/ng_conf.jpg'></img>
                    </figure>
    </section>
  )
}
