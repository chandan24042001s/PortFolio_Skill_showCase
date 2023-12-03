import './Intro.css'
import React from 'react'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Twitter from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/Profile.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name' >
                <span>Hy! I Am</span>
                <span>Chandan Kumal</span>
                <span>Frontend Developer with high level of experience in web designing and development, producing the Auality work</span>


            </div>
            <button className='button i-button' >Hire me</button>
            <div className='i-icons' >
                <img src={Github} alt='github' />
                <img src={LinkedIn} alt='linkedin'/>
                <img src={Twitter} alt='twitter' />
            </div>
        </div>
        <div className='i-right' >
            <img className='profile_logo1' src={Vector1} alt=''/>
            <img className='profile_logo2' src={Vector2} alt='' />
            <img className='profile_logo' src={boy} alt='' /> 
            <img className='emoji' src={glassemoji} alt='' />
            <div className='blur' style={{background:'rgb(238,210,255'}} ></div>
            <div className='blur' style={{background:'#C1F5FF', top:'17rem',width:'21rem',
                height:'11rem',left:'-9rem'
                }} ></div>
            <div style={{top:'4%',left:'68%'}}>
                <FloatingDiv image={Crown} text1="Web" text2="Developer"/>
            </div>
            <div style={{top:'18rem',left:'0rem'}} >
                <FloatingDiv image={thumbup} text1="Best Design" text2="Award"/>
            </div>
        </div>
    </div>
  )
}

export default Intro