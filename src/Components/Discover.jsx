import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Discover = () => {
  return (
    <div>
      <div
        className="background-image"
        style={{
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundImage: 'url(https://i.pinimg.com/564x/4f/1b/f7/4f1bf740871685e8f233ee0cb54101f3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          marginTop:"10px"
        }}
      >
        <Container className="mt-5 text-center "> 
          <Row>
            <Col md={6}>
              <h1 className="text-white">Welcome to Our Shopping App</h1>
              <p className="text-white">
                Discover amazing products and shop your favorites!
              </p>
              <Button variant="primary" style={{ backgroundColor: 'attractive-color', border: 'none' }}>
                Buy Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Discover;
