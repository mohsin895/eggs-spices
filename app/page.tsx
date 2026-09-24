'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'


import { FloatingCart } from '@/components/floating-cart'

import { useEffect, useState } from 'react'

import {CategorySlider} from "@/components/category";
import ProductSection from "@/components/products-section";

import {BrandSlider} from "@/components/brands";
import BestSellingProduct from "@/components/best-selling-product";
import {HeroSection} from "@/components/hero-section";




interface Testimonial {
  id: number
  name: string
  title: string
  testimonial: string
}

export default function Home() {


  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    // Fetch categories


    // Fetch testimonials
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => setTestimonials(data.testimonials))
      .catch((err) => console.error('[v0] Failed to fetch testimonials:', err))
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Carousel */}
        <section className="px-4 md:px-6 py-6 md:py-8">
          <div className="max-w-7xl mx-auto">
           <HeroSection />


          </div>


        </section>
          <CategorySlider />

        {/* Featured Categories */}
<BestSellingProduct />
          <BrandSlider />
        {/* Featured Products */}
       <ProductSection />





      </main>
      <Footer />

      {/* Floating Cart Widget */}
      <FloatingCart />
    </>
  )
}
