import Navbar from './Home/components/Navbar';
import Hero from './Home/components/Hero';
import AboutUsSection from './Home/components/AboutUsSection'
import TutoringSection from './Home/components/TutoringSection'
import OurModules from './Home/components/OurModules';
import OurCourses from './Home/components/OurCourses';
import Testimonials from './Home/components/Testimonials';
import MeetTeachersStudents from './Home/components/MeetTeachersStudents';
import CTASection from './Home/components/CTASection';
import Footer from './Home/components/Footer';


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <AboutUsSection/>
      <TutoringSection/>
      <OurModules />
      <OurCourses />
      <MeetTeachersStudents />
      <Testimonials />
      <CTASection/>
      <Footer />
    </div>
  );
}
