import React from 'react';
import Ticket from './ticket';
import './admin.css';
import io from 'socket.io-client';
const socket = io('localhost:5000/', { transports: ['websocket'] });
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffName: '',
      tickets: [],
      onlineStaff: [],
    };
  }
  componentDidMount() {

    const staffName = prompt("please Dr Enter your name...");
    this.setState({ staffName });
    socket.on('connect', () => {
      //1a
      socket.emit('join', { name: staffName });
      socket.on('newTicket', (payload) => {
        this.setState({ tickets: [...this.state.tickets, payload] });
      });
      socket.on('onlineStaff', (payload) => {
        this.setState({ onlineStaff: [...this.state.onlineStaff, payload] });
        // console.log(this.state.onlineStaff);
      });
      
      socket.on('offlineStaff', (payload) => {
        this.setState({
          onlineStaff: this.state.onlineStaff.filter((staff) => staff.id !== payload.id),
        });
      });
    });
  }
  handleClaim = (id, socketId) => {
    // console.log( this.state.staffName);
    socket.emit('claim', { id, name: this.state.staffName, patientId: socketId });
  };
  render() {
    console.log('ffff', this.state.onlineStaff)
    return (
      <main className="admin-container">
        <section id="container">
          <h2>Appointment Cards</h2>
          <section id="tickets">
            {this.state.tickets.map((ticket) => {
              return (
                <Ticket {...ticket} handleClaim={this.handleClaim} key={ticket.id} />
              );
            })}
          </section>
        </section>
        <aside id="online-staff">
          <h2>Available Doctors</h2>
          {this.state.onlineStaff.map((staff) => {
            return (
              <>
            <h2 key={staff.id}>{staff.name}</h2>
              <h2>hhhhhhhhhhhhhhhhh</h2>
              </>
              )
          }
          )}
        </aside>
      </main>
    );
  }
}

export default Admin;
