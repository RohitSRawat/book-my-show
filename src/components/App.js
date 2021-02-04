import React from 'react'
import Header from './Header'
import Slider from './slider'
import Content from './Content'
import Footer from './Footer'
import {Switch,Router,Route} from 'react-router-dom'
import history from './history'
import Bookticket from './Booktickets'
import TimeTable from './BookingMovieTime'
import Booking from './Booking'
import FinalPage from './finalpage'
class App extends React.Component{


renderlist = () => {
     return(
       <Router history={history} >
       <div>
       {/* <Header/> */}
   
         <Switch>
         <Route path="/" exact component={Content} />
         <Route path="/booking/:id" exact component={Bookticket} />
         <Route path="/bookingMovie/:id" exact component={TimeTable} />
         <Route path="/book/:id" exact component={Booking} />
         <Route path="/jjj" exact component={FinalPage} />

         </Switch>
       </div>
       {/* <Footer/> */}
   
     </Router>
     )
   
}
  render(){
    return (
  <div>

  {this.renderlist()}

  </div>

    )
  }
}
export default App