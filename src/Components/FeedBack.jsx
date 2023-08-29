import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const feedbackData = [
  {
    id: 1,
    name: 'John Doe',
    feedback: "Absolutely love the new collection! The quality and style are top-notch.",
    image: 'https://www.sci.ca/wp-content/uploads/2020/11/iStock-1046208342-1536x1025.jpg',
  },
  {
    id: 1,
    name: 'John Doe',
    feedback: "Absolutely love the new collection! The quality and style are top-notch.",
    image: 'https://www.sci.ca/wp-content/uploads/2020/11/iStock-1046208342-1536x1025.jpg',
  },
  {
    id: 1,
    name: 'John Doe',
    feedback: "Absolutely love the new collection! The quality and style are top-notch.",
    image: 'https://www.sci.ca/wp-content/uploads/2020/11/iStock-1046208342-1536x1025.jpg',
  },
 

];

const FeedBack = () => {
  return (
    <Container style={{ padding: '60px ', textAlign: 'center' }}>
      <h2 style={{color:"#8062D6"}}>Client Feedback</h2>
      <Row>
        {feedbackData.map((feedback) => (
          <Col key={feedback.id} md={4} style={{ marginBottom: '20px' }}>
            <Card style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', border: 'none' }}>
              <Card.Img variant="top" src={feedback.image} style={{ maxWidth: '100px', borderRadius: '30%', margin: '0 auto' }} />
              <Card.Body>
                <Card.Text>"{feedback.feedback}"</Card.Text>
                <Card.Title>{feedback.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeedBack;
