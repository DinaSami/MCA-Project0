import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import {Button}  from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './home.css';
import Test1 from '../doc/test1';
// import io from 'socket.io-client';
// const SERVER_URL = process.env.SERVER_URL || 'localhost:5000/';
// const socket = io(SERVER_URL, { transports: ['websocket'] });


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chronicDisease: '',
    };
  }
  componentDidMount() {
    const chronicDisease = prompt("Mention a chronic disease If you suffer from ...");
    this.setState({ chronicDisease });
    this.props.socket.on('connect', () => {
      this.props.socket.on('claimed', function (payload) {
        alert(`Your visit to Dr. ${payload.name} is booked!`);
      });
    });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...this.state,
      created_at: Date.now(),
    };
    console.log('hello', payload);

    this.props.socket.emit('createTicket', payload);
  };
  welcome() {
    alert('Wait for receiving a reply soon!')
  };
  render() {
    return (
      <>
        <Test1 />
      <br></br>
        <div className="form-card">
          <Form onSubmit={this.handleSubmit} id='medicalForm'>
            <Form.Row className='contain'>
              <Form.Group as={Col} md="4" controlId="validationFormik101">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  id="firstName1"
                  // value={this.state.firstName}
                  onChange={this.handleChange}
                />

              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik101">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  // id="lastName"
                  // value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Label>Select an appointment type</Form.Label>
              <Form.Control as="select" name='section' onClick={this.handleChange} custom>
                <option value="General" >General</option>
                <option value="Mental Health">Mental Health</option>
                <option value="Naturopathic Medicine">Naturopathic Medicine</option>
                <option value="Prescriptions">Prescriptions</option>
                <option value="Referrals & Medical Notes">Referrals & Medical Notes</option>
                <option value="Requisitions, Testing & Reviews">Requisitions, Testing & Reviews</option>
                <option value="Sexual Health / Women's Health">Sexual Health / Women's Health</option>
                <option value="Skin">Skin</option>
                <option value="Specialist / Other">Specialist / Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group >
              <Button variant="outline-primary" className='mx-2' onClick={this.handleChange} value="Saturday" name="day">Saturday</Button>
              <Button variant="outline-secondary" className='mx-2' onClick={this.handleChange} value="Sunday">Sunday</Button>
              <Button variant="outline-success" className='mx-2' onClick={this.handleChange} value="Monday">Monday</Button>
              <Button variant="outline-warning" className='mx-2' onClick={this.handleChange} value="Tuesday">Tuesday</Button>
              <Button variant="outline-danger" className='mx-2' onClick={this.handleChange} value='Wednesday'>Wednesday</Button>
              <Button variant="outline-info" className='mx-2' onClick={this.handleChange} value='Thursday'>Thursday</Button>
            </Form.Group>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="primary" size="lg" active type='submit' onClick={this.welcome}>Book Now!</Button>

          </Form>
          <div class="card">

          </div>

        </div>
      </>
    );

  }
}

export default Home;
