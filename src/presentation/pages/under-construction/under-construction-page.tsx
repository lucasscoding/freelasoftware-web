import React, { Component, ReactNode } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class UnderConstructionPage extends Component {
  render (): ReactNode {
    return (
      <Container fluid={'md'}>
        <Row>
          <Col>
            description
          </Col>
          <Col>
            image
          </Col>
        </Row>
      </Container>
    )
  }
}
