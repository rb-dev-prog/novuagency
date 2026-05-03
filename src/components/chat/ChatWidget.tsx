'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Loader2, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';
import type { ChatMessage } from '@/types';

const faqAnswers: Record<string, string> = {
  precios: 'Nuestros servicios van desde $297 USD para proyectos básicos hasta $2,000+ USD para soluciones enterprise. La tienda digital tiene productos desde $29 USD.',
  tiempo: 'El tiempo de implementación varía: proyectos básicos 1-2 semanas, proyectos completos 4-8 semanas. Depende de la complejidad.',
  integraciones: 'Trabajamos con WhatsApp Business, Telegram, Slack, Discord, Gmail, Google Calendar, Stripe, PayPal, y más de 200+ integraciones via n8n.',
  soporte: 'Ofrecemos soporte 30 días incluido en todos los proyectos. Planes de soporte extendido disponibles.',
  garantia: 'Sí, ofrecen una garantía de satisfacción de 30 días. Si no estás satisfecho, te devolvemos el dinero.',
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: siteConfig.chatWelcomeMessage,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;
  
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };
  
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
  
    const lowerInput = userMessage.content.toLowerCase();
  
    let response = '';
    if (lowerInput.includes('precios') || lowerInput.includes('costo') || lowerInput.includes('precio')) {
      response = faqAnswers.precios;
    } else if (lowerInput.includes('tiempo') || lowerInput.includes('cuánto') || lowerInput.includes('duración')) {
      response = faqAnswers.tiempo;
    } else if (lowerInput.includes('integrac') || lowerInput.includes('conectar') || lowerInput.includes('whatsapp')) {
      response = faqAnswers.integraciones;
    } else if (lowerInput.includes('soporte') || lowerInput.includes('ayuda')) {
      response = faqAnswers.soporte;
    } else if (lowerInput.includes('garantía') || lowerInput.includes('devolución')) {
      response = faqAnswers.garantia;
    } else {
      try {
        const apiUrl = siteConfig.chatApiUrl;
        const res = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: userMessage.content,
            history: messages,
          }),
        });
    
        if (res.ok) {
          const data = await res.json();
          response = data.response || 'Lo siento, no pude obtener una respuesta. ¿Quieres hablar con un humano?';
        } else {
          response = 'Por el momento solo tengo las FAQs básicas. ¿Quieres agendar una consultoría para más detalles?';
        }
      } catch {
        response = 'Por el momento solo tengo las FAQs básicas. ¿Quieres agendar una consultoría para más detalles?';
      }
    }
  
    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date(),
    };
  
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleHuman = () => {
    setIsOpen(false);
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary hover:bg-primaryHover shadow-lg shadow-primary/30 flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] bg-surface rounded-xl border border-border shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-textPrimary font-medium">Asistente Novu</h4>
                  <p className="text-textMuted text-xs">IA disponible 24/7</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-background rounded-lg">
                <X className="w-5 h-5 text-textSecondary" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-background text-textPrimary'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.role === 'assistant' && (
                        <Bot className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      )}
                      {message.role === 'user' && (
                        <User className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-background rounded-2xl px-4 py-2">
                    <Loader2 className="w-5 h-5 text-primary animate-spin" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-border flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={siteConfig.chatPlaceholder}
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-textPrimary text-sm placeholder:text-textMuted focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="p-2 bg-primary rounded-lg hover:bg-primaryHover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="p-4 pt-0 border-t-0">
              <Button variant="ghost" size="sm" className="w-full justify-start" onClick={handleHuman}>
                <Phone className="w-4 h-4 mr-2" />
                Hablar con un humano
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}