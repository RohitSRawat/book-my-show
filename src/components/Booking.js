import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import { countseats } from "../actions";

const Header = (p) => {
  const converted = {
    fontSize: "24px",
    position: "relative",
    right: "white",
    color: "white",
    left: "96%",
    top: "-67px",
    cursor:'pointer'
  };
  var props = p.value;
  return (
    <div style={{ backgroundColor: "black", height: "83px" }}>
      <p className="textcolor">{props.time[1]}</p>
      <p className="textcolor">{props.time[0]}</p>
      <p className="textcolor tooo" style={{cursor:'pointer'}} onClick={() => {   
        var $ = window.jQuery
        $('.ModalPop').show()
        }}>
        {props.seat + " Tickets"} <i className="arrow down"></i>
      </p>
      <i  onClick={() => {  props.history.goBack()}} style={converted} className="fa fa-close"></i>
    </div>
  );
};

class Booking extends React.Component {
  imagearray = () => {
    var ask = [...Array(10)].fill("");
    var ss = [
      "https://img2.pngio.com/bike-silhouette-transparent-png-clipart-free-download-ywd-cycle-sport-png-2000_1786.png",
      "https://media.zigcdn.com/media/model/2018/Oct/right-side-view-438534319_930x620.jpg",
      "https://www.windshieldexperts.com/car-models/wp-content/uploads/2019/01/auto-600x600.png",
      "https://auto.economictimes.indiatimes.com/files/retail_files/nano-1503572997-prod-var.jpg",
      "https://images.carandbike.com/car-images/large/bmw/m2/bmw-m2.jpg?v=1",
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-118459,resizemode-1,msid-68843100/industry/auto/auto-news/vans-buck-trend-to-top-auto-charts/vans.jpg",
      "https://images.moneycontrol.com/static-mcnews/2020/02/LNG-Bus-770x433.jpg?impolicy=website&width=770&height=431",
    ];

    return ask.map((x, b) => {
      if (b <= 5) {
        return ss[b];
      } else {
        if (b == 7 || b == 6) {
          return ss[5];
        } else {
          return ss[6];
        }
      }
    });
  };
componentDidUpdate(prop,state){
   var $ = window.jQuery
  var truefalse = [...document.querySelectorAll('.parap')].some((x) => {
    return $(x).hasClass('to')
  })
 
  if(truefalse == true){

    var counting = [...document.querySelectorAll('.parap')].filter((x) => {
      return $(x).hasClass('to')
    })
    
if(counting.length == Number(this.props.seat)){

}else{
document.querySelector('.payment').style.display='none'
  var aaaa= [...$(".parap")].forEach((x) => {
        $(x).removeClass("to");
      });
}
  }

  
}


update = (event) => {
  var $ = window.jQuery
  var seat = this.props.seat;
  if ($(event.target).hasClass("to")) {
    $(event.target).removeClass("to");
  
    var ahover = [...$(".parap")].filter((x) => {
      return $(x).hasClass("to");
    });
    if(ahover.length!=seat){
      document.querySelector('.payment').style.display='none'

    }
  } else {
    $(event.target).addClass("to");
  
    var ahover = [...$(".parap")].filter((x) => {
      return $(x).hasClass("to");
    });
    if (ahover.length > Number(seat)) {
      
      [...$(".parap")].forEach((x) => {
        $(x).removeClass("to");
      });
      document.querySelector('.payment').style.display='none'
  
    } else {
      if (ahover.length == Number(seat)) {
        document.querySelector('.payment').style.display='block'
      }
    }
  }	
}

  
  
  componentDidMount() {
    var $ = window.jQuery;
    var imagearr = this.imagearray();

    $(".hover").on("mouseover", function (event) {
      var number = Number($(this)[0].innerHTML) - 1;
      document.querySelector(".image").src = imagearr[Number(number)];
    });
    $(".hover").on("mouseout", function (event) {
      //     console.log($(this)[0].innerHTML)
      //      var number = Number($(this)[0].innerHTML) - 1
      // document.querySelector('.image').src=imagearr[Number(number)]

      var asss = [...document.querySelectorAll(".hover")].map((x, b) => {
        if (x.classList.contains("toggle")) {
          return b;
        } else {
          return false;
        }
      });
      var ssx = asss.filter((x) => {
        return x !== false;
      });
      document.querySelector(".image").src = imagearr[ssx[0]];
    });

    $(".hover").on("click", function (event) {
      if (!$(this).hasClass("toggle")) {
        [...document.querySelectorAll(".hover")].forEach((x) => {
          x.classList.remove("toggle");
        });
        $(this).addClass("toggle");
      }
    });
  } 
  uilist = () => {
    var newarr = [...Array(10)].fill("");
    return newarr.map((x, b) => {
      var a = 1;
      a += b;
      if (b == 0) {
        return (
          <p
            className="hover toggle"
            style={{ flex: "1", cursor: "pointer", padding: "15px" }}
          >
            {a}
          </p>
        );
      }
      return (
        <p
          className="hover"
          style={{ flex: "1", cursor: "pointer", padding: "15px" }}
        >
          {a}
        </p>
      );
    });
  };

  renderlist = () => {
    const converted = {
      maxWidth: "515px !important",
      opacity: 1,
      position: "fixed",
      zIndex: 400,
      background: "rgb(0 0 0 / 61%)",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
    };
    const ss = {
      width: "515px",
      height: "455px",
      margin: "0 auto",
      left: "31%",
      top: "22%",
      padding: "30px",
    };
    const sssss = {
      fontSize: "16px",
      color: "#fff",
      background: "#0078ff",
      borderRadius: "5px",
      margin: "15px auto 0",
      padding: "15px 0",
      cursor: "pointer",
      textAlign: "center",
    };

    if (this.props.time.length != 0) {
      return (
        <React.Fragment>
          <Header value={this.props} />
          <div className="ModalPop" style={converted}>
            <div className="term" style={ss}>
              <div style={{ textAlign: "center" }}>How Many Seats</div>
              <div style={{ textAlign: "center", marginTop: "60px" }}>
                <img
                  className="image"
                  style={{ width: "120px", height: "107px" }}
                  src="data:image/png;base64,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"
                />
              </div>
              <div
                className="rohit"
                style={{ display: "flex", margin: "30px" }}
              >
                {this.uilist()}
              </div>
              <div
                style={sssss}
                onClick={() => {
                  var $ = window.jQuery;
                  $(".ModalPop").hide();
                  var a = [...$(".hover")].filter((x) => {
                    return $(x).hasClass("toggle");
                  });
            
                    this.props.countseats(a[0].innerHTML);

                  
                }}
              >
                Select Seats
              </div>
            </div>
          </div>
          <div style={{marginTop:'40px'}}>{this.moviebooking()}</div>
          <svg
            style={{ marginTop: "60px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 262 22"
            id="icon-screen"
          >
            <g fill="none" fillRule="evenodd" opacity=".3">
              <use fill="#E1E8F1" xlinkHref="#da" />
              <path
                stroke="#4F91FF"
                strokeWidth=".65"
                d="M27.19.33L1.34 13.7h257.32L232.81.32H27.2z"
              />
              <path fill="#8FB9FF" d="M28.16 2.97h203.86l17.95 9.14H10.35z" />
              <use fill="#E3ECFA" xlinkHref="#db" />
              <path
                stroke="#4F91FF"
                strokeWidth=".65"
                d="M.56 14.2l3.07 5.41h252.74l3.07-5.4H.56z"
              />
            </g>
          </svg>
          <div style={{display:'none'}}className='payment'>
          <h1 className='pay'>Proceed To Payment</h1>

          </div>
        </React.Fragment>
      );
    }
    return (
      <div>
        <Link to={`/`}>Go To Homepage</Link>
      </div>
    );
  };

  logic = (newarr, aphabets, count,props) => {
    return newarr.map((x, b) => {
      if (count % 2 === 0) {
        if (b % 2 == 0) {
          return <p className="parap" onClick={(event) => {
          this.update(event)
          }}>{x}</p>;
        } else {
          return <p></p>;
        }
      } else {
        if (b % 2 == 0) {
          return <p></p>;
        } else {
          return <p className="parap" onClick={(event) => {
            this.update(event)
            }}  >{x}</p>;
        }
      }
    });
  };

  moviebooking = () => {
    const newarr = [...Array(20)].fill("").map((x, b) => {
      return b;
    });
var props = this.props
    const alphabets = ["a", "b", "c", "d", "e"];
    return alphabets.map((x, b, c) => {
      return (
        <div className="flex-container">
          <p className="parap">{x}</p>
          {this.logic(newarr, x, b,props)}
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderlist()}</div>;
  }
}

const GetstatetoMap = (state) => {
  return { time: state.track, seat: state.seats };
};
export default connect(GetstatetoMap, { countseats })(Booking);
