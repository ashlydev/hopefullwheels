import "./ApplicationForm.css";
import SectionTitle from "./SectionTitle";
import { machineTraining, otherCourses } from "./../data/courses";
import { FaUserPlus } from "react-icons/fa";

export default function ApplicationForm() {
    const all = [
        ...machineTraining.map((c) => c.title),
        ...otherCourses.map((c) => c.title),
    ];

    return (
        <section id="apply" className="section alt">
            <div className="container formWrap">
                <SectionTitle
                    kicker="Apply"
                    title="Application Form"
                    sub="Fill in your details to apply. We will contact you with start dates and requirements."
                />

                <form
                    className="formCard"
                    name="application"
                    method="POST"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="application" />

                    <div className="row">
                        <div className="field">
                            <label>Full Name</label>
                            <input name="name" required />
                        </div>
                        <div className="field">
                            <label>Phone Number</label>
                            <input name="phone" placeholder="07..." required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="field">
                            <label>Course</label>
                            <select name="course" required>
                                <option value="">Select a course</option>
                                {all.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label>City/Town</label>
                            <input name="city" placeholder="e.g. Zvishavane" required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="field">
                            <label>Preferred Start Date (optional)</label>
                            <input name="startDate" type="date" />
                        </div>
                        <div className="field">
                            <label>Accommodation Needed?</label>
                            <select name="accommodation" required>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label>Extra Notes (optional)</label>
                        <textarea name="notes" rows="4" placeholder="Anything we should know?" />
                    </div>

                    <button className="btn btnPrimary submit" type="submit">
                        <FaUserPlus /> Submit Application
                    </button>

                    <p className="hint">
                        After submission, we will confirm start dates, payments, and what to bring.
                    </p>
                </form>
            </div>
        </section>
    );
}