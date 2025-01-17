import axios from 'axios';

// In production, we'll use mock data since json-server is only for development
const MOCK_DATA = {
  apps: [
    {
      id: 1,
      title: "BistrôBox",
      description: "A GREEN BOX oferece dicas rápidas de como fazer um consumo consciente no setor gastronômico. Aprenda práticas sustentáveis para restaurantes e cozinhas.",
      imageUrl: "/img/2.jpg",
      downloadUrl: "/downloads/apps/BistrôBox.apk"
    },
    {
      id: 2,
      title: "BrechóBox",
      description: "A GREEN BOX oferece dicas rápidas de como fazer um consumo consciente na moda. Descubra como dar uma segunda vida às roupas e acessórios.",
      imageUrl: "/img/3.jpg",
      downloadUrl: "/downloads/apps/BrechóBox.apk"
    },
    {
      id: 3,
      title: "EngBox",
      description: "A GREEN BOX oferece dicas rápidas de como fazer construções sustentáveis. Aprenda práticas eco-friendly para engenharia e construção civil.",
      imageUrl: "/img/4.jpg",
      downloadUrl: "/downloads/apps/EngBox.apk"
    },
    {
      id: 4,
      title: "FarmaBox",
      description: "A GREEN BOX oferece dicas rápidas de como fazer um consumo consciente de medicamentos. Saiba como descartar corretamente produtos farmacêuticos.",
      imageUrl: "/img/5.jpg",
      downloadUrl: "/downloads/apps/FarmaBox.apk"
    },
    {
      id: 5,
      title: "VetBox",
      description: "A GREEN BOX oferece dicas rápidas de como fazer um consumo consciente em clínicas veterinárias. Aprenda práticas sustentáveis para o cuidado animal.",
      imageUrl: "/img/6.jpg",
      downloadUrl: "/downloads/apps/VetBox.apk"
    }
  ],
  hero: {
    title: "GREEN BOXING",
    subtitle: "PENSE FORA DA CAIXA, E PROMOVA UM FUTURO MAIS SUSTENTÁVEL"
  },
  socialLinks: {
    instagram: "https://instagram.com",
    github: "https://github.com",
    phone: "+123456789",
    email: "support@greenboxing.com"
  }
};

export const getApps = async () => {
  // In production, return mock data
  return MOCK_DATA.apps;
};

export const getHeroContent = async () => {
  return MOCK_DATA.hero;
};

export const getSocialLinks = async () => {
  return MOCK_DATA.socialLinks;
};

export default {
  getApps,
  getHeroContent,
  getSocialLinks
};