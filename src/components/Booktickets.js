import React,{createRef, useRef} from 'react'
import {connect} from 'react-redux'
import './style.css'
import Model from './format'
import Footer from './Footer'
import Header from './Header'

import {Fetchinglist} from './format'
class Bookticket extends React.Component {



constructor(props){
    super(props)
    this.refing = createRef()
}





       
    




renderlist = () => {
    
   return Fetchinglist(this.props,this.refing,useRef)
} 




    render(){ 
       
        return <div>
            <Header/>
            {this.renderlist()}
            <Footer/>

            </div>
    }
}


const map = (state) => {
      return {MovieData:state.bookmyshow}
}

export default connect(map)(Bookticket)