export default function Ticket(props){
  return(
    <article className="ticket">
      <h2>Booking Card</h2>
      <p>medical history: {props.chronicDisease}</p>
      <p>firstName: {props.firstName}</p>
      <p>lastName: {props.lastName}</p>
      <p>section: {props.section}</p>
      <p>day: {props.day}</p>
      <p>time:{new Date(props.created_at).toLocaleDateString()}</p>
      <button onClick={()=>props.handleClaim(props.id,props.socketId)}>Claim</button> 
    </article>
  )
}