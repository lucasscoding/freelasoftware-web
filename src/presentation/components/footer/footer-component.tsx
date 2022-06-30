import React, { Component, ReactNode } from 'react'
import { Container } from 'react-bootstrap'
import Style from './footer-component.css'

export class FooterComponent extends Component {
  render (): ReactNode {
    return (
      <Container className={Style.container_background}>
        <Container className={Style.container}>
          email: contato@freelasoftware.com
        </Container>
      </Container>
    )
  }
}
