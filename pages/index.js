import Navbar from '../components/Navbar';
import About from '../components/about';
import Contact from '../components/contact';
import Content from '../components/content'
import Course from '../components/courses';
import Footer from '../components/footer';
import LogoComponent from '../components/logo';
import GetIn from '../components/getIn';
import Testimonials from '../components/testimonials';
import Talk from '../components/talk';
import Services from '../components/services';
import AnimatedHero from '../components/hero';
import PerfumePromoSection from '../components/promotion';



export default function Home() {
  return (
    <div>
      
      <Navbar />
      <AnimatedHero />
      <PerfumePromoSection/>
     

      <About />
      {/* <Course/>
      <GetIn/> */}
      <Testimonials/>
      <Talk/>
      
 

      <Footer/>
    </div>
  );
}
