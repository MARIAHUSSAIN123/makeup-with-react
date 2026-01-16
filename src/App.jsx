import React, { useState, useEffect } from "react";
import "./App.css";

// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";

// --- All Your Original Image Imports ---
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

// Card Component with AOS fade-up
function Card({ img, title, price, category }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" data-aos="fade-up">
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
  const [search, setSearch] = useState("");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation ki speed
      offset: 100,    // Kitne pixels pehle animation start ho
      once: false,    // Scroll up/down dono pe chale
    });
  }, []);

  // Refresh AOS whenever search results change
  useEffect(() => {
    AOS.refresh();
  }, [search]);

  // Unified Data Array
  const allData = [
    { img: wax, title: "Waxing", price: "$16.00", section: "services", category: "Skin" },
    { img: thread, title: "Threading", price: "$21.15", section: "services", category: "Skin" },
    { img: meni, title: "Menicure", price: "$12.00", section: "services", category: "Nails" },
    { img: pedi, title: "Pedicure", price: "$18.40", section: "services", category: "Nails" },
    { img: bodywax, title: "Body-Wax", price: "$16.00", section: "services", category: "Skin" },
    { img: hydra, title: "Hydra-facial", price: "$89.15", section: "services", category: "Facial" },
    { img: whitening, title: "Whitening Facial", price: "$50.00", section: "services", category: "Facial" },
    { img: skin, title: "Skin Polish", price: "$56.40", section: "services", category: "Facial" },
    { img: highlights, title: "Highlights", price: "$16.00", section: "hair", category: "Color" },
    { img: lowlights, title: "Lowlights", price: "$21.15", section: "hair", category: "Color" },
    { img: relaxing, title: "Hair Relaxing", price: "$12.00", section: "hair", category: "Styling" },
    { img: keratin, title: "Keratin", price: "$18.40", section: "hair", category: "Styling" },
    { img: layers, title: "Layers Cut", price: "$16.00", section: "hair", category: "Cut" },
    { img: step, title: "Step Cut", price: "$21.15", section: "hair", category: "Cut" },
    { img: bangs, title: "Front Bangs", price: "$12.00", section: "hair", category: "Cut" },
    { img: bob, title: "Bob Cut", price: "$18.40", section: "hair", category: "Cut" },
    { img: smoky, title: "Smoky Makeup", price: "$16.00", section: "makeup", category: "Party" },
    { img: party, title: "HD Makeup", price: "$21.15", section: "makeup", category: "Party" },
    { img: download, title: "Party Makeup", price: "$12.00", section: "makeup", category: "Party" },
    { img: glam, title: "Glamours Makeup", price: "$18.40", section: "makeup", category: "Glam" },
    { img: nikkah, title: "Bridal Makeup", price: "$16.00", section: "makeup", category: "Bridal" },
    { img: bride, title: "Valima Makeup", price: "$21.15", section: "makeup", category: "Bridal" },
    { img: two, title: "Cut Crease Makeup", price: "$12.00", section: "makeup", category: "Party" },
    { img: model, title: "Model Makeup", price: "$18.40", section: "makeup", category: "Professional" },
  ];

  const filteredData = allData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const getSectionItems = (sectionName) => filteredData.filter(item => item.section === sectionName);

  return (
    <div className="overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-pink-600">Makeuplicious</h1>
          </div>
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search for beauty services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-80 px-5 py-2 rounded-full border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
            />
          </div>
          <ul className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#home" className="hover:text-pink-600"><li>Home</li></a>
            <a href="#services" className="hover:text-pink-600"><li>Services</li></a>
            <a href="#hair" className="hover:text-pink-600"><li>Hair</li></a>
            <a href="#makeup" className="hover:text-pink-600"><li>Makeup</li></a>
            <a href="#about" className="hover:text-pink-600"><li>About</li></a>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-white" id="home">
        <img src={heroImg} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center" data-aos="zoom-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Discover Your <br /><span className="text-pink-400">True Beauty</span></h1>
          <p className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="500">Luxury Bridal & Professional Makeup Services</p>
        </div>
      </section>

      {/* WHY CHOOSE US (Features) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-12" data-aos="fade-down">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Certified Artists", "Premium Products", "Hygienic & Safe", "Bridal Specialists"].map((t, i) => (
              <div key={i} className="p-6 rounded-2xl border shadow-sm" data-aos="flip-left" data-aos-delay={i * 100}>
                <h3 className="font-semibold text-lg mb-2 text-pink-600">{t}</h3>
                <p className="text-gray-500 text-sm">Professional care for you.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC SECTIONS WITH AOS */}
      {getSectionItems("services").length > 0 && (
        <section className="py-24" id="services">
          <div className="container px-5 mx-auto">
            <h1 className="text-center text-3xl font-bold text-pink-600 mb-12" data-aos="fade-down">Services We Offer</h1>
            <div className="flex flex-wrap -m-4">
              {getSectionItems("services").map((item, index) => <Card key={index} {...item} />)}
            </div>
          </div>
        </section>
      )}

      {getSectionItems("hair").length > 0 && (
        <section className="py-24" id="hair">
          <div className="container px-5 mx-auto">
            <h1 className="text-center text-3xl font-bold text-pink-600 mb-12" data-aos="fade-down">Hair Styling</h1>
            <div className="flex flex-wrap -m-4">
              {getSectionItems("hair").map((item, index) => <Card key={index} {...item} />)}
            </div>
          </div>
        </section>
      )}

      {getSectionItems("makeup").length > 0 && (
        <section className="py-24" id="makeup">
          <div className="container px-5 mx-auto">
            <h1 className="text-center text-3xl font-bold text-pink-600 mb-12" data-aos="fade-down">Makeups</h1>
            <div className="flex flex-wrap -m-4">
              {getSectionItems("makeup").map((item, index) => <Card key={index} {...item} />)}
            </div>
          </div>
        </section>
      )}

      {/* ABOUT SECTION */}
      <section className="bg-pink-50 py-24 overflow-hidden" id="about">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Enhancing Your Natural Beauty</h1>
            <p className="text-gray-600 mb-6 italic">"Expert makeup that highlights your soul."</p>
            <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition">Book Now</button>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <img src={about} alt="about" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-12" data-aos="fade-down">Our Masterpieces</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[glam, bride, smoky, party, model, nikkah, two, download].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-xl" data-aos="zoom-in" data-aos-delay={index * 50}>
                <img src={img} alt="work" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-pink-50 py-24">
        <div className="container mx-auto px-5">
          <h2 className="text-center text-3xl font-bold text-pink-600 mb-12" data-aos="fade-up">Client Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Ayesha Khan", "Maham Ali", "Sara Ahmed"].map((name, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay={i * 200}>
                <p className="text-gray-600 mb-4 italic">“Outstanding experience! Highly recommended.”</p>
                <h4 className="font-bold text-pink-600">— {name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-16 text-center">
        <div data-aos="fade-in">
          <h2 className="text-2xl font-bold text-pink-500 mb-4">Makeuplicious</h2>
          <p className="mb-8">Your trusted beauty partner in Karachi.</p>
          <p className="text-gray-500">© 2026 Makeuplicious. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;