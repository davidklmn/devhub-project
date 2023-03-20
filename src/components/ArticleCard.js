import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'uikit-react';

function ArticleCard(props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardBody>
          <p>{props.author}</p>
          <p>{props.source}</p>
          <a href={props.pageLink}>
            <button>Read Now</button>
          </a>
        </CardBody>
      </CardHeader>
    </Card>
  );
}

export default ArticleCard;
