import React from 'react'
import './Projects.css'

export const Projects = () => {
    return (
        <section className='sectionProjects'>
            <h2>Projects</h2>
            <section className='container-projects'>
                <div className='container-card'>
                    <div className='card'>
                        <a href="#">
                            <figure className='figureCard'>
                                <img src='./images/cardImg.png' alt='Avocado' />
                            </figure>
                            <h5>Avocados</h5>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                            <figure className='figureCard'>
                                <img src='./images/cardImg.png' alt='Avocado' />
                            </figure>
                            <h5>Avocados</h5>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                            <figure className='figureCard'>
                                <img src='./images/cardImg.png' alt='Avocado' />
                            </figure>
                            <h5>Avocados</h5>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                            <figure className='figureCard'>
                                <img src='./images/cardImg.png' alt='Avocado' />
                            </figure>
                            <h5>Avocados</h5>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                            <figure className='figureCard'>
                                <img src='./images/cardImg.png' alt='Avocado' />
                            </figure>
                            <h5>Programación Funcional</h5>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                            <figure className='figureCard'>
                                <img src='./images/cardImg.png' alt='Avocado' />
                            </figure>
                            <h5>Avocados</h5>
                        </a>
                    </div>
                </div>
                <figure className='figureProject'>
                    <img src='./images/projectImg.svg' alt='Project' />
                </figure>
            </section>
        </section>
    );
};
