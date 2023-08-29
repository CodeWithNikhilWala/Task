import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FourCard = () => (
  <Container style={{ backgroundColor: '#F4F4F4', padding: '20px', borderRadius: '10px' }}>
    <Row className="justify-content-between">
      <Col style={{ textAlign: 'center', color: '#FF5733', borderRadius: '10px 0 0 10px', padding: '20px' }}>
        <img src="https://tse2.mm.bing.net/th?id=OIP.2bKqgxINACMggCGP0h8AWQHaE7&pid=Api&P=0&h=180" alt="Logo" style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
        H&M
      </Col>
      <Col style={{ textAlign: 'center', color: '#007BFF', padding: '20px' }}>
        <img src="https://tse2.mm.bing.net/th?id=OIP.cKFmxsTc2lOkU1Sxyc4VgQHaEK&pid=Api&P=0&h=180" alt="Levis Logo" style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
        Levis
      </Col>
      <Col style={{ textAlign: 'center', color: '#FF9900', padding: '20px' }}>
        <img src="https://tse3.mm.bing.net/th?id=OIP.yfI-ZWFQbN-ar6qZudcHpgHaEK&pid=Api&P=0&h=180" alt="Amazon Logo" style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
        Amazon
      </Col>
      <Col style={{ textAlign: 'center', color: '#FB641B', borderRadius: '0 10px 10px 0', padding: '20px' }}>
        <img src="https://tse3.explicit.bing.net/th?id=OIP.Md3RwPj4mEyXU3MsQd5PzwHaFj&pid=Api&P=0&h=180" alt="Flipkart Logo" style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
        Flipkart
      </Col>
    </Row>
  </Container>
);

export default FourCard;
