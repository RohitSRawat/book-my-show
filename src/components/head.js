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
       {props.match.url == "/book/aa"? <p className="textcolor tooo" style={{cursor:'pointer'}} onClick={() => {   
          var $ = window.jQuery
          $('.ModalPop').show()
          }}>
          {props.seat + " Tickets"} <i className="arrow down"></i>
        </p>:null}
        <i  onClick={() => {  props.history.goBack()}} style={converted} className="fa fa-close"></i>
      </div>
    );
  };
  export default Header