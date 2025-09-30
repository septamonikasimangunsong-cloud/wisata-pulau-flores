import React, { useState } from "react";
import Navbar from "../components/Navbar";

const BudayaList = [
  {
    title: "Festival Kelimutu",
    img: "/festival1.jpg",
  },
  {
    title: "Festival Budaya",
    img: "/festival2.jpg",
  },
  {
    title: "Festival Menangkap Paus dengan Alat Tradisional",
    img: "/festival3.png",
  },
  {
    title: "Festival Reba Ngada",
    img: "/festival4.jpg",
  },
  {
    title: "Festival Tenun Ikat Sikka",
    img: "/festival5.jpg",
  },
];





const BudayaCard = ({ title, img, desc }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="font-bold mb-2">{title}</p>
        <button
          onClick={() => setShowDesc(!showDesc)}
          className="text-sm text-blue-600 hover:underline"
        >
          {showDesc ? "Sembunyikan Deskripsi" : "Lihat Deskripsi"}
        </button>
        {showDesc && <p className="mt-2 text-gray-700 text-sm">{desc}</p>}
      </div>
    </div>
  );
};

export default function Budaya() {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* Spacing from fixed Navbar */}
      <div className="h-20"></div>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-10">Festival Budaya Pulau Flores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {BudayaList.map((item, index) => (
            <BudayaCard
              key={index}
              title={item.title}
              img={item.img}
              desc={item.desc}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-4 text-sm">
        © 2025 Jelajah Pulau Flores | septamonika
      </footer>
    </div>
  );
}
