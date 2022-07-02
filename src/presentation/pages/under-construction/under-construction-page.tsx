import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@fortawesome/free-solid-svg-icons'
import React, { Component, ReactNode } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Style from './under-construction-page.css'
export class UnderConstructionPage extends Component {
  render (): ReactNode {
    return (
      <Container fluid={'md'}>
        <Row>
          <Col md= {3}>
            <div className={Style.container}>
              <div>
              <FontAwesomeIcon icon={faWarning} size={'4x'} color={'#b01717'} />
                <h1>Em Construção!</h1>
                <p>
                  Nosso site está em construção, mas estamos prontos para começar! <br />
                  Estamos preparando algo incrivel e emocionante para você.
                </p>
              </div>
            </div>
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
    )
  }
}
