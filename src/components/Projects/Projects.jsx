import React, { useEffect, useState } from 'react';
import './Projects.css';
import ProjectModal from '../../commons/ProjectModal';

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data.projects))
            .catch((error) => console.error('Error al cargar los proyectos:', error));
    }, []);

    return (
        <section className='sectionProjects' id='projects'>
            <h2>Projects</h2>
            <section className='container-projects'>
                <div className='container-card'>
                    {projects.map((project, index) => (
                    <ProjectModal project={project} key={index}>

                    </ProjectModal>
                    ))}
                </div>
                <figure className='figureProject'>
                    <img src='./images/projectImg.svg' alt='Project' />
                </figure>
            </section>
        </section>
    );
};