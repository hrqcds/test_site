
import React from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { 
            background: '#1f2937', 
            color: '#fff',
            borderRadius: '12px',
            padding: '16px'
          },
          success: { 
            style: { 
              background: '#059669',
              color: '#fff'
            } 
          },
          error: { 
            style: { 
              background: '#dc2626',
              color: '#fff'
            } 
          }
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
