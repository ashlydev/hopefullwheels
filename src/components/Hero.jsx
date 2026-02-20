import "./Hero.css";
import { motion } from "framer-motion";
import { FaCertificate, FaMapMarkerAlt, FaBed, FaUtensils } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="top" className="hero">
            <div className="container heroInner">
                <motion.div
                    className="heroLeft"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="pill">
                        <FaCertificate /> Certification after completion
                    </span>

                    <h1>
                        HOPEFULL WHEELS <span>TRAINING CENTRE</span>
                    </h1>
                    <p className="tagline">Kick it into gear!</p>

                    <p className="sub">
                        Practical skills training for machine operators and high-demand trades.
                        Accommodation and food available for those out of Zvishavane.
                    </p>

                    <div className="heroCtas">
                        <a className="btn btnPrimary" href="#apply">Apply Now</a>
                        <a className="btn btnGhost" href="#machine">View Machine Training</a>
                    </div>

                    <div className="heroInfo">
                        <div className="infoCard">
                            <FaMapMarkerAlt />
                            <div>
                                <strong>Address</strong>
                                <span>Pelhams Building, behind Redan Service Station, upstairs Room A</span>
                            </div>
                        </div>
                        <div className="infoCard">
                            <FaBed />
                            <div>
                                <strong>Accommodation</strong>
                                <span>Available for out-of-town students</span>
                            </div>
                        </div>
                        <div className="infoCard">
                            <FaUtensils />
                            <div>
                                <strong>Food</strong>
                                <span>Provided where applicable</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="heroRight"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="heroPanel">
                        <div className="glow" />
                        <h3>Main Courses</h3>
                        <p>Heavy Machine Training • 2 weeks • Practical + Safety</p>
                        <div className="heroBadges">
                            <span>Excavator</span>
                            <span>Mobile Crane</span>
                            <span>Grader</span>
                            <span>Drill Rig</span>
                            <span>TLB</span>
                            <span>Loader</span>
                            <span>Tipper</span>
                        </div>
                        <a className="btn btnPrimary heroBtn" href="#enquiry">Make an Enquiry</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}