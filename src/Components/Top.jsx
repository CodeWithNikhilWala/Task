import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const topProducts = [
  {
    id: 1,
    name: 'Stylish Jacket',
    description: 'A trendy jacket for all seasons.',
    image: 'https://tse3.mm.bing.net/th?id=OIP.jXVrhGpnfuU2jb3G4tCyqgHaLH&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Classic Jeans',
    description: 'Timeless jeans that fit perfectly.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.SkQwFzyE0eNoX7WPNUThKwHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 3,
    name: 'Elegant Dress',
    description: 'An elegant dress for special occasions.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.QCLZ2AlQBqr-134868ohRQHaMV&pid=Api&P=0&h=180',
  },
];

const Top = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://tse3.mm.bing.net/th?id=OIP.f5MOa-3aDBPQvvmUX1eTmQHaE8&pid=Api&P=0&h=180")', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <Container>
        <h1 className="text-center mt-4 mb-5" style={{ color: '#007bff' }}>
          Welcome to our Fashion Store!
        </h1>
        <h2 className="mb-4 text-center">Our Top Products</h2>
        <Row>
          {topProducts.map((product) => (
            <Col key={product.id} xs={12} md={4}>
              <div className="text-center">
                <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
                <h4 className="mt-3">{product.name}</h4>
                <p>{product.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Button size="md" style={{ backgroundColor: 'black' }}>
            Buy Now
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Top;
