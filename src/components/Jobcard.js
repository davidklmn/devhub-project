import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from "react-bootstrap";
import nodemailer from "nodemailer";

import "./JobCard.css";

function JobCard(props) {
  function shareClick() {
    const email = window.prompt("Please enter email address:");
    if (email !== null) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "devhubemail800@gmail.com",
          pass: "devhub800",
        },
      });

      const mailOptions = {
        from: "devhubemail800@gmail.com",
        to: email,
        subject: `Check out this job: ${props.title}`,
        text: `${props.title}\n${props.location}\n${props.company}\n${props.jobType}\n\n${props.pageLink}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          window.alert(`Email sent to ${email}`);
        }
      });
    }
  }

  return (
    <Card className="d-inline-flex" id="jobcard" style={{ width: "25rem" }}>
      <Card.Body className="d-flex flex-column">
        <Row>
          {" "}
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
            <Button id="button" variant="success" onClick={shareClick}>
              Share
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
