import React, { Component } from 'react'

export default class NanoSmallLeader2 extends Component{
    constructor(props){
        super(props);
        this.state={
          animate:false,
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
            let _this=this;
            this.setState(prevState => ({
              details: {
                  ...prevState.details
              },
              animate:true,
              value:(nextProps.details.oldRank || nextProps.details.rank) - nextProps.details.rank,
          }))

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

      };
      if(this.state.animate)
      {
        if(this.state.value==-2)
        {
          this.NanoSmall.classList.remove("Bscaling");
          style={
          transition:"1s ease-in-out",
          transform:`translate(0,${-3*113}%) `,
          opacity:0
          }
          //setTimeout(()=>{this.NanoSmall.classList.add("Bscaling")},1200)
        }
        else{
          style={
            transition:"1s ease-in-out",
            transform:`translate(0,${this.state.value*125}%)`,
        
            }
        }
      }
      return(
          <div className="nano-blocker" style={style} ref={(Elmnt)=>{this.NanoSmall=Elmnt}}>
          <div style={{position: "absolute",marginTop: "0.75vh", padding: "0 2.2%" }}>
              <div style={{position:"absolute",width:"100%",height:"100%"}}>
                   <div className="container-fluid" style={{width:"100% !important"}}>
                      <div className="row">
                          <div className="col-lg-2" >
                              <div style={{borderColor:"white",borderStyle:"solid",borderWidth:1,marginTop:"2vh",borderRadius:"50%",width: "2.7vw",marginLeft:"15%",padding:"2px"}}><img src={`${(details.photoUrl)?details.photoUrl:"/img/surya.jpg"}`} style={{width:"100%",height:"2.3vw",borderRadius:"50%",borderStyle:"solid",borderColor:"white",borderWidth:1

                            }} /></div>
                               {/* <div style={{marginLeft:"0.8vw",marginTop:"2.5vh",borderColor:"#fff",borderRadius:"50%",borderStyle:"solid"}}><img className="nano-first-img" style={{width:"80%",borderColor:"white",borderWidth:1}} src='/img/surya.jpg' /></div> */}


                          </div>
                          <div className="col-lg-7 col-sm-7" style={{textAlign:"left",paddingTop:"1.5%",marginLeft:"-4%"}}>
                              <div>
                                    <span className="nano-first-name-text1">{(details.name)?(details.name):''}</span>
                                {/*<div className="nano-id">ID:{(details.id)?(details.rank):''}</div>*/}
                                    <div style={{width:"40%"}}>
                                          <div className="cssProgress">
                                            <div className="progress2 nano-progress">
                                              <div className="cssProgress-bar cssProgress-success nano-progress-border1" data-percent={(details.progress)?parseInt(details.progress):''} style={{width:`${(details.progress)?parseInt(details.progress):''}%`}}>

                                              </div>
                                            </div>
                                          </div>
                                    </div>
                              </div>
                          </div>
                          <div className="col-lg-3 col-sm-3" style={{paddingTop:"4%",paddingLeft:0}}>
                              <span className="nano-first-name-text">{(details.score)?parseInt(details.score):''}</span> <span className="nano-first-name-text2">PTS</span>
                          </div>
                      </div>
                   </div>
               </div>
               <img src="/img/group.png" style={{height:"7.5vh",width:"98.3%"}} />
           </div>
           <img src="/img/card-border.png" style={{height:"10vh",width:"100%"}} />
    </div>
      )
  }
}
