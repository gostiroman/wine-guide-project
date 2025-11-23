import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Info } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [grapes, setGrapes] = useState<number>(10);
  
  // Formulas for Isabella (approximate):
  // Juice yield: ~65-70% of grape weight
  // Sugar needed: ~100-150g per liter of juice (Isabella is acidic)
  // Water (optional): ~50-100ml per liter if very tart
  
  const juice = grapes * 0.7;
  const sugarMin = Math.round(juice * 0.1); // 100g per liter
  const sugarMax = Math.round(juice * 0.2); // 200g per liter
  const water = (juice * 0.1).toFixed(1); // 100ml per liter approx

  return (
    <section className="py-20 bg-wine-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 rounded-lg">
                <CalcIcon className="text-wine-200" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Калькулятор Ингредиентов</h2>
            </div>
            <p className="text-wine-100/80 mb-8 text-lg">
              Изабелла — сорт с высокой кислотностью. Для гармоничного вкуса часто требуется добавление воды и сахара.
              Введите вес вашего урожая, чтобы получить примерные пропорции.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
               <label className="block text-sm font-medium text-wine-200 mb-2">Вес винограда (кг)</label>
               <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={grapes} 
                  onChange={(e) => setGrapes(Number(e.target.value))}
                  className="w-full h-2 bg-wine-800 rounded-lg appearance-none cursor-pointer accent-wine-300 mb-4"
               />
               <div className="flex justify-between items-center">
                  <span className="text-xs text-wine-300">1 кг</span>
                  <span className="text-4xl font-bold text-white">{grapes} <span className="text-xl font-normal text-wine-300">кг</span></span>
                  <span className="text-xs text-wine-300">100 кг</span>
               </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div 
              key={grapes} // trigger anim on change
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white text-wine-900 p-6 rounded-2xl shadow-xl"
            >
              <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">Ожидаемый сок</h3>
              <div className="text-4xl font-bold mb-1">~{juice.toFixed(1)} <span className="text-lg text-gray-400">л</span></div>
              <p className="text-xs text-gray-400">Выход сусла ~70%</p>
            </motion.div>

            <motion.div 
              key={`sugar-${grapes}`}
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 rounded-2xl"
            >
              <h3 className="text-sm uppercase tracking-wider text-wine-200 font-semibold mb-1">Сахар</h3>
              <div className="text-3xl font-bold mb-1">{sugarMin}-{sugarMax} <span className="text-lg text-wine-300">кг</span></div>
              <p className="text-xs text-wine-200/60">Добавлять частями (дробно)</p>
            </motion.div>

            <motion.div 
               key={`water-${grapes}`}
               initial={{ scale: 0.95, opacity: 0.8 }}
               animate={{ scale: 1, opacity: 1 }}
               className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 rounded-2xl sm:col-span-2"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-sm uppercase tracking-wider text-wine-200 font-semibold mb-1">Вода (при необходимости)</h3>
                  <div className="text-3xl font-bold mb-1">до {water} <span className="text-lg text-wine-300">л</span></div>
                  <p className="text-xs text-wine-200/60">Добавляйте только если вкус сока слишком кислый, "сводящий скулы".</p>
                </div>
                <Info className="text-wine-300 flex-shrink-0" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
