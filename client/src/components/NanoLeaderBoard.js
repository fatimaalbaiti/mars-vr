import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import NanoHead from './NanoHead';
import NanoSmallLeader from './NanoSmallLeader';
import NanoSmallLeader1 from './NanoSmallLeader1';
import NanoSmallLeader2 from './NanoSmallLeader2';
import NanoSmallLeader3 from './NanoSmallLeader3';
import NanoSmallLeader4 from './NanoSmallLeader4';

export default class NanoLeaderBoard extends Component {
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
      if(score.length>0)
      {
          configs=score.sort((a, b) => (a.rank - b.rank)).map((item,index)=>{
              if(item.rank === 1)
              {
                  return<NanoHead key={index}details={item}/>
              }
              else if(item.rank === 2){
                  return <NanoSmallLeader1 key={index} details={item}/>
              }
              else if(item.rank === 3){
                  return <NanoSmallLeader2 key={index} details={item}/>
              }
              else if(item.rank === 4){
                  return <NanoSmallLeader3 key={index} details={item}/>
              }
              else if(item.rank === 5){
                  return <NanoSmallLeader4 key={index} details={item}/>
              }

          });
        }

    }
    return(
      <div className="col-lg-6 col-sm-6" style={{marginTop:"-1vw"}}>
          <div id="container" style={{"transform": "perspective(600px) rotateY(3deg)"}}>
              <div className="nano-img-container" >
                  <div className="positioning"  style={{marginLeft:"1.6vw",marginTop:"1.2vh",textAlign:"center"}}>
                     <div className="nano-heading-text">MARS INVESTIGATION</div>
                          <img src="/img/innerline.png" style={{height:"86vh",position:"relative",paddingLeft:"4.5%"}} />

                          <div style={{position:"absolute",top:"5vh"}}>
                               {configs}

                          </div>

                     </div>
                  <img src="/img/outline.png" style={{height:"90vh",position:"absolute"}} />
              </div>
          </div>
      </div>
    )
  }
}
