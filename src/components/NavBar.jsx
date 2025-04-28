// NavBar.jsx: componente da barra de navegação
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones de menu abrir/fechar

function NavBar() {
  // Estado para controlar a abertura/fechamento do menu mobile
  const [open, setOpen] = useState(false);

  // Lista de links do menu de navegação
  const links = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    // Barra de navegação fixa no topo, com fundo escuro e leve desfoque
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-95 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between h-16 items-center">
        <div className="text-2xl font-bold text-orange-500">Evecleison</div>

        {/* Links do menu (visível apenas em telas médias e maiores) */}
        <ul className="hidden md:flex space-x-6 text-gray-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Botão para abrir/fechar o menu no mobile (visível apenas em telas menores) */}
        <button className="md:hidden text-gray-300 focus:outline-none" onClick={() => setOpen(!open)}>
          {/* Mostra o ícone correto conforme o estado do menu */}
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu dropdown no mobile (aparece somente se open for true) */}
      {open && (
        <ul className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur">
          {links.map((l) => (
            <li key={l.href} className="border-b border-gray-700">
              <a
                onClick={() => setOpen(false)} // Fecha o menu ao clicar no link
                href={l.href}
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
