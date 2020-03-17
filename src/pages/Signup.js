import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-grid';
import Sign from '../components/Sign';

class Signup extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Helmet>
            <title>Sign Up</title>
          </Helmet>
          <div className="page-container">
            <Container>
              <Row>
                <Col md={8} lg={8} style={{ top: 150, left: 150 }}>
                  <Sign />
                </Col>
              </Row>
            </Container>
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default Signup;
  