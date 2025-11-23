import React from 'react';
import { Wine } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-wine-950 text-wine-200 py-12 border-t border-wine-900">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-50">
          <Wine size={24} />
          <span className="font-serif font-bold text-xl">Domashnee Vino</span>
        </div>
        <p className="text-sm opacity-60 max-w-md mx-auto">
          Чрезмерное употребление алкоголя вредит вашему здоровью. 
          Данное руководство предназначено только для ознакомительных целей и лиц старше 18 лет.
        </p>
        <div className="mt-8 text-xs opacity-30">
          &copy; {new Date().getFullYear()} Created by Senior Frontend Engineer
        </div>
      </div>
    </footer>
  );
};
