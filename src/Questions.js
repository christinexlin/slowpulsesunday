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
                <h4>Do artists get credit for their work?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>Absolutely.
                Every item is attributed to the original artist and displayed with a bio including
                their contact info. </Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <h4>I'm an artist. How do I work with you?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body>Fill out the form above and we'll be in touch!</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <h4>How do you price your items?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
                <Card.Body>We set our prices based on an item's material and printing method.</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <h4>What about all that copyright stuff?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
                <Card.Body>Artists maintain full ownership of their designs. By submitting a design,
                an artist grants us a temporary license to use their work commercially. If the artist changes their mind
                at any point, we'll remove their item from our site.</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                <h4>Do artists get a discount on their own artwork?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
                <Card.Body>Of course! Since artists automatically receive 50% of all their sales, they'll be able to purchase their own items at a 50% discount.</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                <h4>When is your store launching?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
                <Card.Body>Soon. Subscribe to our newsletter to be notified when our first collection is released!</Card.Body>
            </Accordion.Collapse>
            </Card>

            </Accordion>
        );
    }
}


export default Questions;
