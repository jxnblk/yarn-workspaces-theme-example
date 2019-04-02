import React from 'react'
import Header from './header'

export default props =>
  <>
    <Header />
    <main>
      {props.children}
    </main>
  </>
