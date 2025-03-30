import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CloudSolutions from "./components/Services/CloudSolutions";
import ServerManagement from "./components/Services/ServerManagement";
import NetworkSecurity from "./components/Services/NetworkSecurity";
import SoftwareDevelopment from "./components/Services/SoftwareDevelopment";
import ITConsulting from "./components/Services/ITConsulting";
import DataAnalytics from "./components/Services/DataAnalytics";
import ServicesLayout from "./components/Services/ServicesLayout";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Testimonials from "./components/Pages/Testimonial";
import FAQSection from "./components/Pages/FAQSection";
import Navbar from "./components/Pages/Navbar";
import Services from "./components/Pages/Services";
import ServicesPage from "./components/Pages/ServicesPage";
import Testimonial from "./components/Pages/Testimonial";
import Hero from "./components/Pages/Hero";
import Footer from "./components/Pages/Footer";
import IoTDrivenDigitalTransformation from "./components/Services/IoTDrivenDigitalTransformation";

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Testimonial />
    <ServicesPage />
    <Contact />
    <FAQSection />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="App  text-white mt-10">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services-page" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/services" element={<ServicesLayout />}>
            <Route index element={<Services />} /> {/* Default services page */}
            <Route path="cloud-solutions" element={<CloudSolutions />} />
            <Route path="server-management" element={<ServerManagement />} />
            <Route path="data-analytics" element={<DataAnalytics />} />
            <Route path="it-consultancy" element={<ITConsulting />} />
            <Route path="network-security" element={<NetworkSecurity />} />
            <Route
              path="iot-driven-digital-transformation"
              element={<IoTDrivenDigitalTransformation />}
            />
            <Route
              path="software-development"
              element={<SoftwareDevelopment />}
            />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
