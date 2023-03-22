import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container
      id="footer"
      className="d-flex position-fixed bottom-0 start-50 translate-middle-x"
    >
      <h6>
        Made by <a href="https://github.com/davidklmn">David</a>,{' '}
        <a href="https://github.com/WebArchitect89">Victor</a> and{' '}
        <a href="https://github.com/GAK001">Ahmet</a>
      </h6>
    </Container>
  );
}

export default Footer;
