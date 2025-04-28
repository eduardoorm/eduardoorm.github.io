import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";
import '../components/Projects/Projects.css';

const ProjectModal = ({project, index}) => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<button className=""> 
         <div className='card' key={index}>
              <a href={project.link}>
                <figure className='figureCard'>
                <img src={project.image} />
                </figure>
                <h5>{project.title}</h5>
              </a>
         </div>
      </button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="DialogOverlay" />
			<Dialog.Content className="DialogContent">
				<Dialog.Title className="DialogTitle">{project.title}</Dialog.Title>
				<Dialog.Description className="DialogDescription">
					{project.description}
				</Dialog.Description>

        <div className="links">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              Ver en GitHub
            </a>
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                Ver Demo
              </a>
            )}
          </div>
				
        <div className="technologies">
            <h4>Tecnologías usadas:</h4>
            <ul>
              {project.technologies?.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
        </div>

				<div
					style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
				>
					<Dialog.Close asChild>
						<button className="Button green">Cerrar</button>
					</Dialog.Close>
				</div>
				<Dialog.Close asChild>
					<button className="IconButton" aria-label="Close">
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);

export default ProjectModal;
