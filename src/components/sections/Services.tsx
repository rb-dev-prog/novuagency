'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, TrendingUp, Calendar, Shield, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const services = [
  {
    id: 'whatsapp',
    icon: MessageSquare,
    title: 'Asistentes IA para WhatsApp',
    description: 'Atención al cliente omnicanal 24/7. Tus clientes obtienen respuestas instantáneas a cualquier hora.',
    features: ['Respuestas automáticas inteligentes', 'Multiasistente por producto', 'Integración con CRM', 'Historial conversacional'],
  },
  {
    id: 'funnels',
    icon: TrendingUp,
    title: 'Embudos de Venta Automatizados',
    description: 'Desde el anuncio hasta el cobro y entrega digital. Todo el proceso automatizado sin intervención manual.',
    features: ['Landing pages integradas', 'Secuencias de email', 'Pagos automáticos', 'Entrega digital instantânea'],
  },
  {
    id: 'scheduling',
    icon: Calendar,
    title: 'Sistemas de Agendamiento Inteligente',
    description: 'Triaje automático y recordatorios para clínicas, spas, consultorías y servicios profesionales.',
    features: ['Triaje por síntomas', 'Confirmaciones automáticas', 'Recordatorios por WhatsApp', 'Gestión de cancelaciones'],
  },
  {
    id: 'infrastructure',
    icon: Shield,
    title: 'Monitoreo e Infraestructura Web',
    description: 'Protección y alertas en tiempo real para tu presencia digital. Duerme tranquilo sabiendo que tu web está segura.',
    features: ['Monitoreo 24/7', 'Alertas instantáneas', 'Backups automáticos', 'Reportes diarios'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" className="py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-4 tracking-tight">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Soluciones integrales de automatización y IA diseñadas para escalar tu negocio sin límites
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="flex"
            >
              <Card className="w-full group h-full flex flex-col" interactive>
                <div className="flex items-start justify-between mb-4 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-textMuted opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-semibold text-textPrimary mb-2">{service.title}</h3>
                <p className="text-textSecondary mb-4">{service.description}</p>

                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-textMuted">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}