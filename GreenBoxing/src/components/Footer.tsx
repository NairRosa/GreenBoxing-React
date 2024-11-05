import React, { useEffect, useState } from 'react';
import { SlSocialInstagram, SlSocialGithub, SlPhone, SlSupport } from "react-icons/sl";
import { getSocialLinks } from '../services/api';
import { SocialLinks } from '../types';

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    instagram: 'https://instagram.com',
    github: 'https://github.com',
    phone: '+123456789',
    email: 'support@greenboxing.com'
  });

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const data = await getSocialLinks();
        setSocialLinks(data);
      } catch (error) {
        console.error('Error fetching social links:', error);
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="icons">
          <p>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <SlSocialInstagram size={22} color="#333" />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <SlSocialGithub size={22} color="#333" />
            </a>
            <a href={`tel:${socialLinks.phone}`} aria-label="Telefone">
              <SlPhone size={22} color="#333" />
            </a>
            <a href={`mailto:${socialLinks.email}`} aria-label="Suporte">
              <SlSupport size={22} color="#333" />
            </a>
          </p>
        </div>
        <div className="content-footer">
          <h3>Explore</h3>
          <p>
            <a href="#apps">Apps</a> <br />
            <a href="#comunidade">Comunidade</a> <br />
            <a href="#eco-pontos">Eco pontos</a> <br />
            <a href="#sobre-nos">Sobre nós</a> <br />
          </p>
        </div>
        <div className="content-footer">
          <h3>Recursos</h3>
          <p>
            <a href="#boas-praticas">Boas práticas</a> <br />
            <a href="#biblioteca">Biblioteca de uso</a> <br />
            <a href="#suporte">Suporte</a> <br />
            <a href="#contato">Fale conosco</a> <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;