// import React from 'react'
import Header from './components/Header'
import HeroSplit from './components/HeroSplit'
import ProjectsSection from './components/ProjectsSection'
import TestimonialCarousel from './features/testimonials/TestimonialCarousel'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <HeroSplit />
        <ProjectsSection />
        <section id="case-studies" className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-6">Case Studies</h2>
          <p className="text-gray-600">A three-panel carousel / slider would be implemented here as a next step.</p>
        </section>

        <section id="testimonials" className="bg-white py-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Kind words from our clients</h2>
          <TestimonialCarousel />
        </section>
      </main>

      <Footer />
    </div>
  )
}
