
import '../../styles/components/trainings.css'
export default function Trainings({props}) {
        return (
            <div className="training-template">
                <h3 className="title">{props.title}</h3>
                <div className="venue">
                    <span className="date">Date: {props.date}</span><br />
                    <span className="venue">Venue: {props.venue}</span>
                    <span> | </span>
                    <span className="time">{props.time || "10AM to 2PM" }</span>
                </div>
                <p className="training-info">{props.desc}</p>
            </div>
        )
    }
