import React from "react";
import history from './history'
class Header extends React.Component {

  render() {

    return (
        <div    >
 <nav style={{height:'60px'}} className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header" style={{cursor:'pointer'}} onClick={() => {    history.push('/')    }}>
            <img style={{width:'200px'}} className="navbar-brand img-responsive" src='https://www.nextbigbrand.in/wp-content/uploads/2019/07/bookmyshow.png'/>
          </div>
          
          <form className="navbar-form navbar-left" action="/action_page.php">
            <div className="input-group"  style={{width:'630px'}} >
              <input type="text" className="form-control" placeholder="Search For Movies,Events, Plays,Sports and Activities" name="search" />
              <div className="input-group-btn">
                <div className="btn btn-default" onClick={(event) => { event.preventDefault()}}>
                  <i className="glyphicon glyphicon-search" />
                </div>
                
              </div>
            </div>
          </form>
        </div>
      </nav>


        </div>
       
        

     
    )
  }
}

export default Header