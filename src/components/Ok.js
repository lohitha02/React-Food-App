
import React from "react";
import {Col, Row} from 'react-grid';
import { Link } from 'react-router-dom';

class Ok extends React.Component{
    render() {
        return(
            <div>
                <Row>
                    <Col sm={6}>
                        <div className="title">HELLO Welcome to our App:)</div>
                        <div className="text">
                            This is a Service-oriented Project.
                        </div>
                        <Link to = "/login">
                        <button className="button center-button">JOIN US</button>
                        </Link>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Ok