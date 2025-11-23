import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { streamGeminiResponse } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

export const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Привет! Я твой виртуальный сомелье-помощник. Готовишь Изабеллу? Спроси меня, если что-то пошло не так (например, перчатка опала) или если нужен совет!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Initialize empty model message for streaming
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
        // Construct history for API (filtering out error messages or empty states if needed)
        const historyApiFormat = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        let fullResponseText = "";

        await streamGeminiResponse(
            historyApiFormat, 
            userMessage.text, 
            (chunk) => {
                fullResponseText += chunk;
                setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMsg = newMessages[newMessages.length - 1];
                    if (lastMsg.role === 'model') {
                        lastMsg.text = fullResponseText;
                    }
                    return newMessages;
                });
            }
        );

    } catch (error) {
      setMessages(prev => [
          ...prev.slice(0, -1), // remove the empty loading message
          { role: 'model', text: 'Извините, произошла ошибка при связи с AI. Попробуйте позже.', isError: true }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl shadow-wine-100 border border-wine-100 overflow-hidden flex flex-col h-[600px]">
          
          {/* Header */}
          <div className="bg-wine-900 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                    <Sparkles className="text-yellow-300" size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg">AI Сомелье</h3>
                    <p className="text-wine-200 text-sm">Онлайн консультант по Изабелле</p>
                </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`
                    max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed
                    ${msg.role === 'user' 
                        ? 'bg-wine-600 text-white rounded-br-none' 
                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                    }
                    ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}
                  `}
                >
                  {msg.role === 'model' ? (
                      <div className="prose prose-sm prose-p:my-1 prose-ul:my-1 max-w-none">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                  ) : (
                      msg.text
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-2 text-gray-400 text-sm">
                        <Loader2 className="animate-spin" size={16} />
                        <span>Печатает...</span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Спросите: 'Вино пахнет уксусом, что делать?'..."
                className="flex-1 px-5 py-3 rounded-full bg-gray-100 border-transparent focus:bg-white focus:border-wine-500 focus:ring-2 focus:ring-wine-200 outline-none transition-all"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-3 rounded-full bg-wine-600 text-white hover:bg-wine-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-wine-600/30"
              >
                <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
