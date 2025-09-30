import React, { useState } from "react";
import Navbar from "../components/Navbar";

const KulinerList = [
  {
    title: "Jagung Katemak",
    img: "/jagung.jpg",
    desc: "Makanan khas ini dibuat dari jagung yang diolah bersama kacang-kacangan seperti kacang tanah dan kacang hijau, serta sayuran seperti labu."
  },
  {
    title: "Nasi Bambu",
    img: "/nasi bambu.jpg",
    desc: "Dikenal dengan sebutan Tapa Kolo atau Kolo. Makanan ini adalah olahan beras yang dimasak di dalam ruas bambu dengan tambahan bumbu dan rempah-rempah, serta terkadang dicampur daun singkong. Nasi ini kemudian dibakar hingga matang dan sering disajikan dalam upacara adat atau kegiatan kekeluargaan sebagai simbol kebersamaan."
  },
  {
    title: "Ohu Aipungan",
    img: "/ohu.jpg",
    desc: "Makanan tradisional dari Sikka, Pulau Flores, yang terbuat dari ubi dan kelapa parut, lalu dimasak dengan cara dikukus dalam periuk tanah atau kelapa, mirip camilan manis yang diburu wisatawan. Makanan ini dapat disantap sebagai pengganti nasi saat di kebun, atau dengan campuran gula merah untuk sarapan dan camilan sore."
  },
  {
    title: "Se'i",
    img: "/sei.jpg",
    desc: "Makanan khas dari Nusa Tenggara Timur (NTT), termasuk Flores, yang terbuat dari daging yang diiris tipis secara memanjang dan kemudian diasapi dengan bara api hingga matang. Kata se'i sendiri berasal dari bahasa Rote yang berarti daging yang diiris tipis memanjang. "
  },
  {
    title: "Sombu",
    img: "/sombu.jpg",
    desc: "Yang terbuat dari ubi kayu (singkong) yang dijemur hingga kering (disebut koil), lalu ditumbuk menjadi tepung dan dikukus hingga kenyal. Dulu berfungsi sebagai makanan pokok pengganti nasi, Sombu bisa disajikan dengan kelapa dan garam untuk lauk atau dengan gula untuk teman kopi, serta memiliki tekstur yang kenyal dan rasa yang unik."
  },
  {
    title: "Songkol",
    img: "/Songkol.jpg",
    desc: "Kolo (Tapa Kolo), yaitu nasi yang dimasak di dalam batang bambu. Makanan khas Flores lainnya termasuk Se'i, Jagung Bose, Rumpu Rampe, dan Catemak Jagung."
  },
];





const KulinerCard = ({ title, img, desc }) => {
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

export default function Kuliner() {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* Spacing from fixed Navbar */}
      <div className="h-20"></div>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-10">Makanan Khas Pulau Flores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {KulinerList.map((item, index) => (
            <KulinerCard
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
