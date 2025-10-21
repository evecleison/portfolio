// About.jsx: componente que informa sobre o autor do portfólio
import React from 'react';
import { motion } from 'framer-motion'; // Importa animações do framer-motion

const aboutImage = "./static/images/programmer.png";

function About() {
  return (
    <section id="about" className="py-20 px-8 md:px-20 bg-gray-800">
      {/* Container flexível para imagem e texto */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
        {/* Área da imagem */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocada para a esquerda
          whileInView={{ opacity: 1, x: 0 }} // Anima para aparecer e voltar à posição normal
          viewport={{ once: true }} // Anima apenas uma vez, na primeira visualização
          transition={{ duration: 0.6 }} // Duração da animação
        >
          <img
            src={aboutImage}
            alt="Sobre mim"
            className="w-96 h-auto object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Área do texto */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }} // Começa invisível e deslocado para a direita
          whileInView={{ opacity: 1, x: 0 }} // Anima para aparecer e voltar à posição normal
          viewport={{ once: true }} // Anima apenas uma vez
          transition={{ duration: 0.6, delay: 0.2 }} // Duração da animação e pequeno atraso
        >
          {/* Título */}
          <h2 className="text-3xl font-bold text-white mb-6">Sobre Mim</h2>

          {/* Apresentação pessoal */}
          <p className="text-gray-300 leading-relaxed mb-4 text-justify">
            Meu nome é Evecleison e sou graduado em Engenharia da Computação na Universidade Federal do
            Ceará (UFC), com foco em Desenvolvimento Front-End. Tenho conhecimento em desenvolvimento web,
            e estou sempre buscando aprender novas tecnologias e expandir meu conhecimento em programação.
            Atualmente, cursando Mestrado em Engenharia de Elétrica e Computação. 
          </p>
          <p className="text-gray-300 leading-relaxed mb-8 text-justify">
            Sou dedicado e focado na resolução de problemas, usando a computação para desenvolver soluções
            e aplicações. Além disso, estou em um projeto de pesquisa sobre um aplicativo que classifica
            e identifica a anemia por meio de imagens de mucosa ocular de ovinos.
          </p>

          {/* Botão para download do currículo */}
          <a
            href="/Evecleison-resume.pdf"
            download
            className="inline-block px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded hover:bg-orange-500 hover:text-white transition"
          >
            Baixar Currículo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
