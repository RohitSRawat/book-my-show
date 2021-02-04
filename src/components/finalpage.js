import React from 'react'
import ReactDom from 'react-dom'
import Header from './head'
import {connect} from 'react-redux'
import "./style.css";
class FinalPage extends React.Component{

constructor(props) {
    super(props);
    this.state = {donation: 0};
}


//track ticket of consumer 
ticket = () => {
   // CLASSIC. - F8, F10 ( 2 Tickets )

  var d = this.props.ticket.map((x) => {
       return x.parentNode.childNodes[0].innerHTML.toUpperCase()+x.innerHTML
   })
 
   var n = new Number(Number(this.props.seat)*150);
   var myObj = {
     style: "currency",
     currency: "INR"
   }
   
var newar = [...Array(1)].fill('').map((x) => {
  return(
<div>
    <h2 style={{color:'red'}}>BOOKING SUMMERY</h2>

    <h5 style={{color:'black'}}>{d.join(',').concat(`(${this.props.seat} Tickets)`)}</h5>
    <p>{`Rs.${n.toLocaleString("en-GB", myObj)}`}</p>
    <p style={{cursor:'pointer'}}  onClick={() => {
        document.querySelector('.book').classList.toggle("b")
    }}  >Internet handling fees</p>
    <div className='book' style={{display:'none'}}>
    <p>Booking Fees</p>

    <p>{`Rs.${new Number(Number(38)).toLocaleString("en-GB", myObj)}`}</p>
    <p>Integrated GST (IGST) @ 18%</p>
    <p>{`Rs.${new Number(Number((38*18)/100)).toLocaleString("en-GB", myObj)}`}</p>


    </div>

   <h4>Sub Total</h4>
   <p>{`Rs.${new Number(Number((38*18)/100)+Number(this.props.seat*150)+38).toLocaleString("en-GB", myObj)}`}</p>

<div>
    <input   className='inputholder'  type='checkbox' onClick={(event) => {
if(event.target.checked === true){
this.setState({donation:2})
}else{
    this.setState({donation:0})

}

    }}/>
    <p style={{fontSize:'15px'}}>Rs. 2 will be added to your transaction as a donation.Re.1/1 Ticket</p>

</div >
<div style={{backgroundColor:'grey'}}>
<h3>Amount Payable</h3>

<p>{`Rs.${new Number(Number((38*18)/100)+Number(this.props.seat*150)+38+this.state.donation).toLocaleString("en-GB", myObj)}`}</p>

</div>
<div style={{backgroundColor:'pink',borderRadius:'25px'}}>
<p>Total:{`Rs.${new Number(Number((38*18)/100)+Number(this.props.seat*150)+38+this.state.donation).toLocaleString("en-GB", myObj)}`}</p>

</div>
</div>


  )

})
return newar

}



    render(){
        console.log(this.ticket())
        return (
            <div >
                <Header value={this.props}/>
                <div>{this.ticket()}</div>
                
            </div>
        )
    }
}

const getstateToProps = (state) => {
    return { time: state.track, seat: state.seats,ticket:state.ticket };
}
export default connect(getstateToProps)(FinalPage);
