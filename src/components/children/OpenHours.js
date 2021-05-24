
const OpenHours = ({text,time}) => {
    return (
        <div className="open-hours-container">
            <p>{text}</p>
            <div className = "hours-container">
                <p>{time}</p>
            </div>
        </div>
    )
}

export default OpenHours
