// Hero.jsx: componente da capa do portfólio
import React from 'react';
import { motion } from 'framer-motion'; // Importa animações do framer-motion

const laptop = "../static/images/laptop.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-8 md:px-3 gap-12 bg-black relative -top-[50px]"
    >
      {/* Texto principal */}
      <div className="md:text-left">
        {/* Título animado */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight flex gap-2 flex-col"
          initial={{ opacity: 0, y: -50 }} // Inicia invisível e mais acima
          animate={{ opacity: 1, y: 0 }} // Anima para visível e na posição correta
          transition={{ duration: 0.6 }} // Duração da animação
        >
          Desenvolvedor web<span className="text-orange-500">Front-End</span>
        </motion.h1>

        {/* Parágrafo de introdução animado */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl mx-auto md:mx-0 text-justify"
          initial={{ opacity: 0, y: 20 }} // Inicia invisível e um pouco abaixo
          animate={{ opacity: 1, y: 0 }} // Anima para visível e alinhado
          transition={{ duration: 0.6, delay: 0.3 }} // Duração e pequeno atraso
        >
          Olá 👋, meu nome é Evecleison e sou desenvolvedor front-end com foco em criar interfaces intuitivas e eficientes. 
          Vamos transformar boas ideias em experiências digitais impactantes.
        </motion.p>
      </div>

      {/* Imagem do laptop com animação */}
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.8 }} // Começa menor e invisível
        animate={{ opacity: 1, scale: 1 }} // Anima para tamanho normal e visível
        transition={{ duration: 0.6, delay: 0.5 }} // Duração e atraso maior que o texto
      >
        <img
          src={laptop}
          alt="Ilustração do laptop" 
          className="w-72 md:w-96 h-auto" // Largura ajustável para responsividade
        />
      </motion.div>
    </section>
  );
}

export default Hero;
