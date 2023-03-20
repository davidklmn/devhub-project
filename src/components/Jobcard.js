import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'uikit-react';

function JobCard(props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardBody>
          <p>{props.company}</p>
          <p>{props.location}</p>
          <p>{props.jobType}</p>
          <a href={props.pageLink}>
            <button>Apply now</button>
          </a>
          <button>Save</button>
        </CardBody>
      </CardHeader>
    </Card>
  );
}

export default JobCard;
