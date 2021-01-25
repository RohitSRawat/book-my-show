import "./style.css";
import React from "react";

const ff = (event) => {
  if (event.target.id == "myModal") {
    return;
  }
  if (
    event.target.id !== "myModal" &&
    event.target.className !== "modal-content" &&
    event.target.className !== "maaa"
  ) {
    

    
      document.querySelector("#myModal").style.display = "none";

    
  }
}
export const Fetchinglist = (props) => {
  const porpsobject = props;
  fetch = props.MovieData.filter((x) => {
    return x.name == props.match.params.id;
  });
  
  
  document.body.addEventListener("click",ff,true);

  const WordsOtherThanenglish = fetch[0].language.replace(/(English)/gi, "");
  const fetchenglish = /(English)/gi.exec(fetch[0].language);

  return fetch.map((x, b, array) => {
    return (
      <div className="fetch" style={{ backgroundImage: `url(${x.largeimg})` }}>
        <div className="container">
          <div className="row">
            <div className="col" style={{ display: "flex" }}>
              <img
                src={x.src}
                style={{
                  height: "350px",
                  marginTop: "30px",
                  borderRadius: "16px 16px 0px 0px",
                }}
              />

              <h3 style={{ 
                  position:'relative',
                  top: '64px',
                  left: '50px',
                  color: 'white',
                fontSize:'40px' }}   
              
              >{x.name}</h3>

              <h3   style={{ 
                  position:'relative',
                  top: '220px',
                  left: '-186px',
                  color: 'white' }}
              >{x.genres}</h3>

              <h3 style={{ 
                  position:'relative',
                  top: '220px',
                  left: '-149px',
                  color: 'white' }}
              
              >{x.format}</h3>

              <button
                className="bookticket"
                style={{ height:'30px',
                  position:'relative',
                  top: '325px',
                  left: '-303px',
                  width: '150px' }}
                onClick={() => {
                  document.querySelector(".modeling").style.display = "block";
                }}
              >
                Book Tickets
              </button>
            </div>
          </div>
        </div>

        <div id="myModal" className="modeling" style={{ display: "none" }}>
          {/* Modal content */}
          <div className="modal-content">
            <span
              onClick={() => {
                document.querySelector(".modeling").style.display = "none";
              }}
              className="close"
            >
              ×
            </span>
            <span className="maaa">{x.name}</span>
            <h4 className="maaa" >Select Language and Format</h4>

            {fetchenglish == null
              ? newfunction(
                  undefined,
                  WordsOtherThanenglish,
                  fetch[0].format,
                  porpsobject,
                  x.name
                )
              : newfunction(
                  fetchenglish[1],
                  WordsOtherThanenglish,
                  fetch[0].format,
                  porpsobject,
                  x.name
                )}
          </div>
        </div>
      </div>
    );
  });
};

const newfunction = (
  fetchenglish,
  WordsOtherThanenglish,
  format,
  porpsobject,
  NameOfMovie
) => {
  console.log(porpsobject);
  if (WordsOtherThanenglish != undefined && fetchenglish == undefined) {
    return (
      <React.Fragment>
        <div>
        <p className="maaa">{WordsOtherThanenglish}</p>
        {convertor(format, porpsobject,NameOfMovie)}
        </div>
      
      </React.Fragment>
    );
  }
  if (fetchenglish == "English") {
    if (WordsOtherThanenglish === "") {
      return (
        <React.Fragment>
            <div>
            <p className="maaa">{fetchenglish}</p>
          {convertor(format, porpsobject,NameOfMovie)}
            </div>
         
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div>
          <p className="maaa">{fetchenglish}</p>
          {convertor(format, porpsobject,NameOfMovie)}
          </div>
          <div>

          <p className="maaa">{WordsOtherThanenglish}</p>
          {convertor(format, porpsobject,NameOfMovie)}
          </div>

        </React.Fragment>
      );
    }
  }
};

const convertor = (format, porpsobject,NameOfMovie) => {
  

  return format.split(" ").map((x) => {
    return (
      <button
        onClick={(event) => {
          
          var combine = event.target.parentNode.firstChild.innerHTML.concat('',event.target.innerHTML)
          porpsobject.history.push(`/bookingMovie/${NameOfMovie}-${combine}`)
         
          document.body.removeEventListener("click",ff,true);

        }}
        className="maaa"
      >
        {x}
      </button>
    );
  });
};
