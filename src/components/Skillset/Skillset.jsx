import React from 'react'
import './Skillset.css'

export const Skillset = () => {
  return (
    <section className='skillSet'>
      <h2>Skillset</h2>
      <p>Programming Languages</p>
      <ul>
        <li>
           <img src='./images/skill/c++.png'/>
           <span>C++</span>
        </li>
        <li> 
           <img src='./images/skill/python.png'/>
           <span>Python</span>
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
        <li>
          <img src='./images/skill/svelte.png'/>
          <span>SvelteJs</span>
        </li>
      </ul>
      <p>Backend Tools</p>
      <ul>
        <li> 
          <img src='./images/skill/fastApi.png'/>
          <span>FastAPI</span>
        </li>
        <li>
           <img src='./images/skill/flask.png'/>
           <span>Flask</span>
        </li>
      </ul>
      <p>ML Tools</p>
      <ul>
        <li> 
          <img src='./images/skill/numpy.png'/>
          <span>Numpy</span>
        </li>
        <li> 
          <img src='./images/skill/pandas.png'/>
          <span>Pandas</span>  
        </li>
        <li> 
          <img src='./images/skill/sickit.png'/>
          <span>ScikitLearn</span>  
        </li>
        <li> 
        <img src='./images/skill/tensorflow.png'/>
          <span>TensorFlow</span>  
        </li>
      </ul>
    </section>
  )
}
