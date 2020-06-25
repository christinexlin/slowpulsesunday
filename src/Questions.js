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
                <h4>Do I get credit for my work?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>Absolutely.
                Every item you design will be attributed to you and displayed with a bio including
                your contact info. </Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <h4>Who can submit artwork?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body>Anyone who has original artwork can submit!</Card.Body>
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
                <Card.Body>You maintain full ownership of your designs. By submitting your design,
                you're granting us a temporary license to use it commercially. If you change your mind
                at any point, just let us know and we'll remove your item from our site.</Card.Body>
            </Accordion.Collapse>
            </Card>

            <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                <h4>Do I get a discount on my own artwork?</h4>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
                <Card.Body>Of course! Since you automatically receive 50% of all your sales, you'll be able to purchase your own items at a 50% discount.</Card.Body>
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
