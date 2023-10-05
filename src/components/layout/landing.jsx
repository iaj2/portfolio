import './landing.scss'
import Header from '../header/header'
import HeroSection from '../heroSection/heroSection'
import ExperienceSection from '../experienceSection/experienceSection'
import ProjectSection from '../ProjectSection/projectSection'
import AboutSection from '../aboutSection/aboutSection'
import Footer from '../footer/footer'

const Landing = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ExperienceSection />
            <ProjectSection />
            <AboutSection />
            <Footer />
        </>
    
    )
}

export default Landing