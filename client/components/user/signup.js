import React, { useState } from 'react'
import fetch from 'isomorphic-fetch'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch(`http://localhost:7777/signup`, {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.ok) {
      setLoading(false)
      setName('')
      setEmail('')
      setPassword('')
    } else {
      setError('ERROR!')
      setLoading(false)
      setPassword('')
    }
  }

  return (
    <fieldset disabled={loading}>
      <h1>Sign Up for an Account</h1>
      {error && <p>{error}</p>}
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </fieldset>
  )
}
