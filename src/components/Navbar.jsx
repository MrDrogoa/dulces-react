import React, { useState, useEffect } from "react";
import Logo from "../assets/logo-d.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faShoppingCart,
  faHeart,
  faUser,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [nav, setNav] = useState(true); // true = cerrado, false = abierto

  const handleNav = () => {
    setNav(!nav);
  };

  // 🔧 Solución: Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      // Si la pantalla es mayor a 768px (md breakpoint), cerrar el menú
      if (window.innerWidth >= 768) {
        setNav(true); // Cerrar menú
      }
    };

    // Escuchar cambios de tamaño
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-pink-600 shadow-lg">
      <section className="p-4 max-w-[1300px] m-auto">
        <article className="flex justify-between items-center">
          <div>
            <a href="#">
              <img
                src={Logo}
                alt="logo-navbar"
                className="w-4/5 md:w-[90%] lg:w-full"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex text-white gap-10 font-medium font-primary">
              <li>
                <a href="#" className="hover:text-[#e0e0e0] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e0e0e0] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e0e0e0] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="flex gap-2 items-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#e0e0e0] transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#e0e0e0] transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Botón hamburguesa */}
          <div onClick={handleNav} className="md:hidden block">
            {!nav ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="text-white text-2xl cursor-pointer"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-white text-2xl cursor-pointer"
              />
            )}
          </div>

          {/* Menú móvil */}
          <div
            className={
              !nav
                ? "fixed left-0 top-[10%] w-full bg-pink-600 ease-in-out duration-500"
                : "fixed bottom-[-100%] ease-in-out duration-500"
            }
          >
            <ul className="p-8 text-white gap-10 font-medium font-primary">
              <li className="border-b-2 mb-7">
                <a
                  href="#"
                  onClick={() => setNav(true)} // Cerrar al hacer clic
                  className="hover:text-[#e0e0e0] transition-colors pb-2"
                >
                  Inicio
                </a>
              </li>
              <li className="border-b-2 mb-7">
                <a
                  href="#"
                  onClick={() => setNav(true)} // Cerrar al hacer clic
                  className="hover:text-[#e0e0e0] transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li className="border-b-2">
                <a
                  href="#"
                  onClick={() => setNav(true)} // Cerrar al hacer clic
                  className="hover:text-[#e0e0e0] transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </nav>
  );
};

export default Navbar;
