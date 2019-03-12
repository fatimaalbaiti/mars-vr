import express from 'express';
import Http from 'http';
import Socket from 'socket.io';
import VRScoreHelper from './VRScoreHelper';
// import NanoScoreHelper from './NanoScoreHelper';

// Setup server and socket
const app = express();
const server = Http.createServer(app);
const io = Socket(server);

// Server client in dist
// app.get('/', (req, res) => res.redirect('/client'));
app.use('/', express.static(__dirname + '/client'));
app.use('/*', express.static(__dirname + '/client'));

const vrScoreHelper = new VRScoreHelper();
// const nanoScoreHelper = new NanoScoreHelper();

// Send scores on subscribe
io.on('connection', (socket) => {
  socket.on('subscribe', () => {
    console.log('new client subscribed');

    vrScoreHelper.watch(scores => socket.emit('vr-score-update', scores));
    // nanoScoreHelper.watch(scores => socket.emit('nano-score-update', scores));
  });
});

server.listen(8080);
