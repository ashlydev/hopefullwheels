import "./WhyUs.css";
import SectionTitle from "./SectionTitle";
import { FaCertificate, FaBed, FaUtensils, FaUserCheck, FaTools } from "react-icons/fa";

export default function WhyUs() {
    return (
        <section id="why" className="section">
            <div className="container">
                <SectionTitle
                    kicker="Why Choose Us"
                    title="Professional Training • Real Results"
                    sub="We focus on practical skills, safety, and confidence. Certification is provided after completion."
                />

                <div className="grid whyGrid">
                    <div className="whyCard">
                        <FaCertificate />
                        <h3>Certification</h3>
                        <p>Receive certification after successful completion of your course.</p>
                    </div>
                    <div className="whyCard">
                        <FaTools />
                        <h3>Practical Skills</h3>
                        <p>Hands-on training designed to make you job-ready.</p>
                    </div>
                    <div className="whyCard">
                        <FaUserCheck />
                        <h3>Supportive Training</h3>
                        <p>Guidance throughout your training journey and clear learning steps.</p>
                    </div>
                    <div className="whyCard">
                        <FaBed />
                        <h3>Accommodation</h3>
                        <p>Accommodation is available for students coming from outside Zvishavane.</p>
                    </div>
                    <div className="whyCard">
                        <FaUtensils />
                        <h3>Food Provided</h3>
                        <p>Food is provided (where applicable) to support your stay and learning.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}