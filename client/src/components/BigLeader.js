import React,{Component} from 'react';
import {HeartHealth} from './HeartHealthBig';
import {O2} from './O2Big';
import {Flag} from './FlagBig';
export default class BigLeader extends Component{
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
                        this.setState(prevState => ({
                            details: {
                                ...prevState.details
                            },
                            animate:true,
                            value:(nextProps.details.oldRank || nextProps.details.rank) - nextProps.details.rank,
                        }))
                        let _this=this;
                        setTimeout(()=>{
                            _this.setState({
                                animate: false,
                                value:0,
                                details:nextProps.details
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
                this.Elmnt.classList.remove("Bscaling");
                style={
                    marginTop:"2.5vh",
                    transition:"1s ease-in-out",
                    transform: "scale(0)"
                }
                setTimeout(()=>{this.Elmnt.classList.add("Bscaling")},1200)

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
            <div className="Blocker" style={style} ref={(Elmnt)=>{this.Elmnt=Elmnt}} >
                                <div style={{position:"absolute",marginTop:"2.9%",marginLeft:"7%",marginRight:"9%",paddingLeft:"12px"}}>
                                    <div style={{position:"absolute",width:"96%",marginTop:"3%",height:"90%"}}>
                                        <div className="container-fluid">
                                                  <div className="row">
                                                            <div className="col-lg-3" style={{marginTop:"1vh"}}>


                                                                          <div className="nano-img-div"><img className="nano-first-img" style={{width:"100%",borderColor:"white",borderWidth:1, height: "10.5vh",}} src={`${(details.photoUrl)?details.photoUrl:'/img/surya.jpg'}`} /></div>



                                                                          <div className="row" style={{height:"6vh",marginLeft:"2px"}}>
                                                                                {/* <div className="col-lg-6" style={{ paddingLeft:"0px",marginTop:"1vw"}}>
                                                                                      <img src="/img/badge-with-logo.png" style={{width:"100%",height:"100%"}} />
                                                                                </div> */}
                                                                                <div className="col-lg-12" style={{alignSelf:"center",paddingLeft:0,marginTop:"0.7vw"}}>
                                                                                     <span className="vr-first-text" style={{fontSize:30}}>{(details.score)?parseInt(details.score):''}</span>
                                                                                     <br/>
                                                                                     <span className="vr-first-text1" style={{textAlign:"center",paddingTop:"2px"}}>PTS</span>

                                                                                </div>
                                                                          </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                            <div style={{textAlign:"left",marginTop:"0.5vh",marginLeft:"1vh"}}><span className="nano-first-name-text">{(details.name)?details.name:''}</span>
                                                                {/* <div className="nano-id-first">ID:{(details.id)?details.rank:''}</div> */}
                                                                </div> 


                                                                   <div className="row">
                                                                        <div className="col-lg-5">
                                                                            <HeartHealth heart={(details.heart)?details.heart:0}/>
                                                                            <O2 oxygen={(details.oxygen)?details.oxygen:0}/>
                                                                            <Flag hydro={(details.hydro)?details.hydro:0}/>

                                                                        </div>
                                                                        <div className="col-lg-7">

                                                                        </div>

                                                                   </div>


                                                            </div>
                                                            <div className="col-lg-2">
                                                                    <img src="/img/vr-view.gif" style={{width:"13vh",height:"10vh", boxShadow: "1px 1px 1px 1px #eee"}} />
                                                            </div>


                                                  </div>


                                        </div>
                                    </div>
                                    <img src="/img/card-translucent.png" style={{height:"20vh",width:"100%",marginTop:'0.6vh'}} />
                                </div>

                               <img src="/img/card-border.png" style={{height:"25vh",width:"90%"}} />
                            </div>
        )
    }
}