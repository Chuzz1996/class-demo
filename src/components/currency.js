import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class Currency extends Component {

    render() {
        return (<Card style={{ width: "18rem" }} bg="dark" className=" card text-white ">
            <Card.Header></Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Text></Card.Text>
                    </Col>
                    <Col>
                        <Card.Text></Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>);
    }
}

export default Currency;