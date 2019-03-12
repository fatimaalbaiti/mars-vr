import React, { Component } from 'react';


export class Flag extends Component{

    render(){
        let hydro=(this.props.hydro)?this.props.hydro:0;
        return(
            <div style={{position:"absolute",border:"",borderRadius:"50%",height:"7vh",width:"7vh",left:"163%",marginTop:"2vh"}}>
                    <div style={{position:"absolute",width:"100%",padding:"2%"}}>
                    <svg height="100" width="100">
                    <circle cx="33" cy="31" r="29" stroke="#fff" strokeWidth="2" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`1506%`} />
                       
            
                        <circle cx="33" cy="30" r="23" stroke="#fff" strokeWidth="2" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`156%`} />
                        <circle cx="33" cy="30" r="23" stroke="#74e91e" strokeWidth="3" fill="none"   animation="progress 1s ease-out forwards"  strokeDasharray={`${1.5*hydro}% 156%`}  strokeDashoffset={'0%'}/>

                    </svg>
                    </div>

              <img src="/img/Flag.png" style={{width:"30%",height:"30%",marginLeft:"-10%",marginTop:"30%"}}/>

            </div>

    )
 }
}
