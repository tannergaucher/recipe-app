import React from 'react'

export default function card({ recipe }) {
  return (
    <>
      <h2>{recipe.name}</h2>
      <h5>{recipe.description}</h5>
    </>
  )
}
