import React, { Component, ReactNode } from 'react'
import { Container } from 'react-bootstrap'
import Style from './main-component.css'

type MainProps = {
  children: any
}

export class MainComponent extends Component<MainProps> {
  render (): ReactNode {
    return (
        <Container className={Style.container}>
          { this.props.children }
        </Container>
    )
  }
}
