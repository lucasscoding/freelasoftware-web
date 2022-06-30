import React, { Component, ReactNode } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import Style from './header-component.css'

type HeaderProps = {
  children: any
}

export class HeaderComponent extends Component<HeaderProps> {
  render (): ReactNode {
    return (
      <>
        <Navbar bg={'dark'} variant={'dark'}>
          <Container>
              <Navbar.Brand href={'#home'} className={Style.container_background}>
                <Container className={Style.container}>
                  { this.props.children }
                </Container>
              </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    )
  }
}
