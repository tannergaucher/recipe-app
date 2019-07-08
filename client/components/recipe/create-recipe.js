import React, { useState } from 'react'

export default function CreateRecipe() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <fieldset>
      <h1>Add an new Recipe</h1>
      <form
        onSubmit={async e => {
          e.preventDefault()
          const res = await fetch(`http://localhost:7777/`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          // const data = await res.json()
        }}
      >
        <label htmlFor="name">
          Recipe Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label htmlFor="description">
          Recipe Description
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add New Recipe</button>
      </form>
    </fieldset>
  )
}
