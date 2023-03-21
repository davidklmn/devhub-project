import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Col, Row } from 'react-bootstrap';

import './JobCard.css';

function JobCard(props) {
  return (
    <Card className="d-inline-flex" id="jobcard" style={{ width: '25rem' }}>
      <Card.Body className="d-flex flex-column">
        <Row>
          {' '}
          <Col xs={9}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text className="d-block mb-0">{props.location}</Card.Text>
            <Card.Text className="d-block mb-0">{props.company}</Card.Text>
            <Card.Text className="d-block mb-0">{props.jobType}</Card.Text>
          </Col>
          <Col xs={3}>
            <Button
              id="button"
              className="position-absolute bottom-0 mb-3"
              variant="success"
              href={props.pageLink}
            >
              Apply
            </Button>
            <Button id="button" variant="success">
              Save
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
