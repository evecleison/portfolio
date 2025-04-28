import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope
} from 'react-icons/fa'; // Importação dos ícones do GitHub, LinkedIn e Email

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-10 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Seção de Contato */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-white">Contato</h2>

          {/* Formulário de contato */}
          <form className="flex flex-col gap-4" method="POST" action="https://formsubmit.co/7e1c8392965c0ad70573f898175bfaf2">   
            {/* Campo de nome */}
            <input
              type="text"
              name="name"
              placeholder="Nome"
              required
              className="p-3 rounded bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            
            {/* Campo de e-mail */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 rounded bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            
            {/* Campo oculto para o assunto da mensagem */}
            <input type="hidden" name="_subject" value="Mensagem do meu portfólio"></input>

            {/* Campo de mensagem */}
            <textarea
              name="message"
              placeholder="Mensagem"
              rows="4"
              required
              className="p-3 rounded bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>

            {/* Botão de envio do formulário */}
            <button type="submit" className="self-start bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded">
              Enviar
            </button>
          </form>
        </div>

        {/* Links de Redes Sociais */}
        <div className="flex justify-center space-x-6 mb-8 pt-5 gap-10">
          {/* Link para o GitHub */}
          <a
            href="https://github.com/evecleison"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={30} />
          </a>
          
          {/* Link para o LinkedIn */}
          <a
            href="https://linkedin.com/in/evecleison"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedinIn size={30} />
          </a>
          
          {/* Link para enviar e-mail */}
          <a
            href="mailto:evecleisonce@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-white transition"
          >
            <FaEnvelope size={30} />
          </a>
        </div>

        {/* Direitos autorais e menção a Icons8 */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Desenvolvido por Evecleison. Todos os direitos reservados. 
            Icons by <a href="https://icons8.com.br/" target="_blank" rel="noopener noreferrer">Icons8.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
