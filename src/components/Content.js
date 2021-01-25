import React from "react";
import { data } from "./object";
import { connect } from "react-redux";
import Slider from "./slider";
import { filter } from "./filters";
import { languageaction } from "../actions";
import { Kapping } from "./Mapping";
import Footer from './Footer'
import Header from './Header'
import "./style.css";





const Sidebar = (props) => {
  return (
    <div className={`dropdown`} style={{ marginTop: "150px" }}>
      <button
        className="btn btn-primary dropdown-toggle"
        onClick={() => {
          document
            .querySelector(`.dropdown-menu${props.value}`)
            .classList.toggle(props.value);
        }}
        style={{ width: "200px" }}
        type="button"
      >
        {props.main}
        <span className="caret" />
      </button>
      <ul
        className={`dropdown-menu${props.value}`}
        style={{ width: "200px", display: "none" }}
      >
        {props.children}
      </ul>
    </div>
  );
};

class Content extends React.Component {
  rendervideo = (id) => {
    this.props.history.push(`/booking/${id}`)
}
  renderlist = () => {
    const a = [...this.props.movie];
    return a
      .map((x) => {
        return (
          <div className="col-md-3">
            <img   onClick={() => {this.rendervideo(x.name)}} style={{ width: "100%", cursor: "pointer" }} src={x.src} />
            <h1 onClick={() => {this.rendervideo(x.name)}} style={{ fontSize: "20px", cursor: "pointer" }}>{x.name}</h1>
            <span>{x.language}</span>
          </div>
        );
      })
      .sort(() => Math.random() - 0.5);
  };

  render() {
    return (
      <div>
              <Header/>

        <Slider />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar value="a" main="Languages">
                <Kapping
                  a={filter[0]}
                  b="languages"
                  c={this.props.languageaction}
                  d='a'
                />
              </Sidebar>

              <Sidebar value="b" main="Genres">
                <Kapping
                  a={filter[1]}
                  b="Genres"
                  c={this.props.languageaction}
                  d='b'
                />
              </Sidebar>
              <Sidebar value="c" main="Format">
                <Kapping
                  a={filter[2]}
                  b="format"
                  c={this.props.languageaction}
                  d='c'
                />
              </Sidebar>
            </div>
            <div className="col-md-9">
              <div
                className="container"
                style={{ marginTop: "150px", width: "100%" }}
              >
               
                <div  style={{marginTop:'30px'}}className="row">{this.renderlist()}</div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>

      
    );
  }
}
const mapstate = (state) => {
  return { movie: state.bookmyshow };
};

export default connect(mapstate, { languageaction })(Content);
