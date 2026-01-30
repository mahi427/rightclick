import React, { useEffect, useRef } from 'react';

const ParallaxBackground = () => {
  const layersRef = useRef([]);
  const symbolsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPercent = scrollY / documentHeight;

      // Update parallax layers
      layersRef.current.forEach((layer, index) => {
        if (layer) {
          const speed = 0.1 + (index * 0.05);
          const yOffset = scrollY * speed;
          layer.style.transform = `translateY(${yOffset}px)`;
        }
      });

      // Update floating symbols
      symbolsRef.current.forEach((symbol, index) => {
        if (symbol) {
          const speed = 0.5 + (index * 0.1);
          const xOffset = Math.sin(scrollY * 0.001 + index) * 50;
          const yOffset = scrollY * speed * 0.5;
          const rotate = scrollY * 0.1 + index * 10;
          
          symbol.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotate}deg)`;
          symbol.style.opacity = `${0.1 + Math.sin(scrollY * 0.001 + index) * 0.1}`;
        }
      });

      // Update scroll progress
      const progressBar = document.querySelector('.scroll-progress');
      if (progressBar) {
        const scaleX = scrollPercent;
        progressBar.style.transform = `scaleX(${scaleX})`;
      }
    };

    // Create floating mathematical symbols
    const container = document.body;
    const symbols = ['π', '∑', '∫', '∞', 'Δ', 'θ', '√', '≈', '≠', '±', '×', '÷', '∴', '∵', '∈'];
    
    symbols.forEach((symbol, index) => {
      const element = document.createElement('div');
      element.className = 'floating-symbol';
      element.textContent = symbol;
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.fontSize = `${Math.random() * 30 + 20}px`;
      element.style.color = ['#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6'][Math.floor(Math.random() * 5)];
      
      container.appendChild(element);
      symbolsRef.current.push(element);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      symbolsRef.current.forEach(symbol => {
        if (symbol && symbol.parentNode) {
          symbol.parentNode.removeChild(symbol);
        }
      });
    };
  }, []);

  const mathSymbols = ['+', '-', '×', '÷', '=', '<', '>', '±', '√', '∞'];

  return (
    <>
      {/* Parallax Background Layers */}
      <div className="parallax-bg">
        <div 
          ref={el => layersRef.current[0] = el}
          className="parallax-layer parallax-layer-1"
        />
        <div 
          ref={el => layersRef.current[1] = el}
          className="parallax-layer parallax-layer-2"
        />
        <div 
          ref={el => layersRef.current[2] = el}
          className="parallax-layer parallax-layer-3"
        />
      </div>

      {/* Animated Grid Background */}
      <div className="animated-grid" />

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" />

      {/* Additional Mathematical Symbols for Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mathSymbols.map((symbol, index) => (
          <div
            key={index}
            className="absolute text-4xl md:text-6xl font-bold opacity-5"
            style={{
              left: `${(index * 15) % 100}%`,
              top: `${(index * 20) % 100}%`,
              color: index % 3 === 0 ? '#3b82f6' : index % 3 === 1 ? '#ef4444' : '#f59e0b',
              transform: `translateZ(${-index * 10}px)`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>
    </>
  );
};

export default ParallaxBackground;