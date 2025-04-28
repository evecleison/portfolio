// Skills.jsx: componente das habilidades: tecnologias e ferramentas
import React, { useState } from 'react'; 
import { motion } from 'framer-motion'; // Importa o motion para animações

// Array com as tecnologias e suas informações (nome, logo e descrição)
const techs = [
  { name: 'HTML5', logo: '../static/icons/icons8-html5.svg', desc: 'Linguagem de marcação para páginas web' },
  { name: 'CSS3', logo: '../static/icons/icons8-css3.svg', desc: 'Estilização avançada de layouts' },
  { name: 'JavaScript', logo: '../static/icons/icons8-javascript.svg', desc: 'Linguagem de programação front-end' },
  { name: 'TypeScript', logo: '../static/icons/icons8-typescript.svg', desc: 'Superset tipado de JavaScript' },
  { name: 'React', logo: '../static/icons/react.svg', desc: 'Biblioteca para interfaces reativas e baseada em componentes' },
  { name: 'Tailwind CSS', logo: '../static/icons/icons8-tailwindcss.svg', desc: 'Framework CSS para estilização' },
  { name: 'Python', logo: '../static/icons/icons8-python.svg', desc: 'Linguagem de programação versátil, usada em diversas áreas' },
  { name: 'Git', logo: '../static/icons/icons8-git.svg', desc: 'Sistema de controle de versão distribuído' },
  { name: 'Github', logo: '../static/icons/icons8-github.svg', desc: 'Plataforma online para hospedagem de repositórios Git' },
  { name: 'Three.js', logo: '../static/icons/threejs.svg', desc: 'Biblioteca JavaScript para gráficos 3D na web' },
  { name: 'Vite', logo: '../static/icons/vite.svg', desc: 'Ferramenta de build ultrarrápida para projetos web' },
  { name: 'VS Code', logo: '../static/icons/icons8-visual-studio-code.svg', desc: 'Editor de código-fonte poderoso e customizável' }
];

function Skills() {
  const [hovered, setHovered] = useState(null); // Estado para controlar qual tecnologia está "hovered" (focada)

  return (
    <section id="skills" className="py-20 px-8 md:px-20 bg-gray-900 text-white">
      {/* Título principal da seção */}
      <h2 className="text-3xl font-bold mb-4">Conhecimentos</h2>

      {/* Mensagem para desktop */}
      <p className="text-gray-400 mb-8 italic text-sm hidden md:block">*passe o cursor do mouse no card para ler*</p>

      {/* Mensagem para mobile */}
      <p className="text-gray-400 italic text-sm mb-4 md:hidden">Toque no card para ler</p>

      {/* Grid principal: painel de descrição + grid de ícones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Painel de descrição (à esquerda) */}
        <div className="flex flex-col justify-center bg-gray-800 rounded-lg p-6 min-h-[150px]">
          {hovered ? ( // Se o usuário passou o mouse ou clicou em um ícone
            <>
              <h3 className="text-xl font-semibold mb-2">{hovered.name}</h3> {/* Nome da tecnologia */}
              <p className="text-gray-300 text-sm">{hovered.desc}</p> {/* Descrição da tecnologia */}
            </>
          ) : ( // Se nenhuma tecnologia estiver selecionada
            <p className="text-gray-500 text-center italic">
              <span className="md:hidden">Toque em um card para ler a descrição</span> 
              <span className="hidden md:block">Passe o mouse sobre um card para ler a descrição</span>
            </p>
          )}
        </div>

        {/* Grid com os ícones das tecnologias (à direita) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((t) => (
            <motion.div
              key={t.name} // Chave única para cada item no React
              className="relative bg-gray-800 rounded-lg h-24 flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={() => setHovered(t)} // Clique no card (mobile) -> atualiza o estado
              onMouseEnter={() => window.innerWidth >= 768 && setHovered(t)} // Passar mouse (desktop) -> atualiza o estado
              onMouseLeave={() => window.innerWidth >= 768 && setHovered(null)} // Sair mouse (desktop) -> limpa o estado
              whileHover={{ scale: 1.05 }} // Animação: aumenta levemente no hover
              transition={{ type: 'spring', stiffness: 300 }} // Tipo de transição (animação de mola)
            >
              {/* Ícone da tecnologia */}
              <img src={t.logo} alt={t.name} className="w-12 h-12 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
