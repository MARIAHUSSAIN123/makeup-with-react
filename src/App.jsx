import React, { useRef } from "react";
import "./App.css";

// GSAP Imports
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import logo from "./assets/logo.png";
import heroImg from "./assets/heroimg.jpg";
import wax from "./assets/waxing.jpg";
import thread from "./assets/threading.jpg";
import meni from "./assets/menicure.jpg";
import pedi from "./assets/pedicure.jpg";
import bodywax from "./assets/bodywax.jpg";
import hydra from "./assets/hydra.jpg";
import whitening from "./assets/whitening.jpg";
import skin from "./assets/skinpolish.jpg";
import highlights from "./assets/highlights.jpg";
import lowlights from "./assets/lowlights.jpg";
import relaxing from "./assets/relaxing.jpg";
import keratin from "./assets/keratin.jpg";
import step from "./assets/step.jpg";
import bangs from "./assets/bangs.jpg";
import bob from "./assets/bob.jpg";
import layers from "./assets/layers.jpg";
import glam from "./assets/glam.jpg";
import party from "./assets/party.jpg";
import download from "./assets/download (12).jpg";
import bride from "./assets/bride.jpg";
import smoky from "./assets/smoky.jpg";
import two from "./assets/2.jpg";
import nikkah from "./assets/nikkah.jpg";
import model from "./assets/model.jpg";
import about from "./assets/about.jpg";

function Card({ img, title, price, category }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full card-item">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-56 overflow-hidden rounded-t-2xl group">
          <img src={img} alt={title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition"></div>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-gray-400 text-xs tracking-widest mb-1">{category}</h3>
          <h2 className="text-gray-900 text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-pink-600 font-medium">{price}</p>
          <button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-full text-sm font-semibold transition shadow-md hover:shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const container = useRef();

  useGSAP(() => {
    // 1. Hero Animation (Only runs once on load)
    const heroTl = gsap.timeline();
    heroTl.from(".hero-img", { opacity: 0, scale: 1.1, duration: 1.5 })
          .from(".hero-text h1", { y: 50, opacity: 0, duration: 0.8 }, "-=1")
          .from(".hero-text p", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5");

    // 2. Simple Scroll Reveal for all Sections
    const sections = gsap.utils.toArray('section');
    sections.forEach((section) => {
      // We target cards and why-choose-us boxes specifically
      const revealItems = section.querySelectorAll(".card-item, .feature-box");
      
      if (revealItems.length > 0) {
        gsap.from(revealItems, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          clearProps: "all" // This ensures GSAP doesn't leave hidden styles behind
        });
      }
    });

  }, { scope: container });

  return (
    <div ref={container} className="overflow-x-hidden">
      {/* NAVBAR - NO ANIMATION */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-pink-600">Makeuplicious</h1>
          </div>
          <div className="hidden md:block relative">
            <input type="text" placeholder="Search services..." className="w-64 pl-10 pr-4 py-2 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm" />
          </div>
          <ul className="hidden md:flex gap-8 font-medium text-gray-700">
           <a href="#home"><li className="hover:text-pink-600 cursor-pointer transition">Home</li></a>
           <a href="#services"><li className="hover:text-pink-600 cursor-pointer transition">Services</li></a>
           <a href="#hair"> <li className="hover:text-pink-600 cursor-pointer transition">Hair</li></a>
           <a href="#makeup"> <li className="hover:text-pink-600 cursor-pointer transition">Makeup</li></a>
           <a href="#about"> <li className="hover:text-pink-600 cursor-pointer transition">About</li></a>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img src={heroImg} alt="Makeup Model" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Discover Your <br /><span>True Beauty</span></h1>
          <p>Luxury bridal & professional makeup services</p>
        </div>
      </section>

        {/* SERVICES */}
      <section className="text-gray-600 body-font" id="services">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-center text-3xl font-bold text-pink-600 mb-12">
            Services We Offer
          </h1>
          <div className="flex flex-wrap -m-4">
            <Card img={wax} title="Waxing" price="$16.00" category="CATEGORY1" />
            <Card img={thread} title="Threading" price="$21.15" category="CATEGORY2" />
            <Card img={meni} title="Menicure" price="$12.00" category="CATEGORY3" />
            <Card img={pedi} title="Pedicure" price="$18.40" category="CATEGORY4" />
            <Card img={bodywax} title="Body-Wax" price="$16.00" category="CATEGORY5" />
            <Card img={hydra} title="Hydra-facial" price="$21.15" category="CATEGORY6" />
            <Card img={whitening} title="Whitening Facial" price="$12.00" category="CATEGORY7" />
            <Card img={skin} title="Skin Polish" price="$18.40" category="CATEGORY8" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Added 'feature-box' class for visibility fix */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-center text-3xl font-bold text-pink-600 mb-12">Why Choose Makeuplicious</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="feature-box p-6 rounded-2xl shadow-sm border border-gray-50 hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Certified Artists</h3>
              <p className="text-gray-500 text-sm">Professional & experienced makeup experts.</p>
            </div>
            <div className="feature-box p-6 rounded-2xl shadow-sm border border-gray-50 hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Premium Products</h3>
              <p className="text-gray-500 text-sm">High-end brands for flawless results.</p>
            </div>
            <div className="feature-box p-6 rounded-2xl shadow-sm border border-gray-50 hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Hygienic & Safe</h3>
              <p className="text-gray-500 text-sm">Clean tools & skin-friendly products.</p>
            </div>
            <div className="feature-box p-6 rounded-2xl shadow-sm border border-gray-50 hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Bridal Specialists</h3>
              <p className="text-gray-500 text-sm">Making your big day unforgettable.</p>
            </div>
          </div>
        </div>
      </section>

     {/* HAIR */}
      <section className="text-gray-600 body-font" id="hair">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-center text-3xl font-bold text-pink-600 mb-12">
            Hair Chemical & Styling
          </h1>
          <div className="flex flex-wrap -m-4">
            <Card img={highlights} title="Highlights" price="$16.00" category="CATEGORY1" />
            <Card img={lowlights} title="Lowlights" price="$21.15" category="CATEGORY2" />
            <Card img={relaxing} title="Hair Relaxing" price="$12.00" category="CATEGORY3" />
            <Card img={keratin} title="Keratin" price="$18.40" category="CATEGORY4" />
            <Card img={layers} title="Layers Cut" price="$16.00" category="CATEGORY5" />
            <Card img={step} title="Step Cut" price="$21.15" category="CATEGORY6" />
            <Card img={bangs} title="Front Bangs" price="$12.00" category="CATEGORY7" />
            <Card img={bob} title="Bob Cut" price="$18.40" category="CATEGORY8" />
          </div>
        </div>
      </section>

      {/* MAKEUP */}
      <section className="text-gray-600 body-font" id="makeup">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-center text-3xl font-bold text-pink-600 mb-12">
            Makeups
          </h1>
          <div className="flex flex-wrap -m-4">
            <Card img={smoky} title="Smoky Makeup" price="$16.00" category="CATEGORY1" />
            <Card img={party} title="HD Makeup" price="$21.15" category="CATEGORY2" />
            <Card img={download} title="Party Makeup" price="$12.00" category="CATEGORY3" />
            <Card img={glam} title="Glamours Makeup" price="$18.40" category="CATEGORY4" />
            <Card img={nikkah} title="Bridal Makeup" price="$16.00" category="CATEGORY5" />
            <Card img={bride} title="Valima Makeup" price="$21.15" category="CATEGORY6" />
            <Card img={two} title="Cut Crease Makeup" price="$12.00" category="CATEGORY7" />
            <Card img={model} title="Model Makeup" price="$18.40" category="CATEGORY8" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-pink-50 py-24" id="about">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Enhancing Your Natural Beauty
            </h1>
            <p className="text-gray-600 mb-6">
              At <span className="text-pink-600 font-semibold">Makeuplicious</span>,
              we offer luxury bridal & professional makeup services to make
              every moment unforgettable.
            </p>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition">
              Book Appointment
            </button>
          </div>
          <div className="md:w-1/2 about-img">
            <img src={about} alt="about" className="rounded-2xl shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-pink-50 py-24">
        <div className="container mx-auto px-5">
          <h2 className="text-center text-3xl font-bold text-pink-600 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-600 mb-4">“Best bridal makeup experience ever. Loved every detail!”</p>
              <h4 className="font-semibold text-pink-600">Ayesha Khan</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-600 mb-4">“Professional staff & premium products. Highly recommended.”</p>
              <h4 className="font-semibold text-pink-600">Maham Ali</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-600 mb-4">“My party makeup was flawless. Got so many compliments!”</p>
              <h4 className="font-semibold text-pink-600">Sara Ahmed</h4>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-center text-3xl font-bold text-pink-600 mb-12">
            Our Work
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[glam, bride, smoky, party, model, nikkah, two, download].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-xl group">
                <img src={img} alt="gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-pink-500 mb-4">Makeuplicious</h3>
            <p className="text-sm">Luxury bridal & professional makeup services.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Services</li>
              <li>Makeup</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm">📍 Karachi, Pakistan</p>
            <p className="text-sm">📞 +92 335 2374683</p>
            <p className="text-sm">✉️ info@makeuplicious.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-pink-500">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-10">
          © 2026 Makeuplicious. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;