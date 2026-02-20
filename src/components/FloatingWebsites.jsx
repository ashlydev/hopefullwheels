import "./FloatingWebsites.css";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
    const phone = "263778136573"; // best for wa.me
    const msg = encodeURIComponent("Hi Hopefull Wheels Training Centre, I want to enquire about training.");
    const link = `https://wa.me/${phone}?text=${msg}`;

    return (
        <a className="waFloat" href={link} target="_blank" rel="noreferrer" aria-label="WhatsApp Enquiry">
            <FaWhatsapp />
            <span>WhatsApp</span>
        </a>
    );
}