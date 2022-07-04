import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import React, { Component, ReactNode } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Style from './under-construction-page.css'
export class UnderConstructionPage extends Component {
  render (): ReactNode {
    return (
      <Container fluid={'md'}>
        <Row>
          <Col>
            <div className={Style.container}>
              <div>
              <FontAwesomeIcon icon={faPersonDigging} size={'4x'} className={Style.icon} />
                <h1>Em Construção!</h1>
                <p>
                  Nosso site está em construção, mas estamos prontos para começar! <br />
                  Estamos preparando algo incrivel e emocionante para você.
                </p>
                <Button variant={'primary'} className={Style.link} href={'mailto:contato@freelasoftware.com'}>email: contato@freelasoftware.com</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
