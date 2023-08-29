import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Connect with Us</h5>
            <p>Stay updated on the latest trends and offers by following us on social media.</p>
            <div className="d-flex">
              <a href="#" className="me-2"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="me-2"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="me-2"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="me-2"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p><strong>Headquarters:</strong><br />115 dlf Bhubaneshwar<br />Odisha<br />India</p>
            <p><strong>Customer Support:</strong><br />Phone: 123-456-7890<br />Email: support@shoppingapp.com</p>
            <p><strong>Business Inquiries:</strong><br />Phone: 987-654-3210<br />Email: business@shoppingapp.com</p>
          </Col>
          <Col md={4}>
            <h5>Find Us on the Map</h5>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-71.06300345678901!3d42.358287654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0xNjUwLjU1NjAuMzA1!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="text-center">&copy; {new Date().getFullYear()} Shopping App. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
