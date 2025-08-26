
// import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectsMain from './components/projectsSection.jsx/ProjectsMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import FooterMain from './components/footer/FooterMain'
import Test1 from './components/Test1'
import {motion} from 'framer-motion'

function App() {

  return (
    <motion.main
    // initial={{ opacity: 0 }}  // وضعیت اولیه: نامرئی
    //     animate={{ opacity: 1 }}  // وضعیت نهایی: مرئی
    //     transition={{ duration: 5,type: "spring" }}  // مدت زمان: ۰.۵ ثانیه
    className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain/>
     <FooterMain/>
{/* <Test1/> */}

      <HelperSection />
    </motion.main>
  )
}

export default App
