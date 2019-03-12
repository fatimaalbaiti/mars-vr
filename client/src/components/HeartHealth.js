import React, { Component } from 'react';


export class HeartHealth extends Component{

    render(){
        const {heart}=this.props;
        return(
            <div style={{position:"absolute",border:"",borderRadius:"50%",height:"6vh",width:"6vh",marginLeft:"0%"}}>
                   <div style={{position:"absolute",width:"100%",padding:"2%"}}>
                    <svg height="100" width="100">
                         <circle cx="25" cy="28" r="23" stroke="#fff" strokeWidth="2" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`1560%`} />

                        <circle cx="25" cy="28" r="18" stroke="#fff" strokeWidth="2" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`1560%`} />
                        <circle cx="25" cy="28" r="18" stroke="#ef4430" strokeWidth="3" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`${1.2*heart}% 156%`}  strokeDashoffset={'0'}/>
                    </svg>
                    </div>


                         <img src="/img/heart.png" style={{width:"30%",height:"30%",marginLeft:"27%",marginTop:"32%"}}/>

            </div>

    )
 }
}
