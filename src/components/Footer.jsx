import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-700 text-green-100 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Informasi Sekolah */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Dinas Pariwisata</h3>
          <p className="leading-relaxed">
            Flores adalah sebuah pulau yang berada di wilayah administrasi Provinsi Nusa Tenggara Timur, Indonesia. Kata Flores berasal dari bahasa Portugis "cabo de flores" yang berarti 'tanjung bunga'. Nama tersebut semula di berikan oleh S.M. Cabot untuk menyebut wilayah timur dari pulau ini. 
          </p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:admin@septamonika. ac.id"
              className="underline hover:text-white transition"
            >
              admin@septamonika. ac.id
            </a>
          </p>
          <p className="mt-1">
            Telp/WA:{" "}
            <a
              href="https://wa.me/0832-3456-9807"
              className="underline hover:text-white transition"
            >
              0832-3456-9807
            </a>
          </p>
        </div>

        {/* Navigasi Cepat */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Menu Cepat</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="/" className="hover:text-white hover:pl-2 transition-all">Beranda</a></li>
            <li><a href="/profil" className="hover:text-white hover:pl-2 transition-all">Wisata</a></li>
            <li><a href="/program" className="hover:text-white hover:pl-2 transition-all">Hotel</a></li>
            <li><a href="/gallery" className="hover:text-white hover:pl-2 transition-all">Kuliner</a></li>
            <li><a href="/news" className="hover:text-white hover:pl-2 transition-all">Kontak</a></li>

          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Ikuti Kami</h3>
          <p className="mb-4">
            Tetap terhubung dengan informasi terbaru melalui media sosial kami:
          </p>
          <div className="flex space-x-5 text-2xl">
            <a href="#" className="hover:text-white transform hover:scale-110 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transform hover:scale-110 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transform hover:scale-110 transition"><FaYoutube /></a>
            <a href="https://wa.me/081376055359" className="hover:text-white transform hover:scale-110 transition"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-green-600"></div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-green-200">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Dinas Pariwisata</span> | Medan.
        <br /> All rights reserved.
      </div>
    </footer>
  );
}
