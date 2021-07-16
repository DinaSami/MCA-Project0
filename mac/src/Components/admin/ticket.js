import '../admin/test1.css'


export default function Ticket(props) {
  return (
    <article className="ticket">
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h3>Booking Card</h3>
              <p>medical history: {props.chronicDisease}</p>
              <p>firstName: {props.firstName}</p>
              <p>lastName: {props.lastName}</p>
              <p>section: {props.section}</p>
              <p>day: {props.day}</p>
              <p>time:{new Date(props.created_at).toLocaleDateString()}</p>
              <button onClick={() => props.handleClaim(props.id, props.socketId)}>Claim</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}