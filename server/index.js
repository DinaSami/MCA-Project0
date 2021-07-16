const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./route');
const http = require('http');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const server = http.createServer(app);
const io = require('socket.io')(http);
const staffRoom = 'staff';
const { v4: uuidv4 } = require('uuid');
io.listen(server);
const queue = {
  tickets: [],
  staff: [],
};

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use('/inf', router);

io.on('connection', (socket) => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
  socket.on('join', (payload) => {
    // socket.join will put the socket in a private room
    const staff = { name: payload.name, id: socket.id };
    queue.staff.push(staff);
    socket.join(staffRoom);
    socket.to(staffRoom).emit('onlineStaff', staff);
  });
  socket.on('createTicket', (payload) => {
    // 2
    const ticketData = { ...payload, id: uuidv4(), socketId: socket.id };
    queue.tickets.push(ticketData);
    socket.in(staffRoom).emit('newTicket', ticketData);
  });

  socket.on('claim', (payload) => {
    // when a TA claim the ticket we need to notify the patient
    socket.to(payload.patientId).emit('claimed', { name: payload.name });
    queue.tickets = queue.tickets.filter((t) => t.id !== payload.id);
  });
  socket.on('getAll', () => {
    queue.staff.forEach((person) => {
      socket.emit('onlineStaff', { name: person.name, id: person.id });
    });
    queue.tickets.forEach((ticket) => {
      socket.emit('newTicket', ticket);
    });
  });

  socket.on('disconnect', () => {
    socket.to(staffRoom).emit('offlineStaff', { id: socket.id });
    queue.staff = queue.staff.filter((s) => s.id !== socket.id);
  });
});






///////////////////////////////////////////////////


app.get('/', (req, res) => {
  res.send('Hello');
})

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
}).catch((e) => {
  console.error('connection error', e.message);
})
