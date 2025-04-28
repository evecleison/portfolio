import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importa animações do framer-motion
import { FaGithub } from 'react-icons/fa'; // Ícone do GitHub

// Lista de projetos com detalhes: título, descrição, mídia, links para demo e repositório
const projects = [
  {
    title: 'Homepage inspirado do Instagram Web',
    description: 'Projeto front-end inspirado na página inicial do Instagram Web. Desenvolvido com React, JavaScript e Vite.',
    media: './static/projects/homepage.gif',
    demoLink: 'https://evecleison.github.io/image-share-homepage-clone/',
    repoLink: 'https://github.com/evecleison/image-share-homepage-clone.git'
  },
  {
    title: 'Carrinho de compras',
    description: 'Este é um carrinho de compras simples e funcional desenvolvido com HTML, CSS e TypeScript. Os produtos são armazenados no navegador usando o localStorage.',
    media: './static/projects/shopping-cart.gif',
    demoLink: 'https://evecleison.github.io/shopping-cart/',
    repoLink: 'https://github.com/evecleison/shopping-cart.git'
  },
  {
    title: 'App Web de tempo',
    description: 'Aplicativo web desenvolvido com HTML, CSS e JavaScript que exibe o clima atual e a previsão do tempo para 5 dias em qualquer cidade do mundo, utilizando a API da OpenWeatherMap.',
    media: './static/projects/weather-web-app.gif',
    demoLink: 'https://github.com/evecleison/weather-web-app/raw/main/images/weather-web-app.gif',
    repoLink: 'https://github.com/evecleison/weather-web-app.git'
  },
  {
    title: 'Lista de tarefas',
    description: 'Este projeto é uma aplicação web de uma lista de tarefas desenvolvida com React, utilizando o localStorage para persistência dos dados localmente.',
    media: './static/projects/to-do-list.gif',
    demoLink: 'https://evecleison.github.io/to-do-list-react/',
    repoLink: 'https://github.com/evecleison/to-do-list-react.git'
  },
  {
    title: 'Sistema Solar',
    description: 'Simulação 3D interativa do sistema solar desenvolvida com Three.js e Vite',
    media: './static/projects/solar-system.mp4',
    demoLink: 'https://evecleison.github.io/sistema-solar/',
    repoLink: 'https://github.com/evecleison/sistema-solar.git'
  },
  {
    title: 'Game Bala de Canhão',
    description: 'Simulação em física e aplicação de um sistema de partículas usando o Three.js. Isso foi feito por meio de um jogo simples no qual um canhão dispara projéteis para destruir objetos no cenário que quando atingidos geram uma explosão.',
    media: '../static/projects/game-bala-de-canhao.mp4',
    demoLink: 'https://evecleison.github.io/game-bala-de-canhao/',
    repoLink: 'https://github.com/evecleison/game-bala-de-canhao.git'
  },
  {
    title: 'Game de Corrida',
    description: 'Inspirado no clássico Enduro do Atari, o jogo foi criado utilizando apenas HTML, CSS e JavaScript. O jogador controla um carro em uma corrida infinita, devendo ultrapassar adversários. O objetivo é alcançar a maior pontuação possível antes que acabe o combustível ou ocorra uma colisão.',
    media: './static/projects/racing-game.mp4',
    demoLink: 'https://evecleison.github.io/racing-game-js/',
    repoLink: 'https://github.com/evecleison/racing-game-js.git'
  },
  {
    title: 'Homepage de um site de venda de carros',
    description: 'Este projeto é um site de venda de carros, criado com HTML e CSS, com a finalidade de exibir informações sobre carros novos e usados.',
    media: './static/projects/car.png',
    demoLink: 'https://evecleison.github.io/Trabalho_pratico_css/',
    repoLink: 'https://github.com/evecleison/Trabalho_pratico_css.git'
  }
];

function Projects() {
  // Estado para o índice do projeto ativo (ao clicar no mobile)
  const [activeIndex, setActiveIndex] = useState(null);

  // Estado para determinar se o dispositivo é mobile
  const [isMobile, setIsMobile] = useState(false);

  // Hook para detectar se a tela é mobile ou desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Chama ao carregar
    window.addEventListener('resize', handleResize); // Atualiza ao mudar o tamanho da tela
    return () => window.removeEventListener('resize', handleResize); // Limpa o event listener
  }, []);

  // Função que alterna o estado de 'activeIndex' no mobile (abre ou fecha a descrição)
  const handleCardClick = (i) => {
    if (isMobile) {
      setActiveIndex(activeIndex === i ? null : i); // Fecha o card se já estiver aberto
    }
  };

  // Função que verifica se a mídia é um vídeo (extensão .mp4 ou .webm)
  const isVideo = (src) => /\.(mp4|webm)$/i.test(src);

  return (
    <section id="projects" className="py-20 px-8 md:px-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">Meus Projetos</h2>

      {/* Texto informando como interagir com os cards */}
      <p className="text-gray-400 mb-6 italic text-sm hidden md:block text-center">
        *Passe o cursor do mouse no card para ler a descrição do projeto*
      </p>
      <p className="text-gray-400 italic text-sm mb-6 md:hidden text-center">
        Toque no card para ler a descrição do projeto
      </p>

      {/* Grid que organiza os cards dos projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mapeia cada projeto na lista e cria um card para ele */}
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="group relative rounded-xl overflow-hidden shadow-lg bg-gray-900"
            initial={{ opacity: 0, y: 50 }} // Inicia invisível e com deslocamento
            whileInView={{ opacity: 1, y: 0 }} // Aparece suavemente ao rolar para a tela
            viewport={{ once: true, amount: 0.2 }} // Apenas uma vez ao entrar na viewport
            transition={{ duration: 0.6, delay: i * 0.1 }} // Animação com atraso progressivo
            onClick={() => handleCardClick(i)} // Lida com o clique para mostrar descrição no mobile
          >
            {/* Verifica se o projeto é um vídeo ou uma imagem */}
            {isVideo(p.media) ? (
              <video
                src={p.media}
                className="w-full aspect-[4/3] h-auto object-cover"
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={p.media}
                alt={p.title}
                className="w-full aspect-[16/10] h-auto"
              />
            )}

            {/* Overlay com a descrição do projeto */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-6 transition-opacity duration-300 text-center
                ${isMobile
                  ? activeIndex === i
                    ? 'opacity-100' // Mostra descrição se o card for clicado no mobile
                    : 'opacity-0' // Oculta a descrição quando o card não é ativo
                  : 'opacity-0 md:group-hover:opacity-100'} 
              `}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>

              <p className="text-gray-300 text-sm mb-6">{p.description}</p>

              <div className="flex space-x-4">
                {/* Botão para acessar o projeto demo */}
                <a
                  href={p.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 rounded-lg text-white hover:bg-orange-600 transition"
                >
                  Ver Aplicação
                </a>
                {/* Botão para acessar o repositório no GitHub */}
                <a
                  href={p.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center px-4 py-2 bg-orange-500 rounded-lg text-white hover:bg-orange-600 transition"
                >
                  <FaGithub size={20} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
