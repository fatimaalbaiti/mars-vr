import React, { Component } from 'react'

export default class NanoSmallLeader extends Component{
    componentWillReceiveProps(nextProps,prev){
            if(nextProps.details)
            {
               if (nextProps.details.id)
               {

                  if(nextProps.details.id!==this.props.details.id)
                  {
                        this.NanoSmall.classList.remove("first-block")
                        let _this=this;
                        setTimeout(()=>{
                            _this.NanoSmall.classList.add("first-block")
                        },0)
                  }
               }
            }

    }

    render(){
      let style1={};
      if(window.screen.availWidth === 1280){
        style1 = {
          paddingLeft:"1.6vw"
        }
      }
      else{
        style1 = {
          textAlign:'left'
        }
      }
      const {details}=this.props;
      return(
          <div className="nano-blocker first-block" ref={(Elmnt)=>{this.NanoSmall=Elmnt}}>
          <div style={{position: "absolute",marginTop: "0.75vh", padding: "0 2.2%" }}>
              <div style={{position:"absolute",width:"100%",height:"100%"}}>
                   <div className="container-fluid" style={{width:"100% !important"}}>
                      <div className="row">
                          <div className="col-lg-2" style={{marginLeft:"1vw"}}>
                              <div style={{borderColor:"white",borderStyle:"solid",borderWidth:1,marginTop:"2vh",borderRadius:"50%",width: "2.7vw",marginLeft:"-0.25vw",padding:"2px"}}><img src={`${(details.photoUrl)?details.photoUrl:"/img/surya.jpg"}`} style={{width:"100%",height:"2.3vw",borderRadius:"50%",borderStyle:"solid",borderColor:"white",borderWidth:1

                            }} /></div>
                               {/* <div style={{marginLeft:"0.8vw",marginTop:"2.5vh",borderColor:"#fff",borderRadius:"50%",borderStyle:"solid"}}><img className="nano-first-img" style={{width:"80%",borderColor:"white",borderWidth:1}} src='/img/surya.jpg' /></div> */}


                          </div>
                          <div className="col-lg-7 col-sm-7" style={{textAlign:"left",paddingTop:"1.5%",marginLeft:"-4%"}}>
                              <div>
                                    <span className="nano-first-name-text1">{(details.name)?(details.name):''}</span><div className="nano-id">ID:{(details.id)?(details.id):''}</div>
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
