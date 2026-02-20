import "./Footer.css";
import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    const fbQuery = encodeURIComponent("Hopefullwheelstraining center");
    const wa = "263778136573";

    return (
        <footer className="foot">
            <div className="container footInner">
                <div className="col">
                    <h3>Hopefull Wheels Training Centre</h3>
                    <p>Kick it into gear! Practical training, certification after completion, and supportive learning.</p>
                </div>

                <div className="col">
                    <h4>Contact</h4>
                    <a className="footLink" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">
                        <FaWhatsapp /> WhatsApp: 0778136573
                    </a>
                    <a className="footLink" href={`https://www.facebook.com/search/top?q=${fbQuery}`} target="_blank" rel="noreferrer">
                        <FaFacebookF /> Facebook Page
                    </a>
                    <div className="footLink">
                        <FaMapMarkerAlt /> Pelhams Building, behind Redan Service Station, upstairs Room A
                    </div>
                </div>

                <div className="col">
                    <h4>Quick Links</h4>
                    <a href="#machine">Machine Training</a>
                    <a href="#courses">Courses & Pricing</a>
                    <a href="#enquiry">Enquiry</a>
                    <a href="#apply">Application</a>
                </div>
            </div>

            <div className="container copy">
                © {new Date().getFullYear()} Hopefull Wheels Training Centre. All rights reserved.
            </div>
        </footer>
    );
}