import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomeComponent.js';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Menu from './MenuComponent.js'
import Contact from './ContactUs.js'
import DishDetail from './DishDetail.js'
import Header from './HeaderComponent.js'
import Footer from './FooterComponent.js';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };

  }


  render(){

    const HomePage = () =>{
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
      )
    }
    return(
      <div className="App">
        <Header />

        <Switch>
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default Main;
