
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const carRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.headline', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })

      gsap.from('.stat', {
        y: 35,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        delay: 0.4,
        ease: 'power2.out'
      })

      gsap.from('.car', {
        scale: 0.7,
        opacity: 0,
        duration: 1.4,
        delay: 0.5,
        ease: 'power3.out'
      })

      gsap.to(carRef.current, {
        x: 450,
        y: 100,
        rotate: -8,
        scale: 0.75,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <main>
      <section className="hero" ref={heroRef}>
        <nav className="navbar">
          <h2>ITZFIZZ<span>.</span></h2>
          <a href="#about">ABOUT US ↗</a>
        </nav>

        <div className="hero-content">
          <p className="small-heading">DRIVE THE FUTURE</p>

          <h1 className="headline">
            WELCOME<br />
            <span>ITZFIZZ</span>
          </h1>

          <div className="stats">
            <div className="stat">
              <h2>58%</h2>
              <p>Increase in pick up point use</p>
            </div>

            <div className="stat">
              <h2>23%</h2>
              <p>Decrease in customer calls</p>
            </div>

            <div className="stat">
              <h2>27%</h2>
              <p>Increase in customer satisfaction</p>
            </div>

            <div className="stat">
              <h2>40%</h2>
              <p>Faster delivery experience</p>
            </div>
          </div>
        </div>

        <div className="car" ref={carRef}>
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85"
            alt="Sports car"
          />
        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      <section className="about" id="about">
        <p>THE EXPERIENCE</p>
        <h2>
          A NEW WAY TO<br />
          EXPERIENCE <span>DRIVING.</span>
        </h2>
        <p className="about-description">
          Innovation, performance and technology
          come together to create something extraordinary.
        </p>
      </section>

      <footer>
        <h2>ITZFIZZ.</h2>
        <p>DESIGNED FOR THE FUTURE © 2026</p>
      </footer>
    </main>
  )
}

export default App
