'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="brand-name">Ma. Virginia</Link>
          <div className="nav-menu">
            <Link href="/" className="nav-link">Artículos</Link>
            <Link href="/recetas" className="nav-link">Recetas</Link>
            <Link href="/sobre-mi" className="nav-link">Sobre Mí</Link>
            <a href="https://wa.me/5493413246408" target="_blank" className="nav-cta">Reservar Asesoria</a>
          </div>
          <button 
            className={`hamburger ${isOpen ? 'open' : ''}`} 
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-menu-btn" onClick={closeMenu} aria-label="Cerrar menú">
          &times;
        </button>
        <Link href="/" className="mobile-link" onClick={closeMenu}>Artículos</Link>
        <Link href="/recetas" className="mobile-link" onClick={closeMenu}>Recetas</Link>
        <Link href="/sobre-mi" className="mobile-link" onClick={closeMenu}>Sobre Mí</Link>
        <a href="https://wa.me/5493413246408" target="_blank" className="mobile-cta">Reservar Asesoria</a>
      </div>
    </>
  )
}
