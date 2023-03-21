import React from 'react';
import Card from 'react-bootstrap/Card';
import './ArticleCard.css';

function ArticleCard(props) {
  return (
    <Card className="d-inline-flex" id="card" style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.source}
        </Card.Subtitle>
        <Card.Text>{props.author}</Card.Text>
        <Card.Link className="pr-5" id="link" href={props.pageLink}>
          Read Now
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
