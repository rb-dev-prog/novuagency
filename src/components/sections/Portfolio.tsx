'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, TrendingUp, Users, DollarSign, X, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const portfolioItems = [
  {
    id: '1',
    title: 'Clínica Dental - Sistema de Agendamiento',
    description: 'Automatización completa de citas con triaje automático y recordatorios por WhatsApp.',
    metrics: [
      { icon: TrendingUp, value: '+60%', label: 'citas agendadas' },
      { icon: Users, value: '-80%', label: 'no-shows' },
      { icon: DollarSign, value: '$12K', label: 'ingresos extra/mes' },
    ],
    tags: ['n8n', 'WhatsApp API', 'Cal.com'],
  },
  {
    id: '2',
    title: 'E-commerce - Embudo de Venta Automatizado',
    description: 'Desde traffic pago hasta entrega digital. Todo el proceso sin intervención manual.',
    metrics: [
      { icon: TrendingUp, value: '+150%', label: 'conversiones' },
      { icon: Users, value: '24/7', label: 'disponibilidad' },
      { icon: DollarSign, value: '3x', label: 'ROI en ads' },
    ],
    tags: ['Next.js', 'Stripe', 'n8n'],
  },
  {
    id: '3',
    title: 'SaaS - Chat de Soporte con IA',
    description: 'Asistente virtual que resuelve el 70% de las consultas sin intervención humana.',
    metrics: [
      { icon: TrendingUp, value: '70%', label: 'tickets resueltos' },
      { icon: Users, value: '-90%', label: 'tiempo de respuesta' },
      { icon: DollarSign, value: '4.8/5', label: 'satisfacción' },
    ],
    tags: ['OpenAI', 'Botpress', 'Intercom'],
  },
  {
    id: '4',
    title: 'Agencia Inmobiliaria - CRM Automatizado',
    description: 'Sequencias de seguimiento automáticas y calificación de leads con IA.',
    metrics: [
      { icon: TrendingUp, value: '+200%', label: 'leads cualificados' },
      { icon: Users, value: '5x', label: 'productividad' },
      { icon: DollarSign, value: '$45K', label: 'ventas/mes' },
    ],
    tags: ['Make.com', 'ChatGPT', 'HubSpot'],
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <section id="portafolio" className="py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
            Casos de <span className="text-primary">Éxito</span>
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a empresas a escalar con automatización inteligente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group cursor-pointer" interactive onClick={() => setSelectedItem(item)}>
                <div className="aspect-video bg-background rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  <ImageIcon className="w-12 h-12 text-textMuted" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-textPrimary mb-2">{item.title}</h3>
                <p className="text-textSecondary text-sm mb-4">{item.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  {item.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="flex items-center justify-center gap-1 text-primary font-bold">
                        <metric.icon className="w-4 h-4" />
                        {metric.value}
                      </div>
                      <div className="text-xs text-textMuted">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-background text-textSecondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedItem(null)}>
          <div className="bg-surface rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-textPrimary">{selectedItem.title}</h3>
              <button onClick={() => setSelectedItem(null)} className="p-2 hover:bg-background rounded-lg">
                <X className="w-5 h-5 text-textSecondary" />
              </button>
            </div>
            <p className="text-textSecondary mb-6">{selectedItem.description}</p>
            <div className="aspect-video bg-background rounded-lg mb-6 flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-textMuted" />
            </div>
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setSelectedItem(null)}>Cerrar</Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}