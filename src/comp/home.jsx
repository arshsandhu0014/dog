import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
export default function Home() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <CardDeck>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
          </Col>
          <Col xs="6">
          hello
          </Col>
        </Row>
      </Container>
    );
  }
