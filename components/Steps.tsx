import React from 'react';
import { Step } from '../types';
import { motion } from 'framer-motion';
import { Scissors, Layers, Wind, Filter, Hourglass, PartyPopper } from 'lucide-react';

const steps: Step[] = [
  {
    id: 1,
    title: "Сбор и Подготовка",
    description: "Собирайте виноград в сухую погоду. Не мойте ягоды! На кожице живут дикие дрожжи.",
    details: [
      "Отделите ягоды от веточек (гребней).",
      "Удалите гнилые и зеленые ягоды.",
      "Не мыть! Иначе сусло не забродит."
    ],
    duration: "1 день",
    icon: "harvest",
    tips: "Если прошел дождь, подождите 2-3 дня перед сбором, чтобы восстановились дрожжи."
  },
  {
    id: 2,
    title: "Давка",
    description: "Раздавите ягоды руками или деревянным пестиком. Косточки должны остаться целыми!",
    details: [
      "Используйте эмалированную или пластиковую емкость.",
      "Не используйте металл (кроме нержавейки).",
      "Накройте марлей от мошек."
    ],
    duration: "30 мин",
    icon: "crush",
    tips: "Если раздавить косточки, вино будет сильно горчить."
  },
  {
    id: 3,
    title: "Бурное брожение (Мезга)",
    description: "Оставьте массу в тепле (18-25°C). Перемешивайте 'шапку' из кожицы 3 раза в день.",
    details: [
      "Появится пена и шипение.",
      "Кожица отдаст цвет и аромат соку.",
      "Если не мешать, сусло скиснет."
    ],
    duration: "3-4 дня",
    icon: "ferment1",
    tips: "Как только мезга посветлела и всплыла плотной шапкой — пора отжимать."
  },
  {
    id: 4,
    title: "Отжим и Сахар",
    description: "Процедите сок через марлю. Отожмите мезгу. Добавьте первую порцию сахара.",
    details: [
      "Разлейте по бутылям (на 70% объема).",
      "Добавьте 50% от общего сахара.",
      "Установите гидрозатвор (или перчатку с дырочкой)."
    ],
    duration: "1 день",
    icon: "filter",
    tips: "Сахар лучше растворить в небольшом количестве отлитого сока, а потом влить обратно."
  },
  {
    id: 5,
    title: "Тихое брожение",
    description: "Самый долгий этап. Вино булькает. Добавляем оставшийся сахар частями.",
    details: [
      "День 5: добавьте 25% сахара.",
      "День 10: добавьте последние 25% сахара.",
      "Ждите, пока гидрозатвор перестанет пускать пузыри."
    ],
    duration: "30-60 дней",
    icon: "wait",
    tips: "Держите в темноте при температуре 20-25°C. Перепады температур опасны."
  },
  {
    id: 6,
    title: "Снятие с осадка",
    description: "Брожение кончилось, вино посветлело, на дне рыхлый осадок. Пора переливать.",
    details: [
      "Поставьте бутыль на возвышение.",
      "Слейте через трубочку, не касаясь дна.",
      "Попробуйте на сладость."
    ],
    duration: "1 час",
    icon: "siphon",
    tips: "Если вино кислое, можно добавить сахар по вкусу, но тогда снова под гидрозатвор на неделю."
  }
];

const getIcon = (icon: string) => {
    switch(icon) {
        case 'harvest': return <Scissors />;
        case 'crush': return <Layers />;
        case 'ferment1': return <Wind />;
        case 'filter': return <Filter />;
        case 'wait': return <Hourglass />;
        case 'siphon': return <PartyPopper />;
        default: return <Layers />;
    }
}

export const Steps: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wine-900 mb-4">Процесс Приготовления</h2>
          <p className="text-gray-600">Пройдите путь от ягоды до благородного напитка шаг за шагом</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-wine-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                   <div className={`bg-white p-8 rounded-2xl shadow-lg border border-wine-100 hover:shadow-xl hover:border-wine-300 transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="flex items-center gap-3 mb-4 md:hidden">
                         <div className="p-2 bg-wine-100 rounded-lg text-wine-700">{getIcon(step.icon)}</div>
                         <span className="text-wine-600 font-bold text-sm uppercase tracking-wider">{step.duration}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{index + 1}. {step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      
                      <ul className={`space-y-2 mb-6 text-sm text-gray-500 inline-block text-left`}>
                        {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-wine-400 flex-shrink-0"></span>
                                {detail}
                            </li>
                        ))}
                      </ul>

                      <div className={`p-4 bg-yellow-50 rounded-xl border border-yellow-100 text-yellow-800 text-sm flex gap-3 items-start text-left`}>
                        <span className="font-bold">Совет:</span>
                        {step.tips}
                      </div>
                   </div>
                </div>

                {/* Center Icon (Desktop) */}
                <div className="hidden md:flex relative z-10 w-16 h-16 bg-wine-600 rounded-full items-center justify-center text-white shadow-lg border-4 border-white">
                    {getIcon(step.icon)}
                </div>
                
                {/* Spacer for layout balance */}
                <div className="flex-1 w-full hidden md:block text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-wine-100 text-wine-800 font-semibold text-sm">
                        {step.duration}
                    </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
