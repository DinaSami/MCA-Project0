const express = require('express');
const app = express();
const http = require('http');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const server = http.createServer(app);
const io = require('socket.io')(http);
const staffRoom = 'staff';
const { v4: uuidv4 } = require('uuid');
io.listen(server);

app.use(cors());

io.on('connection', (socket) => {
  socket.on('join', (payload) => {
    // socket.join will put the socket in a private room
    socket.join(staffRoom);
    socket.to(staffRoom).emit('onlineStaff', { name: payload.name, id: socket.id });
  });
  socket.on('createTicket', (payload) => {
    // 2
    socket
      .in(staffRoom)
      .emit('newTicket', { ...payload, id: uuidv4(), socketId: socket.id });
  });

  socket.on('claim', (payload) => {
    // when a TA claim the ticket we need to notify the student
    socket.to(payload.patientId).emit('claimed', { name: payload.name });
  });
  socket.on('disconnect', () => {
    socket.to(staffRoom).emit('offlineStaff', { id: socket.id });
  });
});
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

//uuuuuuuuuuuuuu