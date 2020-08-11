import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component{
  constructor(props){
    super(props);
  }

  renderComments(comments){
    console.log(comments)
    if(comments != null){
      const list = comments.map((comment) =>{
        return(
        <ul className="list-unstyled" key={comment.id} style={{textAlign: "left"}}>
            <li>{comment.comment}</li>
            <li>-- {comment.author}, {comment.date}</li>
        </ul>
      )
      }
    )
    return list;
    }

    else{
      return <div></div>
    }
  }

  render(){
    return(
      <div className="row">
      <div  className="col-12 col-md-5 m-1">
        <Card>
            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md-5 m-1">
      <h4>Comments: </h4>
        {this.renderComments(this.props.dish.comments)}
      </div>
      </div>
    );
  }
}

export default DishDetail;
