import React, { useState, useEffect } from "react";
import "./App.css";

// External Libraries
import AOS from "aos";
import "aos/dist/aos.css";
import { jsPDF } from "jspdf";
import Swal from "sweetalert2";

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
import keratin from "./assets/keratin.jpg";
import step from "./assets/step.jpg";

// Card Component
function Card({ img, title, price, category, onAddToCart }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" data-aos="fade-up">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
        <div className="relative h-56 overflow-hidden rounded-t-2xl group">
          <img src={img} alt={title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition"></div>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">{category}</h3>
          <h2 className="text-gray-900 text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-pink-600 font-bold">${parseFloat(price.replace('$', '')).toFixed(2)}</p>
          <button 
            onClick={() => onAddToCart({ title, price, img })}
            className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-full text-sm font-semibold transition shadow-md active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false); 
  const [cart, setCart] = useState([]); 
  const [isCartOpen, setIsCartOpen] = useState(false); 

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: false });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [search]);

  // Original Data Array
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

  const addToCart = (item) => {
    setCart([...cart, item]);
    Swal.fire({
      title: 'Success!',
      text: `${item.title} added to cart`,
      icon: 'success',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    });
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.setTextColor(219, 39, 119); 
    doc.text("Makeuplicious Invoice", 20, 20);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
    doc.line(20, 35, 190, 35);

    let y = 45;
    doc.text("Service Name", 20, y);
    doc.text("Price", 170, y);
    doc.line(20, y + 2, 190, y + 2);

    y += 10;
    cart.forEach((item) => {
      doc.text(`${item.title}`, 20, y);
      doc.text(`${item.price}`, 170, y);
      y += 8;
    });

    doc.line(20, y, 190, y);
    doc.setFontSize(14);
    doc.text(`Total Payable: $${calculateTotal()}`, 145, y + 10);
    doc.save("Makeuplicious_Order.pdf");
  };

  const filteredData = allData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const getSectionItems = (sectionName) => filteredData.filter(item => item.section === sectionName);

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[80] bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-pink-600">Makeuplicious</h1>
          </div>

          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 lg:w-80 px-5 py-2 rounded-full border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <ul className="hidden md:flex gap-6 font-medium text-gray-700 mr-4">
              <a href="#home" className="hover:text-pink-600"><li>Home</li></a>
              <a href="#services" className="hover:text-pink-600"><li>Services</li></a>
              <a href="#hair" className="hover:text-pink-600"><li>Hair</li></a>
              <a href="#makeup" className="hover:text-pink-600"><li>Makeup</li></a>
            </ul>
            
            {/* CART BUTTON */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  {cart.length}
                </span>
              )}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* CART DRAWER (Overlap Fixed) */}
      <div className={`fixed inset-0 z-[100] transition-all duration-300 ${isCartOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsCartOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-full max-w-[350px] bg-white shadow-2xl transition-transform duration-300 p-6 flex flex-col ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-xl font-bold text-pink-600">My Selection</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-pink-600 transition text-xl font-bold">✕</button>
          </div>

          <div className="flex-grow overflow-y-auto space-y-3 pr-2 custom-scrollbar">
            {cart.length === 0 ? (
              <p className="text-center text-gray-400 mt-10">Empty cart!</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex gap-3 bg-white border border-gray-100 p-2 rounded-xl shadow-sm items-center">
                  <img src={item.img} className="w-12 h-12 object-cover rounded-lg" alt="" />
                  <div className="flex-grow">
                    <h4 className="text-sm font-semibold text-gray-800 leading-tight">{item.title}</h4>
                    <p className="text-pink-600 text-xs font-bold">{item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(index)} className="text-gray-300 hover:text-red-500 transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between font-bold text-lg mb-4"><span>Total:</span><span className="text-pink-600">${calculateTotal()}</span></div>
              <button onClick={generateInvoice} className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold hover:bg-pink-700 transition shadow-lg flex items-center justify-center gap-2">
                Download Invoice (PDF)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white pt-20" id="home">
        <img src={heroImg} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center" data-aos="zoom-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Discover Your <br /><span className="text-pink-400">True Beauty</span></h1>
          <p className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="500">Luxury Bridal & Professional Makeup Services</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
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

      {/* Content Sections */}
      {["services", "hair", "makeup"].map(sec => (
        getSectionItems(sec).length > 0 && (
          <section className="py-24" id={sec} key={sec}>
            <div className="container px-5 mx-auto">
              <h1 className="text-center text-3xl font-bold text-pink-600 mb-12 capitalize">{sec === "services" ? "Services We Offer" : sec}</h1>
              <div className="flex flex-wrap -m-4">
                {getSectionItems(sec).map((item, index) => <Card key={index} {...item} onAddToCart={addToCart} />)}
              </div>
            </div>
          </section>
        )
      ))}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 text-center">
        <h2 className="text-xl font-bold text-pink-500">Makeuplicious</h2>
        <p className="mt-4">© 2026 All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
