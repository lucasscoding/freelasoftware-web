import React, { Component, ReactNode } from 'react'
import { HeaderComponent, LogoComponent, MainComponent } from '@/presentation/components'

type PageModelProps = {
  children: any
}

export class PageModelComponent extends Component<PageModelProps> {
  render (): ReactNode {
    return (
      <>
        <HeaderComponent>
          <LogoComponent />
        </HeaderComponent>
        <MainComponent>
          { this.props.children }
        </MainComponent>
      {/* <FooterComponent /> */}
      </>
    )
  }
}
