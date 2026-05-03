'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const stats = [
  { value: '500+', label: 'Automaciones' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24/7', label: 'Disponibilidad' },
];

const benefits = [
  { icon: TrendingUp, text: 'Escala sin contratar más personal' },
  { icon: Zap, text: 'Automatiza procesos repetitivos' },
  { icon: Shield, text: 'Reduce errores humanos' },
];

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-glow" style={{ animationDelay: '2s' }} />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-10 gradient-border">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" strokeWidth={1.5} />
            <span className="text-sm font-medium text-textSecondary tracking-wide">AUTOMATIZACIÓN INTELIGENTE</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-8xl font-bold text-textPrimary leading-[1.1] mb-8 tracking-tight"
        >
          Escala tu negocio con{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-gradient">IA</span>
            <span className="absolute inset-0 blur-xl bg-primary/30 animate-pulse-glow" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transformamos procesos manuales en sistemas automatizados usando agentes inteligentes. 
          Tu equipo focused en lo importante, nosotros handled lo repetitivo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" className="group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Agendar Consultoría
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button variant="outline" size="lg" className="glass gradient-border" onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Casos de Éxito
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group relative p-6 rounded-2xl glass hover:bg-surface-hover transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl gradient-border opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-textMuted text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="flex items-center gap-3 px-4 py-2 rounded-full glass"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <benefit.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-sm text-textSecondary">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}