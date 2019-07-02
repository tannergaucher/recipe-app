import React from 'react'

import { Header, Footer } from '.'

export default function layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
      <style jsx>{`
        .container {
          min-height: 100vh;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}
