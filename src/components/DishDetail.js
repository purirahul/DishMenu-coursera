import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Label, Buton, Modal, ModalBody, ModalHeader, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


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


  

class CommentForm extends Component{

    constructor(props){
      super(props);
      this.state = {
          isModalOpen: false
      };
      this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

    render(){
      return(
        <div>
        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
            <div className="container">
                <LocalForm onsubmit={(values) => this.handleSubmit(values)}>
                  <Row className="form-group">
                  <Label htmlFor="rating">Rating</Label>
                    <Control.select className="form-control" model=".rating" name="rating" id="rating">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Row>

                  <Row className="form-group">
                    <Label htmFor="name">Your Name</Label>
                    <Control.text className="form-control" model=".name" name="name" id="name" placeholder="Your Name"
                      validators= {{minLength: minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors className="text-danger" model=".name" show="touched"
                        messages={{
                          minLength: 'Must be greater than 2 characters',
                          maxLength: 'Must be 15 characters or less'
                        }}
                    />
                  </Row>

                  <Row className="form-group">
                    <Label htmFor="name">Comment</Label>
                    <Control.textarea className="form-control" model=".comment" name="comment" id="comment" rows="6"/>
                  </Row>

                  <Row className="form-group">
                      <Button type="submit" color="primary">
                          Submit
                      </Button>
                  </Row>

                </LocalForm>
            </div>
            </ModalBody>
        </Modal>
        </div>
      )
    }
  }

export default DishDetail;
