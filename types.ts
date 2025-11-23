import React from 'react';

export interface Step {
  id: number;
  title: string;
  description: string;
  details: string[];
  duration: string;
  icon: string;
  tips: string;
}

export interface EquipmentItem {
  name: string;
  description: string;
  ozonLink: string;
  wbLink: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}