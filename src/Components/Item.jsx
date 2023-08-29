import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const FashionItem = ({ item, onAddToCart }) => {
    const { name, price, image } = item;

    const cardStyles = {
        backgroundColor: '#f4f4f4', 
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
    };

    const imageStyles = {
        height: '180px', 
        objectFit: 'cover', 
    };

    return (
        <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center"> 
            <Card style={cardStyles}>
                <Card.Img variant="top" src={image} style={imageStyles} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Button onClick={() => onAddToCart(item)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

const ShoppingCart = ({ cartItems }) => {
    const grandTotal = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2 style={{color:"#FBF0B2"}}>Grand Total The Item </h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li style={{color:"#C08261"}} key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <p style={{color:"#D8B4F8"}}><strong>Grand Total: ${grandTotal.toFixed(2)}</strong></p>
        </div>
    );
};

const Item = () => {
    const [cartItems, setCartItems] = useState([]);
    const fashionItems = [
        {
            name: 'Stylish Shirt',
            price: 999,
            image: 'https://tse2.mm.bing.net/th?id=OIP.msxw51J1Md7d5wtd4keO0QHaJH&pid=Api&P=0&h=180', 
        },
        {
            name: 'Fashionable Jeans',
            price: 1299,
            image: 'https://tse4.mm.bing.net/th?id=OIP.piqcErGgKbDx3Z-oLf9q3AHaLH&pid=Api&P=0&h=180', 
        },
        {
            name: 'Stylish Jeans',
            price: 1299,
            image: 'https://ae01.alicdn.com/kf/HTB1JO6fnnnI8KJjy0Ffq6AdoVXaL/Stylish-Jeans-For-Women-Fashion-High-Waist-Side-Rings-Skinny-Jeans-Good-Legs-Casual-Demin-Pants.jpg', 
        },
    ];

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <Container className="mt-4">
            <Row>
                {fashionItems.map((item, index) => (
                    <FashionItem key={index} item={item} onAddToCart={addToCart} />
                ))}
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <ShoppingCart cartItems={cartItems} />
                </Col>
            </Row>
        </Container>
    );
};

export default Item;
