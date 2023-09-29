import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <section className='sectionFooter'>
        <h2>Contact with me</h2>
        <figure className='figureSmileFooter'>
            <img src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png'></img>
        </figure>
        <section className='sectionContact'>
            <a href='https://github.com/eduardoorm' target='_blank'>
                <figure className='figureSectionContact'>
                    <img src='./images/redes/github.svg'></img>
                    <h5>GitHub</h5>
                </figure>
            </a>
            <a href='https://www.linkedin.com/in/jose-orme%C3%B1o/' target='_blank'>
                <figure className='figureSectionContact'>
                    <img src='./images/redes/linkedin.svg'></img>
                    <h5>LinkedIn</h5>
                </figure>
            </a>
            <a href='mailto:eduardoorm79@gmail.com' target='_blank'>
                <figure className='figureSectionContact'>
                    <img src='./images/redes/gmail.svg'></img>
                    <h5>Gmail</h5>
                </figure>
            </a>
            <a href='https://medium.com/@eduardo_mjo' target='_blank'>
                <figure className='figureSectionContact'>
                    <img src='./images/redes/medium.svg'></img>
                    <h5>Medium</h5>
                </figure>
            </a>
        </section>
        <footer className='footer'>
            <h5>Made with
                <img src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png' width={40} height={40}/>
                by @eduardoorm</h5>
        </footer>
    </section>
  )
}
