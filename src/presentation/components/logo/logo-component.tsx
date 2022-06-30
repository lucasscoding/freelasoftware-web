import React, { Component, ReactNode } from 'react'
import Style from './logo-component.css'

export class LogoComponent extends Component {
  render (): ReactNode {
    return <>
        <img className={'d-inline-block align-top'} alt={'logo'} src={'https://cdn.svgporn.com/logos/react.svg'} width={30} height={30} />
        <h1 className={Style.h1} >Freela Software</h1>
    </>
  }
}
