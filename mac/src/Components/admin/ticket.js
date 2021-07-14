import '../admin/test1.css'


export default function Ticket(props) {
  return (
    <article className="ticket">
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h3>Booking Card</h3>
              <p>medical history: {props.chronicDisease}</p>
              <p>firstName: {props.firstName}</p>
              <p>lastName: {props.lastName}</p>
              <p>section: {props.section}</p>
              <p>day: {props.day}</p>
              <p>time:{new Date(props.created_at).toLocaleDateString()}</p>
              <button onClick={() => props.handleClaim(props.id, props.socketId)}>Claim</button>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>







{/* 

      <h2>Booking Card</h2>
      <p>medical history: {props.chronicDisease}</p>
      <p>firstName: {props.firstName}</p>
      <p>lastName: {props.lastName}</p>
      <p>section: {props.section}</p>
      <p>day: {props.day}</p>
      <p>time:{new Date(props.created_at).toLocaleDateString()}</p>
      <button onClick={() => props.handleClaim(props.id, props.socketId)}>Claim</button> */}
    </article>
  )
}