import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Col, Row } from 'react-bootstrap';
import './JobCard.css';
import { HiOutlineMail } from '../../node_modules/react-icons/hi';
import { IconContext } from 'react-icons';

function JobCard(props) {
  return (
    <Card
      className="d-inline-flex border border-2 rounded-1"
      id="jobcard"
      style={{ width: '25rem' }}
    >
      <Card.Body className="d-flex flex-column">
        <Row>
          <Col xs={9}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Subtitle className="d-block mb-0 ">
              {props.location}
            </Card.Subtitle>
            <Card.Subtitle className="d-block mb-0 ">
              {props.company}
            </Card.Subtitle>
            <Card.Subtitle className="d-block mb-0 text-muted">
              {props.jobType}
            </Card.Subtitle>
          </Col>
          <Col xs={3} id="jobButtons">
            <Button
              className="position-absolute bottom-0 mb-3"
              id="jobButton"
              href={props.pageLink}
            >
              Apply
            </Button>
            <HiOutlineMail id="email" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
