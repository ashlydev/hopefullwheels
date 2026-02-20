import  "./SectionTitle.css";

export default function SectionTitle({ kicker, title, sub }) {
    return (
        <div className="titleWrap">
            {kicker && <span className="kicker">{kicker}</span>}
            <h2>{title}</h2>
            {sub && <p>{sub}</p>}
        </div>
    );
}