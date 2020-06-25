import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Questions extends Component {

    render() {
        return (
            <Accordion>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h4>Why should I join?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                How do I visit the shop?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <h4>I'm interested in joining, where can I learn more?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
            </Card>

            </Accordion>
        );
    }
}


export default Questions;
