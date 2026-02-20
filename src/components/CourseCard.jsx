import "./CourseCard.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaMoneyBillWave, FaInfoCircle } from "react-icons/fa";

export default function CourseCard({ course, highlight }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            className={`courseCard ${highlight ? "highlight" : ""}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
        >
            <div className="courseTop">
                <h3>{course.title}</h3>
                <div className="meta">
                    <span className="metaItem">
                        <FaClock /> {course.duration || "TBA"}
                    </span>
                    <span className="metaItem">
                        <FaMoneyBillWave /> {course.price != null ? `$${course.price}` : "Price: TBA"}
                    </span>
                </div>
            </div>

            {course.description && (
                <>
                    {open && (
                        <p className="desc">
                            <FaInfoCircle className="infoIco" />
                            {course.description}
                        </p>
                    )}
                    <button className="linkBtn" onClick={() => setOpen(!open)}>
                        {open ? "Hide" : "Learn More"}
                    </button>
                </>
            )}
        </motion.div>
    );
}