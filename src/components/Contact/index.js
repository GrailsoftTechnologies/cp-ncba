import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Jumbotron } from 'reactstrap';
import "./styles.css";

class Contact extends Component {
  render() {
    return (
      <Jumbotron>
        <Container>
          <Form>
						<FormGroup>
              <Label for="firstName">First Name (Required)</Label>
              <Input type="text" name="firstName" id="firstName" placeholder="" required/>
							<Label for="lastName">Last Name</Label>
              <Input type="text" name="lastName" id="lastName" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email (Required)</Label>
              <Input type="email" name="email" id="email" placeholder="" required/>
            </FormGroup>
            <FormGroup>
              <Label for="text">Your Message</Label>
              <Input type="textarea" name="text" id="text" placeholder="Please enter a title if submitting a document"required/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                Files can be submitted and emailed
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>I'm interested in...</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Learning more about the school
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Applying to be a student
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                I'm currently enrolled in a ballet program
              </Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Container>
			</Jumbotron>
    );
  }
}

export default Contact;
