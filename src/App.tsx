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

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            
              <div className="mt-22">
                <CustomCarousel />
              </div>
            
            <SectionBloc />
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
