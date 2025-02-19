import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import CustomCarousel from "./component/Carousel";
import SectionBloc from "./component/sectionBloc";
import Portfolio from "./component/Portfolio";
import WebDevelopment from "./component/WebDevelopment";
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";  // Import About Us
import Services from "./component/Services";
import ContactUs from "./component/ContactUs";
import DescriptionCard from "./component/DescriptionCard";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            
              <div className="">
                <CustomCarousel />
              </div>
            
            <SectionBloc />
              <div className="p-6 md:p-12 bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center justify-center">
                <DescriptionCard 
                  title="About Us" 
                  description="Founded in 2018, Rich IT has been at the forefront of digital transformation, delivering cutting-edge solutions in application development, web technologies, networking, IT consulting, and financial management. With a passion for innovation and a commitment to excellence, we empower businesses with smart, scalable, and efficient digital solutions. Over the years, we have built a reputation for providing top-tier IT services that drive growth, efficiency, and success. Our team of highly skilled professionals works tirelessly to craft tailored solutions that meet the evolving needs of businesses across various industries. At Rich IT, we believe in turning ideas into reality through technology. Whether you need custom software, a powerful online presence, robust IT infrastructure, or financial solutions, we have the expertise to make it happen. Join us as we continue to innovate, evolve, and shape the future of digital excellence! "
                  imageUrl="https://images.deepai.org/art-image/9874d2d14cbb4a6b927ffc51e0cc116f/networking-solutions-carousel-slide-visual-a-glowing-.jpg"
                />
              </div>
            <Portfolio />
            <WebDevelopment />
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
