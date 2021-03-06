import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {HeartHealth} from './HeartHealth';
import {O2} from './O2';
import {Flag} from './Flag';
import CircularProgressbar from 'react-circular-progressbar';
export default class SmallLeaderBoard3 extends Component {
   constructor(props){
     super(props);
     this.state={
       animate:false,
       value:0,
       details:props.details,
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

    };
    if(this.state.animate)
    {
      if(this.state.value==-3)
      {
        style={
        transition:"1s ease-in-out",
        transform:`translate(0,${-4*113}%)`,
        opacity:0
        }
      }
      else{
        style={
          transition:"1s ease-in-out",
          transform:`translate(0,${this.state.value*115}%)`
          }
      }
    }


    return(
        <div className="Blocker" style={style} ref={(Elmnt)=>{this.SmallLeader=Elmnt}}>
          <div style={{position:"absolute",marginTop:" 1.3%",marginLeft:"7%",marginRight:"9%"}}>
            <div className="row" style={{position:"absolute",width:"100%"}}>
              <div className="col-lg-2" >
                <div style={{borderColor:"white",borderStyle:"solid",borderWidth:1,marginTop:"2.5vh",borderRadius:"50%",width: "2.7vw",marginLeft:"25%",padding:"2px"}}><img src={`${(details.photoUrl)?details.photoUrl:"/img/surya.jpg"}`} style={{width:"100%",height:"2.3vw",borderRadius:"50%",borderStyle:"solid",borderColor:"white",borderWidth:1

                }} /></div>
                {/* <div  style={{marginLeft:"0.8vw",marginTop:"2.5vh",borderColor:"#fff",borderRadius:"50%",borderStyle:"solid"}}><img className="nano-first-img" style={{width:"80%",borderColor:"white",borderWidth:1}} src='/img/surya.jpg' /></div> */}


              </div>
              <div className="col-lg-3" style={{marginTop:"2.7vh",textAlign:"left",paddingLeft:"0 !important"}} >

                <p style={{fontFamily:"Jura-Regular", justifyContent:"left",fontSize:25,
                  textAlign:"left",
                  "lineHeight":"normal",
                  "letterSpacing":"normal",
                  "color": "#ffffff",textShadow:"0 0 10px rgba(255, 255, 255, 0.8)"}}>{(details.name)?details.name:''} <br/>
                  {/* <span style={{fontSize:13}} >ID:{(details.id)?details.rank:''}</span> */}
                  </p>

              </div>
              <div className="col-lg-4" style={{marginTop:"1.9vh",textAlign:"left"}}  >
                <div className="row">
                  <div className="col-lg-4">
                    <HeartHealth heart={(details.heart)?details.heart:0}/>
                  </div>
                  <div className="col-lg-4">
                    <O2 oxygen={(details.oxygen)?details.oxygen:0}/>
                  </div>
                  <div className="col-lg-4">
                    <Flag hydro={(details.hydro)?details.hydro:0}/>
                  </div>
                </div>

              </div>
              <div className="col-lg-3" style={{marginTop:"2.3vh",textAlign:"right"}}  >

                <p style={{fontFamily:"Jura-Regular",fontSize:26,textShadow:"0 0 10px rgba(255, 255, 255, 0.8)", "lineHeight":"normal",
                  "letterSpacing":"normal",
                  "color": "#ffffff",textAlign:"center"}}>{(details.score)?parseInt(details.score):''} <span style={{fontSize:18,paddingLeft:3}} >PTS</span></p>


              </div>


            </div>

            <img src="/img/group.png" style={{height:"8vh",width:"100%"}} />
          </div>

          <img src="/img/card-border.png" style={{height:"11vh",width:"90%"}} />

        </div>
    )
  }
}
