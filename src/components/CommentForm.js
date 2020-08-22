import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Button, Label, Row, Col} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';


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
                  <Control.text className="form-control" model=".name" name="name" id="name" placeholder="Your Name" />
                </Row>

                <Row className="form-group">
                  <Label htmFor="name">Comment</Label>
                  <Control.textarea className="form-control" model=".comment" name="comment" id="comment" rows="6"/>
                </Row>

              </LocalForm>
          </div>
          </ModalBody>
      </Modal>
      </div>
    )
  }
}

export default CommentForm;
