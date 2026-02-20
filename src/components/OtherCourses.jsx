import "./OtherCourses.css";
import SectionTitle from "./SectionTitle";
import CourseCard from "./CourseCard";
import { otherCourses } from "../data/courses";

export default function OtherCourses() {
    return (
        <section id="courses" className="section alt">
            <div className="container">
                <SectionTitle
                    kicker="More Skills"
                    title="Courses & Pricing"
                    sub="Tap a course to view details. Learn More shows the course description; Hide collapses it."
                />

                <div className="grid courseGrid">
                    {otherCourses.map((c) => (
                        <CourseCard key={c.title} course={c} />
                    ))}
                </div>
            </div>
        </section>
    );
}