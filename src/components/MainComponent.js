import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './HeaderComponent.js';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent.js'
import DishDetail from './DishDetail.js'
import Header from './HeaderComponent.js'
import Footer from './FooterComponent.js';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }


  render(){

    const HomePage = () =>{
      return(
        <HomeComponent />
      )
    }
    return(
      <div className="App">
        <Header />
        <Switch>

            <Route exact path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
            <Redirect from="/" to="/home" />
        </Switch>



        <Footer />
      </div>
    );
  }
}
export default Main;
