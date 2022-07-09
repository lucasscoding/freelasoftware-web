import React, { Component, ReactNode } from 'react'
import { PageModelComponent } from '@/presentation/components'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import Style from './signup-page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
export class SignUpPage extends Component {
  render (): ReactNode {
    return (
      <PageModelComponent>
        <Container>
          <Row>
            <Col className={Style.center}>
                <Card border={'info'} className={Style.card}>
                  <Card.Body className={Style.body}>
                    <h1>Sign Up</h1>
                    <div className={Style.icon}>
                      <FontAwesomeIcon icon={faSignIn} size={'3x'} />
                    </div>
                    <Form className={Style.form}>
                      <Form.Group>
                        <input type={'mail'} placeholder={'Email'} />
                      </Form.Group>
                      <Form.Group>
                        <input type={'password'} placeholder={'Password'}/>
                      </Form.Group>
                      <Button variant={'primary'} type={'submit'}>login</Button>
                    </Form>
                  </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      </PageModelComponent>
    )
  }
}
