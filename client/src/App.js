 import React, { Component } from 'react';
import './styles.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import NanoLeaderBoard from './components/NanoLeaderBoard';
import VRLeaderBoard from './components/VRLeaderBoard';
import openSocket from 'socket.io-client';

const Main = ({ rootPath }) => (
  <Switch>
    <Route exact path={`${rootPath}`} component={Home}/>
  </Switch>
)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
			vrScores: [],
			nanoScores: [],
    };
  }

  componentDidMount() {
		const socket = openSocket(':8080');

		socket.on('connect', () => {

			socket.emit('subscribe');

			socket.on('vr-score-update', (scores) => {
				this.setState({ vrScores: scores });
			});

			socket.on('nano-score-update', (scores) => {
				this.setState({ nanoScores: scores });
			});

			socket.on('disconnect', () => {
        console.log('Disconnected from server. Retrying...');

				setInterval(() => {
					socket.connect();
				}, 3000);
			});

		});

  }

  render() {
    const { vrScores, nanoScores } = this.state;
    return (
      <div className="App" style={{overflowStyle:"hidden"}}>
          <div></div>
          <video id="bgvid" muted autoPlay loop>
            <source src="/mars.mp4"  type="video/mp4" />
          </video>
          <div className="container-fluid" style={{paddingLeft:"4vh",paddingTop:"1vh",    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0, 0, 0, 0.65)"
}}>
            <div className="row" style={{height:"2vh"}}>
                <div className="col-lg-6 col-sm-6">
                    <img src="/img/saal_logo.png" style={{height:"5vh",marginTop:"0.2vw"}} />
                </div>
                <div className="col-lg-6 col-sm-6" style={{textAlign:"right", paddingRight:"2.5vw"}}>
                  <img src="/img/logo.png" style={{height:"5vh",marginTop:"0.1vw"}}/>
                </div>
            </div>
            <div className="row">
              <VRLeaderBoard score={vrScores}/>
              {/*<VRLeaderBoard score={vrScores}/>*/}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
