import React from 'react'
import fetch from 'isomorphic-fetch'

import { Layout } from '../components/elements'
import { MyRecipes, CreateRecipe } from '../components/recipe/'

export default function Home(props) {
  return (
    <Layout>
      <h1>Homepage</h1>
      <MyRecipes recipes={props.data} />
      <CreateRecipe />
    </Layout>
  )
}

Home.getInitialProps = async function() {
  const res = await fetch(`http://localhost:7777/`)
  const data = await res.json()
  return { data }
}
