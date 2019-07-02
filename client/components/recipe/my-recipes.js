import React from 'react'

import { Card } from '.'

export default function MyRecipes({ recipes }) {
  return (
    <>
      {recipes.map(recipe => (
        <Card recipe={recipe} key={recipe._id} />
      ))}
    </>
  )
}
