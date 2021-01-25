import React from "react";
import { connect } from "react-redux";
import { filter } from "./filters";
import "./style.css";
import {NamesTheather} from './NamesOfTheatre'
import {tracktime} from '../actions'
import Filter from './filterlogic'
import Image from './126.gif'
import Footer from './Footer'
import Header from './Header'

const dura = (time,props) => {
 var ass = ''
 ass +=time


const t = [...Array(4)].fill(ass)
var Current = new Date()

return t.map((x,index,arr) => {
   
 if(index == 0){
    Current.setHours(Current.getHours(),Math.floor(Current.getMinutes()+30),Math.floor(Current.getSeconds()),Current.getMilliseconds())
    return <button onClick={(event) => {
      console.log(event.target.parentElement.childNodes[0].innerHTML,props.filtername.split('-')[0])
      var $ = window.jQuery
      var check = [...document.querySelectorAll(".suck")].some((x) => {
     
        return $(x).hasClass("toggle")
    
    })
    if(check == true){
      var ar = [...Array(3)].fill('').map((x,b) => {
if(b == 0){
return event.target.parentElement.childNodes[0].innerHTML
}
if(b== 1){
return props.filtername.split('-')[0]
}
if(b == 2){
  return event.target.innerHTML
}

      })
      props.tracktime(ar)

      $('.list').show()

        return

    }
alert('Please Select the Date')


    }} className='bo' key={index}style={{margin:'10px',padding:'10px'}}>{Current.toLocaleTimeString()}</button>

 }
 var arraya =  x.match(/(\d)+/g)
      var as = arraya.map(Number)
 Current.setHours(Current.getHours()+as[0],Math.floor(Current.getMinutes()+as[1]),Math.floor(Current.getSeconds()),Current.getMilliseconds())
 

  return <button onClick={(event) => {
    console.log(event.target.parentElement.childNodes[0].innerHTML,props.filtername.split('-')[0])
      var $ = window.jQuery
      var check = [...document.querySelectorAll(".suck")].some((x) => {
     
        return $(x).hasClass("toggle")
    
    })
    if(check == true){
      var ar = [...Array(3)].fill('').map((x,b) => {
if(b == 0){
return event.target.parentElement.childNodes[0].innerHTML
}
if(b== 1){
return props.filtername.split('-')[0]
}
if(b == 2){
  return event.target.innerHTML
}

      })
      props.tracktime(ar)

      $('.list').show()

        return

    }
alert('Please Select the Date')


  }} className='bo' key={index} style={{margin:'10px',padding:'10px'}}>{Current.toLocaleTimeString()}</button>


})




}



class Timetable extends React.Component {
  constructor(props) {
    super(props);
  }
//Names Of Theatre 
//durationlogictime 


Names = (duration) => {
console.log(this.props)
return  NamesTheather.map((x) => {
 return (
   <div className='web'>
     <p style={{fontWeight:'700'}}>{x.name}</p>
    {dura(duration,this.props)}
   </div>
 
 )
  })
}


  // Helper Function to Create a table  and timing
  table = (formats) => {
    var d = new Date();
    var daysInString =
      "Sunday Monday Tuesday Wednesday Thursday Friday Saturday";
    var DaysArray = daysInString.split(" ");
    var MappingOfDate = [];
    var track = 0;
    var tracker = 0;
    DaysArray.forEach((x, b, c) => {
      if (d.getDay() <= 2) {
        if (MappingOfDate.length == 5) {
        } else {
          if (track == 0 || track == 1) {
            if (track == 0) {
              var fjks = (
                <div className="suck" key={b}>
                  <p>{`${d.getDate() + track}  Today`}</p>
                </div>
              );
            }
            if (track == 1) {
              var fjks = (
                <div className="suck" key={b}>
                  <p>{`${d.getDate() + track}  Tommorow`}</p>
                </div>
              );
            }
          } else {
            var fjks = (
              <div className="suck" key={b}>
                <p>{`${d.getDate() + track}  ${DaysArray[b]}  `}</p>
              </div>
            );
          }

          MappingOfDate.push(fjks);
          track++;
        }
      }
      if (d.getDay() > 2) {
        if (MappingOfDate.length == 5) {
        } else {
          if (DaysArray[d.getDay() + b] == undefined) {
            b = 0;

            if (DaysArray[b] == "Sunday" && tracker == 0) {
              var fjks = (
                <div className="suck" key={b}>
                  <p>{`${d.getDate() + track}  ${DaysArray[b]}  `}</p>
                </div>
              );
              tracker++;
            } else {
              var fjks = (
                <div className="suck" key={b}>
                  <p>{`${d.getDate() + track}  ${DaysArray[tracker]}  `}</p>
                </div>
              );
              tracker++;
            }
          } else {
            if (track == 0 || track == 1) {
              if (track == 0) {
                var fjks = (
                  <div className="suck" key={b}>
                    <p>{`${d.getDate() + track}  Today`}</p>
                  </div>
                );
              }
              if (track == 1) {
                var fjks = (
                  <div className="suck" key={b}>
                    <p>{`${d.getDate() + track}  Tommorow`}</p>
                  </div>
                );
              }
            } else {
              var fjks = (
                <div className="suck" key={b}>
                  <p>{`${d.getDate() + track}  ${
                    DaysArray[d.getDay() + b]
                  }  `}</p>
                </div>
              );
            }
          }

          MappingOfDate.push(fjks);
          track++;
        }
      }
    });
    const fomratname = (
      <p
        style={{
          display: "inline-block",
          paddingLeft: "100px",
          borderStyle: "ridge",
        }}
      >
        {formats}
      </p>
    );

    return [...[MappingOfDate], fomratname];
  };
  renderlist = () => {
    const splitname = this.props.filtername.split("-");
    console.log(splitname);
    const filterArray = this.props.movielist.filter((x) => {
      return x.name === splitname[0];
    });
    return filterArray.map((x) => {
      return (
        <div >
          {/*Header*/}
          <div style={{ backgroundColor: "rgba(0, 0, 0, .8)", color: "White" }}>
            <h1>{x.name}</h1>
            <div>
              <p style={{ display: "inline-block", padding: "20px" }}>
                {x.genres}
              </p>
              <p style={{ display: "inline-block", padding: "10px" }}>
                {x.duration}
              </p>
            </div>
          </div>
          {/*table*/}
          <div style={{ backgroundColor: "rgb(0,0,0,10%)" }}>
            {this.table(splitname[1])[0]}

            {this.table(splitname[1])[1]}
          </div>
          <div>
            {this.Names(x.duration)}
          </div>
        </div>
      );
    });
  };
  componentDidMount() {

    //impliment jquery
    var $ = window.jQuery;
    //onmouseover color change
    $(".suck").on("mouseover", function () {
      $(this)[0].style.color = "blue";
    });
    //onmouseout color change

    $(".suck").on("mouseout", function () {
      $(this)[0].style.color = "";
    });
    //onclick for toggle class css
    $(".suck").on("click", function () {
      if (!$(this).hasClass("toggle")) {
        [...document.querySelectorAll(".suck")].forEach((x) => {
          x.classList.remove("toggle");
        });
        $(this).addClass("toggle");
      }
    });
    // $('.bo').on('click',function() {
     

    // });






    //pointer
    [...document.querySelectorAll(".suck")].forEach((x) => {
      console.log(x);
      x.style.cursor = "pointer";
    });
  }
  render() {
    const style={
      position: 'absolute',
    background: 'white',
    left:'38%',
    top:'50%'
    }
    const converted = {
      background: "0 0",
      color: "#040404",
      fontSize: "16px",
      textTransform: "none",
      letterSpacing: "0",
      padding: "25px 35px",
  fontSize: "14px",
  textAlign: "center",
  letterSpacing: "3px",
  textTransform: "uppercase",
  position: "relative"
    }
    var $ = window.jQuery;

    return (<div>
<Header/>
    {this.renderlist()}
<div className='list'>
  <div className='term'>
  <p style={converted}>Notes</p>

  <div className="tnc" id="dPopupMsgText" style={{display: 'block', textAlign: 'left'}}>1. For your own safety, wearing face masks is compulsory for entering the cinema premises.<br />2. Temperature checks will be conducted at the cinema. Patrons with high temperature (above 37.3 C or 99.14 F) will not be allowed inside.<br />3. Entry is allowed only for valid ticket holders.<br /> 4. Guests aged under 18 will not be allowed in `A` rated movies<br /> 5. Children above the age of 3 years require tickets for `U` or `U/A` rated movies. <br /> 6. In case a ticket is lost or misplaced, a duplicate ticket cannot be issued.<br /> 7. Tickets once purchased cannot be cancelled, exchanged or refunded.<br /> 8. Guest Agrees to be contacted by INOX Management for the purpose of seeking feedback for service improvement.<br /> 9. Decision(s) taken by INOX shall be final and binding, Rights of admission reserved.<br /> 10. Outside food and beverages are not allowed inside the cinema premises.</div>
<div>
<button style={{display:'inline-block'}} onClick={() => {   



  document.querySelector('.list').style.display='none'





}}>Cancel</button>
<button style={{display:'inline-block'}} onClick={() => {  
  document.querySelector('.term').style.display='none'
  document.querySelector('.loader').classList.add('term')
 var loader = document.querySelector('.loader')
  loader.setAttribute('style', 'background:transparent !important; padding:150px');

  document.querySelector('.loader').style.display='block'

  setTimeout(() => {

console.log(this.props)
document.querySelector('.loader').style.display='none'
this.props.history.push('/book/aa')

  }, 2000);



    }}>Submit</button>

</div>



  </div>
</div>
<div className='loader' style={{display:'none'}}>
  <img src={Image}/>
</div>
<Footer/>
    </div>)
  }
}























const getstateToProps = (state, classprops) => {
  return {
    movielist: state.bookmyshow,
    filtername: classprops.match.params.id,
  };
};
export default connect(getstateToProps, {tracktime})(Timetable);
