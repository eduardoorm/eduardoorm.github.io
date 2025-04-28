import React from 'react'
import './Skillset.css'

export const Skillset = () => {
  return (
    <section className='skillSet'>
      <h2>Skillset</h2>
      <p>Programming Languages</p>
      <ul>
        <li>
           <img src='./images/skill/typescript.png'/>
           <span>TypeScript</span>
        </li>
        <li> 
           <img src='./images/skill/python.png'/>
           <span>Python</span>
        </li>
        <li> 
           <img src='./images/skill/java.png'/>
           <span>Java</span>
        </li>
        <li> 
           <img src='./images/skill/js.png'/>
            <span>JavaScript</span>
        </li>
      </ul>

      <p>Frontend Tools</p>
      <ul>
        <li> 
          <img src='./images/skill/react.png'/>
          <span> ReactJs</span>
        </li>
      </ul>
      <p>Backend Tools</p>
      <ul>
        <li> 
          <img src='./images/skill/nestjs.png'/>
          <span>Nest Js</span>
        </li>
        <li>
           <img src='./images/skill/springboot.png'/>
           <span>Spring Boot</span>
        </li>
        <li>
           <img src='./images/skill/actions.png'/>
           <span>GitHub Actions</span>
        </li>
        <li>
           <img src='./images/skill/mongodb.svg'/>
           <span>Mongo DB</span>
        </li>
        <li>
           <img src='./images/skill/sqlserver.png'/>
           <span>SQL Server</span>
        </li>
      </ul>
      <p>Cloud Tools</p>
      <ul>
        <li> 
          <img src='./images/skill/azure.png'/>
          <span>Azure</span>
        </li>
        <li> 
          <img src='./images/skill/terraform.png'/>
          <span>Terraform</span>
        </li>
        </ul>
    </section>
  )
}
