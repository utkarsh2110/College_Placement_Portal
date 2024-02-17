
import './trainings.css'
export default function Trainings(props){
    if (props.title == undefined)
    return "" 
    else
    return(
        <div className="training-template">
        <h3 className="title">{props.title}</h3>
        <div className="venue">
            <span className="venue">Venure: {props.venue}</span>
            <span className="date">Date: {props.date}</span><br/>
            <span> | </span>
            <span className="time">{props.startTime} to {props.endTime}  </span>
        </div>
        <p className="training-info">{props.desc}</p>
        </div>
    )
}