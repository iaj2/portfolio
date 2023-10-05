import './aboutSection.scss'
import ContactFormModal from '../modals/contactForm/contactForm'

const AboutSection = () => {

    return (
        <div id='about-section' className='about-section'>
            <div className="about-title-container">
                <h1 className="about-title">About Me</h1>
            </div>
            <div className='about-wrapper'>
                <div className='about-container'>
                    <div className='text-container'>
                    <span className='text-larger header-text'><b>Hi, I’m Isaac :) </b></span>  Let me tell you a bit about myself.
                    <br></br><br></br><br></br>
                    <span className='text-large'><b>I'm Interested in...</b></span> 
                    <br></br> <br></br>
                    🚀 Exploring full stack and product management roles, merging my love for technology and business. I'm passionate about the big picutre in developing products people love. 
                    Excitedly navigating my second year of university, I'm open to diverse opportunities! 
                    <br></br><br></br>
                    <span className='text-large'><b>My other passions... </b></span>
                    <br></br> <br></br>
                    💪 I'm a gym enthusiast, using it to enhance my focus and discipline while relieving stress.
                    <br></br> <br></br>
                    🤽‍♂️ I used to play competitive water polo, achieving accolades like "Most Improved Player" and "Most Valuable Defender," along with winning a Western Conference final. 
                    I also have experience in competitive volleyball at provincial and national levels, and I still enjoy recreational play.
                    <br></br> <br></br>
                    📈 Recently, I've developed a keen interest in learning about entrepreneurship and business
                     through YouTube's entrepreneurial success stories and founder interviews.
                     <br></br><br></br>
                    🍿 I'm a big movie buff, always up for watching the latest releases, especially in theaters.
                    <br></br> <br></br><br></br>
                    <span className='text-larger '><b>Let's get connected!</b></span>
                    </div>
                    <div className='image-container footer-text'>
                    </div>
                </div>
            </div>
            <div className='button-container'>
                <ContactFormModal />
            </div>
            
        </div>
    )
}

export default AboutSection