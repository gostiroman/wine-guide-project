import React from 'react';
import { Hero } from './components/Hero';
import { Equipment } from './components/Equipment';
import { Steps } from './components/Steps';
import { Calculator } from './components/Calculator';
import { AiAssistant } from './components/AiAssistant';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-white selection:bg-wine-200 selection:text-wine-900">
      <Hero />
      
      {/* Anchor logic handled in Hero button */}
      <Equipment />
      
      <Steps />
      
      <Calculator />
      
      <div className="bg-gray-50 py-12 text-center">
        <h2 className="text-3xl font-serif font-bold text-wine-900 mb-2">Возникли вопросы?</h2>
        <p className="text-gray-600 mb-8">Наш искусственный интеллект готов помочь разобраться в нюансах</p>
        <AiAssistant />
      </div>
      
      <Footer />
    </main>
  );
}

export default App;
