import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/">Site Title</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/login">Log In</Link>
      <style jsx>
        {`
          padding: 1rem;
          background: papayawhip;
        `}
      </style>
    </header>
  )
}
