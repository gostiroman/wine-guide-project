import React from 'react';
import { motion } from 'framer-motion';
import { Wine, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wine-950 text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900 blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-wine-800 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Wine size={48} className="text-wine-200" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-wine-100 to-purple-200">
            Домашнее Вино<br />из Изабеллы
          </h1>
          
          <p className="text-lg md:text-xl text-wine-100/80 max-w-2xl mx-auto mb-10 font-light">
            Пошаговое руководство для начинающих. От лозы до бокала.
            Узнайте, как превратить ваш урожай в благородный напиток.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('equipment')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-wine-600 to-wine-700 hover:from-wine-500 hover:to-wine-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-wine-900/50 transition-all"
          >
            Начать процесс
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-wine-200/50"
      >
        <span className="text-sm uppercase tracking-widest">Листайте вниз</span>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};
