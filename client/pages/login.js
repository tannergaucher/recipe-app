import React from 'react'

export default function Login() {
  return (
    <fieldset>
      <h1>Please Log In</h1>
      <form
        onSubmit={() => {
          // POST DATA
        }}
      >
        <label htmlFor="email">
          Email
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" />
        </label>
        <button>Login</button>
      </form>
    </fieldset>
  )
}
