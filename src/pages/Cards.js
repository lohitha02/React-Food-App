import React from 'react';
import { Container, Row, Col } from 'react-grid';
import CardUI from '../components/CardUI'
import '../styles/style.sass'

class Cards extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div className="page">
            <Container>
              <Row>
                <Col lg={2}/>
                <Col md={8} style={{top: 10}}>
                  <CardUI />
                </Col>
              </Row>
            </Container>
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default Cards;