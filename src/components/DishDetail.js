import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm.js'




  function RenderComments({comments}){
    console.log(comments)
    if(comments != null){
      const list = comments.map((comment) =>{
        return(
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {comment.date}</p>
          </li>
      )
      }
    )
    return(
          <div>
            <h4>Comments: </h4>
            <ul className="list-unstyled">
              {list}
            </ul>
            <CommentForm />
          </div>

  )
    }

    else{
      return <div></div>
    }
  }

  const DishDetail = (props) => {
    console.log("render ")
    return(
      <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="col-12">
        <h3> {props.dish.name} </h3>
        <hr/>
      </div>

      <div className="row">
      <div  className="col-12 col-md-5 m-1">
        <Card>
            <CardImg top src={props.dish.image} alt={props.dish.name} />
            <CardBody>
              <CardTitle>{props.dish.name}</CardTitle>
              <CardText>{props.dish.description}</CardText>
            </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md-5 m-1">
        <RenderComments comments={props.comments} />
      </div>
      </div>
      </div>
    );
  }


export default DishDetail;
