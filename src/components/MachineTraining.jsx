import "./MachineTraining.css";
import SectionTitle from "./SectionTitle";
import CourseCard from "./CourseCard";
import { machineTraining } from "../data/courses";
import { FaHardHat, FaTruckMonster, FaShieldAlt } from "react-icons/fa";

export default function MachineTraining() {
    return (
        <section id="machine" className="section">
            <div className="container">
                <SectionTitle
                    kicker="Main Business"
                    title="Heavy Machine Training"
                    sub="All machine training packages are 2 weeks. Practical training + safety focus. Enquire to book your start date."
                />

                <div className="machineHighlights">
                    <div className="hl">
                        <FaHardHat />
                        <div>
                            <strong>Hands-on Training</strong>
                            <span>Real machine practice with guidance</span>
                        </div>
                    </div>
                    <div className="hl">
                        <FaShieldAlt />
                        <div>
                            <strong>Safety First</strong>
                            <span>Worksite rules + safe operation</span>
                        </div>
                    </div>
                    <div className="hl">
                        <FaTruckMonster />
                        <div>
                            <strong>Job-ready Skills</strong>
                            <span>Confidence to operate professionally</span>
                        </div>
                    </div>
                </div>

                <div className="grid machineGrid">
                    {machineTraining.map((c) => (
                        <CourseCard key={c.title} course={c} highlight />
                    ))}
                </div>
            </div>
        </section>
    );
}