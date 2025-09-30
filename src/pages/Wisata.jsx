import React, { useState } from "react";
import Navbar from "../components/Navbar";

const wisataList = [
  {
    title: "Waerebo Village",
    img: "/Waerebo.jpg",
    desc: "Waerebo adalah desa tradisional di pegunungan Flores yang terkenal dengan rumah adat berbentuk kerucut dan budaya lokal yang masih kental."
  },
  {
    title: "Labuan Bajo",
    img: "/labuan bajo.jpg",
    desc: "Labuan Bajo adalah kota pelabuhan yang menjadi gerbang ke Taman Nasional Komodo dan keindahan bawah laut yang menakjubkan."
  },
  {
    title: "Air Terjun Cunca Wulang",
    img: "/air terjun.jpg",
    desc: "Air Terjun Cunca Wulang memiliki tebing-tebing batu yang dramatis dan kolam air jernih yang cocok untuk berenang dan cliff jumping."
  },
  {
    title: "Danau Kelimutu",
    img: "/danau kelimutu.jpg",
    desc: "Danau Kelimutu dikenal karena tiga danaunya yang memiliki warna berbeda dan dapat berubah warna secara misterius."
  },
  {
    title: "Gili Lawadarat",
    img: "/gili.jpg",
    desc: "Gili Lawadarat adalah pulau kecil dengan perairan jernih dan terumbu karang yang indah, ideal untuk snorkeling dan diving."
  },
  {
    title: "Kanawa Island",
    img: "/kanawa.jpg",
    desc: "Pulau Kanawa adalah surga tropis dengan pasir putih dan air biru jernih yang sempurna untuk liburan santai dan eksplorasi laut."
  },
{
    title: "Gunung Lewotobi",
    img: "/gunung2.jpg",
    desc: "Gunung Lewotobi adalah dua gunung berapi kembar yang memiliki puncak hampir setinggi."
  },
  {
    title: "Gunung Ile Mandiri",
    img: "/gunung3.jpg",
    desc: "Gunung Ile Mandiri termasuk jenis gunung stratovolcano yang bentuknya mengerucut, Tinggi Gunung Ile Mandiri adalah 1.484 meter di atas permukaan laut (mdpl). Gunung ini terletak di Kabupaten Flores Timur."
  },
  {
    title: "Gunung Ile Boleng",
    img: "/gunung4.jpg",
    desc: "Gunung Ile Boleng menawarkan pemandangan lanskap alam yang memukau. Dari puncaknya, pengunjung dapat menikmati panorama luas pulau Adonara. "
  },
];








const WisataCard = ({ title, img, desc }) => {
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

export default function Wisata() {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* Spacing from fixed Navbar */}
      <div className="h-20"></div>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-10">Wisata Alam Pulau Flores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {wisataList.map((item, index) => (
            <WisataCard
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
