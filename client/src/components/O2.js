import React, { Component } from 'react';


export class O2 extends Component{

    render(){
        const {oxygen}=this.props;
        return(
            <div style={{position:"absolute",border:"",borderRadius:"50%",height:"6vh",width:"6vh",marginLeft:"0%"}}>
                   <div style={{position:"absolute",width:"100%",padding:"2%"}}>
                    <svg height="100" width="100">
                         <circle cx="25" cy="28" r="23" stroke="#fff" strokeWidth="2" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`156%`} />
                       
                        <circle cx="25" cy="28" r="18" stroke="#fff" strokeWidth="2" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`156%`} />
                        <circle cx="25" cy="28" r="18" stroke="#3672c8" strokeWidth="3" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`${1.2*oxygen}% 156%`}  strokeDashoffset={'0'}/>
                        </svg>
                    </div>


                         <img src="/img/group-5.png" style={{width:"30%",height:"30%",marginLeft:"30%",marginTop:"30%"}}/>

            </div>


    )
 }
}
