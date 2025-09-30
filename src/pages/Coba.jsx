import React from "react";
import Navbar from "../components/Navbar";

export default function Coba() {
  const destinasi = [
    { img: "../../public/Waerebo.jpg", title: "Waerebo Village" },
    { img: "../../public/labuan bajo.jpg", title: "Labuan Bajo" },
    { img: "../../public/air terjun.jpg", title: "Air Terjun Cunca Wulang" },
    { img: "../../public/danau kelimutu.jpg", title: "Danau Kelimutu" },
    { img: "../../public/gili.jpg", title: "Gili Lawadarat" },
    { img: "../../public/kanawa.jpg", title: "Kanawa Island" },

  ];

  const budaya = [
   { img: "../../public/gunung1.jpg", title: "Gunung Ebulobo" },
   { img: "../../public/gunung2.jpg", title: "Gunung Lewotobi" },
   { img: "../../public/gunung3.jpg", title: "Gunung Ile Mandiri" },
   { img: "../../public/gunung4.jpg", title: "Gunung Ili Boleng" },
   { img: "../../public/gunung5.jpg", title: "Gunung Inerie"},
  ];

  const tradisi = [
   { img: "../../public/nasi bambu.jpg", title: "Nasi Bambu" },
   { img: "../../public/ohu.jpg", title: " Ohu Aipungan" },
   { img: "../../public/sombu.jpg", title: "Sombu, Makanan Khas Manggarai" },
   { img: "../../public/jagung.jpg", title: "Jagung Katemak" },
   { img: "../../public/sei.jpg", title: "Se’i, Makanan Khas Flores Dari Daging" },
   { img: "../../public/Songkol.jpg", title: "Songkol" },
  ];

  const kuliner = [
   { img: "../../public/festival1.jpg", title: "Festival Kelimutu" },
   { img: "../../public/festival2.jpg", title: "Festival Komodo" },
   { img: "../../public/festival3.png", title: "Festival Menangkap Paus dengan Alat Tradisional" },
   { img: "../../public/festival4.jpg", title: "Festival Reba Ngada" },
   { img: "../../public/festival5.jpg", title: "Festival Tenun Ikat Sikka" },
  ];

  const event = [
    { img: "../../public/RA1.webp", title: "Rumah Adat Masaki" },
   { img: "../../public/RA2.jpeg", title: "Rumah Adat Mbaru Niang" },
   { img: "../../public/RA3.jpeg", title: "Rumah Adat Ume Kebubu" },
   { img: "../../public/RA4.jpeg", title: "Rumah Adat Lopo" },
  ];

  // Komponen Card Reusable
  const CardGrid = ({ items }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
          <p className="p-4 font-semibold">{item.title}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-hidden bg-gray-50">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* HERO */}
      <section id="home" className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/air terjun.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4 animate-fadeInDown">
            WELCOME TO PULAU FLORES
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl animate-fadeInUp">
            Nusa Tenggara Timur, Indonesia
          </p>
          <a
            href="#destinasi"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 animate-fadeInUp"
          >
            JELAJAHI SEKARANG
            
          </a>
        </div>
      </section>

      {/* DESTINASI */}
      <section id="destinasi" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">WISATA ALAM PALING POPULER</h2>
        <CardGrid items={destinasi} />
      </section>

      {/* BUDAYA */}
      <section id="budaya" className="py-20 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-10">Gunung yang ada di Pulau Flores</h2>
        <CardGrid items={budaya} />
      </section>

      {/* TRADISI */}
      <section id="tradisi" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">Inilah 6 Makanan Khas Orang Flores Yang Wajib di Coba</h2>
        <CardGrid items={tradisi} />
      </section>

      {/* KULINER */}
      <section id="kuliner" className="py-20 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-10">5 Festival Budaya Khas di Flores</h2>
        <CardGrid items={kuliner} />
      </section>

      {/* EVENT */}
      <section id="kuliner" className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">5 Rumah Adat di Nusa Tenggara Timur</h2>
        <CardGrid items={event} />
      </section>

      {/* INFORMASI */}
      <section id="kontak" className="py-20 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-10 text-center">INFORMASI</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <p>Email: info.explorewisatapulauflores@gmail.com</p>
            <p>Telepon: +62 856-8970-9078</p>
            <p>WhatsApp: +62 853-6216-7780</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
            <p>Beranda</p>
            <p>Wisata Alam</p>
            <p>Kuliner</p>
            <p>Festival Budaya</p>
            <p>Rumah Adat</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Sosial Media</h3>
            <p>
              <a
                href="https://www.instagram.com/sarimagdalena20"
                className="text-yellow-400 hover:underline"
              >
                Instagram
              </a>
            </p>
            <p><a href="#" className="text-yellow-400 hover:underline">Facebook</a></p>
            <p><a href="#" className="text-yellow-400 hover:underline">YouTube</a></p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-center py-4 text-sm">
        © 2025 Explore Sekarang Pulau Flores | septamonika
      </footer>
    </div>
  );
}
