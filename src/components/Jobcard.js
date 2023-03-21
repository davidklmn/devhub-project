import React from 'react';
// import { Card, CardHeader, CardTitle, CardBody } from 'uikit-react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './JobCard.css';

function JobCard(props) {
  return (
    <Card className="d-inline-flex" id="card" style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.company}
        </Card.Subtitle>
        <Card.Text className="d-inline-flex">{props.location}</Card.Text>
        <Card.Text className="d-inline-flex">{props.jobType}</Card.Text>
        <Card.Link id="button" href={props.pageLink}>
          <Button variant="success">Apply</Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
