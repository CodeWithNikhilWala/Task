import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const containerStyle = {
    backgroundImage: "url('https://i.pinimg.com/564x/ee/0c/91/ee0c91c3e95fab7d41736ebd6fe0dc3e.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px', 
  };

  return (
    <Container className="my-5" style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>About Us</h2>
      <Row className="align-items-center">
        <Col lg={6} className="order-lg-1">
          <p style={{color:"white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, diam vel fermentum dapibus, velit purus condimentum ligula, eget interdum velit ex a urna.
          </p>
        </Col>
        <Col lg={6} className="order-lg-2 d-flex justify-content-center align-items-center">
          <img src='https://tse3.mm.bing.net/th?id=OIP.5aAWzNvYMBNYi9A4jaFgrwHaJ4&pid=Api&P=0&h=180' className="img-fluid" alt="Centered Image" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
