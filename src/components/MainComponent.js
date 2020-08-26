import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomeComponent.js';
import Menu from './MenuComponent.js'
import Contact from './ContactUs.js'
import DishDetail from './DishDetail.js';
import About from './AboutComponent.js';
import Header from './HeaderComponent.js'
import Footer from './FooterComponent.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators.js';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


const mapDispatchToProps = (dispatch) =>({
      addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
      fetchDishes: () => {dispatch(fetchDishes())},
      resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
      fetchComments: () => {dispatch(fetchComments())},
      fetchPromos: () => {dispatch(fetchPromos())},
});


class Main extends Component{

  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }


  render(){

    const HomePage = () =>{
      return(
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishLoading={this.props.dishes.isLoading}
              dishErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promos.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
      )
    }

    const DishWithId = ({match}) =>{
      return(
            <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                        isLoading={this.props.dishes.isLoading}
                        errMess={this.props.dishes.errMess}
                        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                        commmentErrMess={this.props.comments.errMess}
                        addComment={this.props.addComment}
            />
    )}


    return(
      <div className="App">
        <Header />

        <Switch>
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> } />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> } />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
            <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
