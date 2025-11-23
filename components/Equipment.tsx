import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Droplet, Beaker, Thermometer, CheckCircle2, ExternalLink } from 'lucide-react';
import { EquipmentItem } from '../types';

const equipmentList: EquipmentItem[] = [
  {
    name: "Емкость для брожения (20л)",
    description: "Стеклянная бутыль или бак из пищевого пластика. Идеально для большого урожая.",
    ozonLink: "https://www.ozon.ru/search/?text=бутыль+для+вина+20+литров",
    wbLink: "https://www.wildberries.ru/catalog/0/search.aspx?search=бутыль+для+вина+20+литров",
    icon: <Beaker size={32} />
  },
  {
    name: "Гидрозатвор",
    description: "Устройство, выпускающее углекислый газ, но не пускающее кислород внутрь.",
    ozonLink: "https://www.ozon.ru/search/?text=гидрозатвор+для+вина",
    wbLink: "https://www.wildberries.ru/catalog/0/search.aspx?search=гидрозатвор+для+вина",
    icon: <Droplet size={32} />
  },
  {
    name: "Сахаромер (Ареометр)",
    description: "Не обязателен, но полезен для измерения плотности сахара.",
    ozonLink: "https://www.ozon.ru/search/?text=ареометр+сахаромер+для+вина",
    wbLink: "https://www.wildberries.ru/catalog/0/search.aspx?search=винометр+сахаромер",
    icon: <Thermometer size={32} />
  },
  {
    name: "Сифон (трубка)",
    description: "Для снятия вина с осадка (декантации) без взбалтывания мути.",
    ozonLink: "https://www.ozon.ru/search/?text=сифон+для+перелива+вина",
    wbLink: "https://www.wildberries.ru/catalog/0/search.aspx?search=сифон+переливной+для+вина",
    icon: <ShoppingBag size={32} />
  }
];

export const Equipment: React.FC = () => {
  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wine-900 mb-4">Что понадобится?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Перед началом убедитесь, что у вас есть этот джентльменский набор винодела.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipmentList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-wine-200 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-wine-100 text-wine-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-6 h-20">{item.description}</p>
              
              <div className="space-y-3">
                <a 
                  href={item.ozonLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                >
                  <span>Найти на Ozon</span>
                  <ExternalLink size={14} />
                </a>
                <a 
                  href={item.wbLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium"
                >
                  <span>Найти на WB</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-wine-50 rounded-2xl border border-wine-100 flex items-start gap-4 max-w-3xl mx-auto">
          <CheckCircle2 className="text-wine-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-wine-900 mb-1">Важное примечание</h4>
            <p className="text-wine-800/80 text-sm">
              Все емкости и инструменты должны быть идеально чистыми и сухими. Дикие дрожжи на кожице винограда сделают свое дело, 
              но посторонние бактерии могут превратить вино в уксус. Используйте пищевую соду для мытья.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
