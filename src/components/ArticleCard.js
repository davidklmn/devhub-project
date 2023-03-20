import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'uikit-react';

function ArticleCard(props) {
  return (
    <Card>
      <CardHeader>
        <img className="articleCover" src="" alt="" />
        <CardTitle>{props.title}</CardTitle>
        <CardBody>
          <p>{props.company}</p>
          <p>{props.location}</p>
          <p>{props.jobType}</p>
          <button>Apply now</button>
          <button>Save</button>
        </CardBody>
      </CardHeader>
    </Card>
  );
}

export default ArticleCard;
