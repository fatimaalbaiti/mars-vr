import React, { Component } from 'react';


export class O2 extends Component{

    render(){
        let oxygen=(this.props.oxygen)?this.props.oxygen:0;
        return(
            <div style={{position:"absolute",border:"",borderRadius:"50%",height:"7vh",width:"7vh",left:"90%",marginTop:"2vh"}}>
            <div style={{position:"absolute",width:"100%",padding:"2%"}}>
            <svg height="100" width="100">
            <circle cx="33" cy="30" r="29" stroke="#fff" strokeWidth="2" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`1506%`} />

                <circle cx="33" cy="30" r="23" stroke="#fff" strokeWidth="2" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`156%`} />
                 <circle cx="33" cy="30" r="23" stroke="#2c81ed" strokeWidth="3" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`${1.5*oxygen}% 156%`}  strokeDashoffset={'0%'}/>

            </svg>
            </div>

      <img src="/img/group-5.png" style={{width:"30%",height:"30%",marginLeft:"-8%",marginTop:"30%"}}/>

    </div>

    )
 }
}
