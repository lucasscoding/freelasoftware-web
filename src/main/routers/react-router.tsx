import React, { Component, ReactNode } from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { HomePage, UnderConstructionPage } from '@/presentation/pages'

export class ApplicationRouter extends Component {
  render (): ReactNode {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/warning'} element={<UnderConstructionPage />} />
        </Switch>
      </BrowserRouter>
    )
  }
}
