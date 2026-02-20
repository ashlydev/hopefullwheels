import "./EnquiryForm.css";
import SectionTitle from "./SectionTitle";
import { machineTraining, otherCourses } from "../data/courses";
import { FaPaperPlane } from "react-icons/fa";

export default function EnquiryForm() {
    const all = [
        ...machineTraining.map((c) => c.title),
        ...otherCourses.map((c) => c.title),
    ];

    return (
        <section id="enquiry" className="section">
            <div className="container formWrap">
                <SectionTitle
                    kicker="Contact"
                    title="Enquiry Form"
                    sub="Ask about prices, start dates, accommodation, or any course."
                />

                <form
                    className="formCard"
                    name="enquiry"
                    method="POST"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="enquiry" />

                    <div className="row">
                        <div className="field">
                            <label>Full Name</label>
                            <input name="name" placeholder="Your name" required />
                        </div>
                        <div className="field">
                            <label>Phone Number</label>
                            <input name="phone" placeholder="07..." required />
                        </div>
                    </div>

                    <div className="field">
                        <label>Course Interested In</label>
                        <select name="course" required>
                            <option value="">Select a course</option>
                            {all.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>

                    <div className="field">
                        <label>Message</label>
                        <textarea name="message" rows="5" placeholder="Type your question..." required />
                    </div>

                    <button className="btn btnPrimary submit" type="submit">
                        <FaPaperPlane /> Send Enquiry
                    </button>

                    <p className="hint">
                        Tip: You can also use the WhatsApp button for fast replies.
                    </p>
                </form>
            </div>
        </section>
    );
}