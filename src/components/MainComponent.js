import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent.js'
import DishDetail from './DishDetail.js'
import Header from './HeaderComponent.js'
import Footer from './FooterComponent.js';

class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
      console.log(this.state.selectedDish)
  }

  renderDish(){
    if(this.state.selectedDish != null){
      return(<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />)
    }
    else{
      return <div></div>
    }
  }

  render(){
    return(
      <div className="App">
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <div className="container">
        {this.renderDish()}
        </div>
        <Footer />
      </div>
    );
  }
}
export default Main;
