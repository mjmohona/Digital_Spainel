import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t py-10 mt-12">
      <div className="container mx-auto px-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Digital Spaniel — Built as a technical task demo.
      </div>
    </footer>
  )
}
