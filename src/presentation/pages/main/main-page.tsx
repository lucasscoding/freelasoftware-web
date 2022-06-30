import React, { Component, ReactNode } from 'react'
import { UnderConstructionPage } from '@/presentation/pages'
import { FooterComponent, HeaderComponent, LogoComponent, MainComponent } from '@/presentation/components'

export class MainPage extends Component {
  render (): ReactNode {
    return (
      <>
        <HeaderComponent>
          <LogoComponent />
        </HeaderComponent>
        <MainComponent>
          <UnderConstructionPage />
        </MainComponent>
        <FooterComponent />
      </>
    )
  }
}
