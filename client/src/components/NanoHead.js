import React, { Component } from 'react'

export default class NanoHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            value:0,
            details:props.details
        }
    }

    componentWillReceiveProps(nextProps,prev){
      if(nextProps.details)
      {
        if (nextProps.details.id)
        {

          if(nextProps.details.id!==this.props.details.id)
          {
            // console.log(parseInt(nextProps.details.rank), this.props.details.rank,(nextProps.details.oldRank || nextProps.details.rank) - nextProps.details.rank)
            console.log(nextProps.details.rank, nextProps.details.oldRank)
            let _this=this
            this.setState(prevState => ({
              details: {
                  ...prevState.details
              },
              animate:true,
              value:(nextProps.details.oldRank || nextProps.details.rank) - nextProps.details.rank,
          }))
            ;
            setTimeout(()=>{
              _this.setState({
                details:nextProps.details,
                animate:false,
                value:0
              })
            },1300)
          }
          else{
              let obj= Object.assign({},this.state.details,{score:nextProps.details.score});
            this.setState({
                details:obj,
                animate:false,
                value:0
              })
          }

        }
      }

    }
    render(){
      const {details} =this.state;
      let style={
          marginTop:"2.5vh"

      };
      if(this.state.animate)
      {
          if(this.state.value!==0)
          {
              this.NanoHead.classList.remove("Bscaling");
              style={
                  marginTop:"2.5vh",
                  transition:"1s ease-in-out",
                  transform: "scale(0)"
              }
              setTimeout(()=>{this.NanoHead.classList.add("Bscaling")},1200)
          }
          else{
              style={
                  marginTop:"2.5vh",
                  transition:"3s ease-in-out",
                  transform:`translate(0,${this.state.value*120}%)`
              }
          }
      }

        return(
            <div className="nano-blocker" style={style} ref={(Elmnt)=>{this.NanoHead=Elmnt}}>
            <div className="headFix"><img src="/img/card-border.png" style={{height:"24vh",width:"100%",position:"absolute",left:0,right:0,top:0,bottom:0}} />
                <div className="backFix">
                    <div className="container jai" style={{position:"relative", width:"100%",height:"100%", paddingLeft:"0",paddingRight:"0"}}>
                            <div className="row" style={{height:"100%",width:"100%",marginLeft:"0.1%"}}>
                                <div className="col-lg-3 col-sm-3" style={{paddingTop:"4vh",marginLeft:"1vh"}}>
                                    <div className="nano-img-div"><img className="nano-first-img" style={{width:"100%",borderColor:"white",borderWidth:1,height :"12.5vh"}} src={(details.photoUrl)?details.photoUrl:'/img/surya.jpg'} /></div>
                                </div>
                                <div className="col-lg-5 col-sm-5 nano-first-name-container">
                                  <div><span className="nano-first-name-text" style={{ display: "block", margin: "10px 0" }}>{(details.name)?details.name:''}</span>
                                    {/*<div className="nano-id-first">ID:{(details.id)?details.rank:''}</div>*/}
                                  </div>
                                  <div style={{marginTop:"2vh"}}><img style={{width:"100%"}} src="/img/digi_value.png"/></div>
                                  <div style={{width:"100%",marginTop:"10%"}}>
                                        <div className="cssProgress">
                                          <div className="progress2 nano-progress">
                                            <div className="cssProgress-bar cssProgress-success nano-progress-border" data-percent="45" style={{width:`${(details.progress)?parseInt(details.progress):''}%`}}>

                                            </div>
                                          </div>
                                        </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-sm-3" style={{paddingTop:"3%"}}>
                                  <div><img style={{width:"75%",marginBottom:"4%"}} src="/img/badge-with-logo.png"/></div>
                                  <div><span className="nano-first-name-text">{(details.score)?parseInt(details.score):''}</span><p style={{marginTop:"0",color: "#ffffff",fontFamily:"Jura-Light",fontSize:"2vh"}}>PTS</p></div>
                                </div>
                            </div>
                    </div>
                 </div>
                 <img src="/img/card-translucent.png" style={{height:"20vh",width:"100%",display:"none"}} />
             </div>


        </div>
        )
    }
}
