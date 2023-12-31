import React from 'react'
import './intro.css'
import bg from '../../assets/Samuel.png'
import {Link} from 'react-scroll'
import BtnImg from '../../assets/hireme.png'


const Intro = () => {
  return (
    <section id="intro">
        <div className="IntroContent">
            <span className="Hello">Hello</span>
            <span className="IntroText">I'm  <span className="IntroName">Samuel</span> <br />Software Engineer </span>
            <p className="IntroParagraph">I'm and Skilled Engineer quick witted, loves puzzles <br /> and telling story with data.</p>
            <Link><button className="btn" onClick={() => {
          document.getElementById('Contact').scrollIntoView({behavior: 'smooth'});
        } }><img src={BtnImg} alt="HireMe" className='BtnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className='bg' />


    </section>
  )
}

export default Intro;