import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';



  function RenderComments({comments}){
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

  const DishDetail = (props) => {
    console.log("render ")
    return(
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
      <h4>Comments: </h4>
        <RenderComments comments={props.dish.comments} />
      </div>
      </div>
    );
  }


export default DishDetail;
