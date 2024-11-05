import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AppGrid from './components/AppGrid';
import AppSection from './components/AppSection';
import Footer from './components/Footer';

const App = () => {
  const appTitles = ['BistrôBox', 'BrechóBox', 'EngBox', 'FarmaBox', 'VetBox'];

  return (
    <div className='externa'>
      <Header />
      <div className="container">
        <div className="display">
          <Hero />
          <AppGrid />
          {appTitles.map((title, index) => (
            <AppSection
              key={title}
              title={title}
              index={index}
              isPrimary={index % 2 === 0}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;