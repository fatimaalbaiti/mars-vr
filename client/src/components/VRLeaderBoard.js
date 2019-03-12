import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {HeartHealth} from './HeartHealthBig';
import {O2} from './O2Big';
import {Flag} from './FlagBig';
import CircularProgressbar from 'react-circular-progressbar';
import SmallLeader from './SmallLeader';
import BigLeader from './BigLeader';
import SmallLeader2 from './SmallLeader2';
import SmallLeader3 from './SmallLeader3';
import SmallLeader4 from './SmallLeader4';
import SmallLeader1 from './SmallLeader1';
export default class VRLeaderBoard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: props.score,
    };
  }

  componentWillReceiveProps(nextProps,prev){
    if(nextProps.score) {
      let newScores = nextProps.score;
      const oldScores = this.state.score;

      newScores = newScores.map(n => ({
          ...n,
        oldRank: (oldScores.find(o => o.id === n.id) || { rank: 0 }).rank,
      }));

      this.setState({
        score: newScores,
      });
    }
  }

  render(){
      const {score}=this.state;
      let configs="";
     if(score)
     {
        if(score.length>0){
        {
            configs=score.sort((a, b) => (a.rank - b.rank)).map((item,index)=>{
                if(item.rank === 1)
                {
                    return<BigLeader key={index}details={item}/>
                }
                else if(item.rank === 2){
                    return <SmallLeader1 key={index} details={item}/>
                }
                else if(item.rank === 3){
                    return <SmallLeader2 key={index} details={item}/>
                }
                else if(item.rank === 4){
                    return <SmallLeader3 key={index} details={item}/>
                }
                else if(item.rank === 5){
                    return <SmallLeader4 key={index} details={item}/>
                }

            });
        }
      }
    }


    return(
      <div className="col-sm-offset-3 col-sm-6" style={{marginTop:"-1vw",}}>
            <div id="container"
                 // style={{"transform": "perspective(600px) rotateY(-3deg)"}}
            >
                <div className="img-container" >
                    <div className="positioning"  style={{marginLeft:"1.6vw",marginTop:"1.2vh",textAlign:"center"}}>

                      <div className="Header">MARS VR</div>

                        <img src="/img/innerline.png" style={{height:"86vh",position:"relative"}} />
                         <div style={{position:"absolute",top:"5vh"}}>
                            {configs}

                            </div>

                    </div>
                    <img src="/img/vr_leaderboard.png" style={{height:"90vh",position:"absolute"}} />
                    <div>

                     </div>

                </div>
            </div>
      </div>
    )
  }
}
