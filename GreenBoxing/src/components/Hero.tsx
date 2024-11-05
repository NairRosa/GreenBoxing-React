import React, { useEffect, useState } from 'react';
import { SlArrowDown } from "react-icons/sl";
import { getHeroContent } from '../services/api';
import { HeroContent } from '../types';

const Hero = () => {
  const [heroContent, setHeroContent] = useState<HeroContent>({
    title: 'GREEN BOXING',
    subtitle: 'PENSE FORA DA CAIXA, E PROMOVA UM FUTURO MAIS SUSTENTÁVEL'
  });

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const data = await getHeroContent();
        setHeroContent(data);
      } catch (error) {
        console.error('Error fetching hero content:', error);
      }
    };

    fetchHeroContent();
  }, []);

  return (
    <div className="display-title">
      <h1 id="title">{heroContent.title}</h1>
      <p id="sub-title">{heroContent.subtitle}</p>
      <SlArrowDown size={26} color="#fff" className="arrow-down" />
    </div>
  );
};

export default Hero;