import React, { Component, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export class HomePage extends Component {
  render (): ReactNode {
    return (
      <Navigate to={'/warning'} />
    )
  }
}
