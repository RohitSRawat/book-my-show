import React from 'react'
import './style.css'

const Footer = () => {


    return (
<footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
      </div>
      <div className="col-xs-6 col-md-3">
      </div>
      <div className="col-xs-6 col-md-3">
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2017 All Rights Reserved by Rohit Rawat
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook"><i className="fa fa-facebook" /></a></li>
          <li><a className="twitter"><i className="fa fa-twitter" /></a></li>
          <li><a className="dribbble"><i className="fa fa-dribbble" /></a></li>
          <li><a className="linkedin"><i className="fa fa-linkedin" /></a></li>   
        </ul>
      </div>
    </div>
  </div>
</footer>



    )
}
export default Footer