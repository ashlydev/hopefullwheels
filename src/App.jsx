import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MachineTraining from "./components/MachineTraining";
import OtherCourses from "./components/OtherCourses";
import WhyUs from "./components/WhyUs";
import EnquiryForm from "./components/EnquiryForm";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWebsites";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MachineTraining />
        <OtherCourses />
        <WhyUs />
        <EnquiryForm />
        <ApplicationForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}