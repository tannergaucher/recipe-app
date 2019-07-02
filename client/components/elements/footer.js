import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Link href="/">Site Title</Link>
      <style jsx>
        {`
          background: papayawhip;
          padding: 1rem;
        `}
      </style>
    </footer>
  )
}
