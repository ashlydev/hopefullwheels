import "./Navbar.css";
import logo from "../assets/logo.jpg"
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // lock body scroll when sidebar open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [open]);

    const fbQuery = encodeURIComponent("Hopefullwheelstraining center");

    const close = () => setOpen(false);

    return (
        <>
            <header className={`navWrap ${scrolled ? "scrolled" : ""}`}>
                <div className="container nav">
                    <a className="brand" href="#top" onClick={close}>
                        <span className="brandMark"><img src={logo} alt="logo"/></span>
                        <div className="brandText">
                            <strong>Hopefull Wheels</strong>
                            <span>Training Centre</span>
                        </div>
                    </a>

                    {/* Desktop links */}
                    <nav className="links">
                        <a href="#machine">Machine Training</a>
                        <a href="#courses">Courses</a>
                        <a href="#why">Why Us</a>
                        <a href="#enquiry">Enquiry</a>
                        <a href="#apply" className="applyLink">Apply</a>
                    </nav>

                    <div className="right">
                        <a
                            className="social"
                            href={`https://www.facebook.com/search/top?q=${fbQuery}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a className="btn btnPrimary ctaDesktop" href="#apply">
                            Apply Now
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            className="menuBtn"
                            onClick={() => setOpen(true)}
                            aria-label="Open menu"
                        >
                            <FiMenu />
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            <div className={`overlay ${open ? "show" : ""}`} onClick={close} />

            {/* Sidebar */}
            <aside className={`sidebar ${open ? "open" : ""}`} aria-hidden={!open}>
                <div className="sideTop">
                    <div className="sideBrand">
                        <span className="brandMark">HW</span>
                        <div className="brandText">
                            <strong>Hopefull Wheels</strong>
                            <span>Training Centre</span>
                        </div>
                    </div>

                    <button className="closeBtn" onClick={close} aria-label="Close menu">
                        <FiX />
                    </button>
                </div>

                <div className="sideLinks">
                    <a href="#machine" onClick={close}>Machine Training</a>
                    <a href="#courses" onClick={close}>Courses & Pricing</a>
                    <a href="#why" onClick={close}>Why Us</a>
                    <a href="#enquiry" onClick={close}>Enquiry</a>
                    <a href="#apply" onClick={close} className="sideApply">Apply Now</a>
                </div>

                <div className="sideSocial">
                    <a
                        className="sideFb"
                        href={`https://www.facebook.com/search/top?q=${fbQuery}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebookF /> Facebook
                    </a>
                </div>
            </aside>
        </>
    );
}