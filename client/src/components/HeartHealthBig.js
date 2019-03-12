import React, { Component } from 'react';
var ProgressBar=require('progressbar.js')

export class HeartHealth extends Component{


    render(){
       let heart=(this.props.heart)?this.props.heart:0;

        return(
            <div style={{position:"absolute",border:"",borderRadius:"50%",height:"7vh",width:"80%",marginTop:"2vh"}}>
                    <div style={{position:"absolute",width:"100%",padding:"2%"}}>
                    <svg height="100" width="100">
                         <circle cx="33" cy="30" r="29" stroke="#fff" strokeWidth="2" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`1506%`} />

                         <circle cx="33" cy="30" r="23" stroke="#fff" strokeWidth="2" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`156%`} />
                        <circle cx="33" cy="30" r="23" stroke="red" strokeWidth="3" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`${1.5*heart}% 156%`}  strokeDashoffset={'0%'}/>

                    </svg>
                    </div>

              <img src="/img/heart.png" style={{width:"30%",height:"30%",marginLeft:"-30%",marginTop:"20%"}}/>

            </div>

    )
 }
}