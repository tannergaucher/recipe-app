import React from 'react'
import fetch from 'isomorphic-fetch'

import { Layout } from '../components'

export default function Home(props) {
  return (
    <Layout>
      <h1>Homepage</h1>
    </Layout>
  )
}

// Home.getInitialProps = async function() {
//   const res = await fetch(`http://localhost:4000`)
//   const data = await res.json()
//   return { data }
// }
