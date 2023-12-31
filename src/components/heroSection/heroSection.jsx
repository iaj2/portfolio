import './heroSection.scss'
import { HashLink as Link } from 'react-router-hash-link'
import ContactFormModal from '../modals/contactForm/contactForm'
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedIn.svg'
import { ReactComponent as GitHubIcon } from '../../assets/icons/github.svg'
import { ReactComponent as RightArrowIcon } from '../../assets/icons/right-arrow.svg'
import resumePdf from '../../assets/resume/IsaacJamesResume.pdf'
import meImg from '../../assets/images/me.jpg'

const HeroSection = () => {
    
    return (
    <div className='hero-section-container'>
        <div className='hero-section-grid'>
            <div className='intro'>
                <p className='title'>Software Developer and Computer Science Student.</p>
                <p className='text-smaller'>Confident with <b>Python, React, C++</b> and <b>JavaScript.</b></p>
            </div>
            <div className='image'>
                <div className='img-back-drop'>
                    <div className="img-container">
                        <img src={meImg} alt=""></img>
                    </div>
                    
                </div>
            </div>
            <div className='school'>
                <p>SFU Comp Sci BSc <span>• 2022-2026</span></p>
            </div>
            <div className='connect'>
                <a href='https://www.linkedin.com/in/isaac-james-62765a278/' rel="noreferrer" target='_blank' className='social linkedIn'>
                {<LinkedInIcon />}
                </a>
                <a href='https://github.com/iaj2' rel="noreferrer" target='_blank' className='social github'>
                {<GitHubIcon />}
                </a>
                    
                <button className='resume-button' id='resume'>
                    <a href={resumePdf} rel="noreferrer" target='_blank' download={resumePdf}>RESUME</a>
                </button>
                <ContactFormModal />
            </div>
            <div className='about-cta'>
                <button className='about-cta-button' id='about-cta'>
                    MORE ABOUT ME
                    <Link className='anchor' to='/#about-section'> 
                        
                    </Link>
                    {<RightArrowIcon />}
                </button>
            </div>
        </div>
    </div>
    )
}

export default HeroSection