'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/lib/config';

const contactInfo = [
  { icon: Mail, label: 'Email', value: siteConfig.brandEmail, href: `mailto:${siteConfig.brandEmail}` },
  { icon: Phone, label: 'Teléfono', value: siteConfig.brandPhone, href: `tel:${siteConfig.brandPhone}` },
  { icon: MapPin, label: 'Ubicación', value: 'Remoto - Latinoamérica', href: '#' },
  { icon: Clock, label: 'Horario', value: 'Lun-Vie 9AM-6PM', href: '#' },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleCalEmbed = () => {
    const calUrl = siteConfig.calEmbedUrl;
    const width = window.innerWidth < 768 ? '100%' : '100%';
    const height = window.innerWidth < 768 ? '700' : '650';
    
    const attrs = `width="${width}" height="${height}" src="${calUrl}?embed" frameborder="0" scrolling="no"`;
    
    const container = document.getElementById('cal-embed-container');
    if (container) {
      container.innerHTML = `<iframe ${attrs}></iframe>`;
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
            Agend<span className="text-primary">amiento</span>
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Agenda una consultoría gratuita de 30 minutos y descubre cómo automatizar tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="mb-8">
              <h3 className="text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Agenda tu Consultoría
              </h3>
              <p className="text-textSecondary mb-6">
                Selecciona un horario que te funcione y conversamos sobre tu negocio y cómo podemos ayudarte a escalar.
              </p>
              <Button className="w-full" onClick={handleCalEmbed}>
                <Calendar className="w-5 h-5 mr-2" />
                Ver Horarios Disponibles
              </Button>
              <div id="cal-embed-container" className="mt-4 min-h-[400px]" />
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-textPrimary mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-background transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-textMuted text-sm">{info.label}</div>
                      <div className="text-textPrimary font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <h3 className="text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Envíanos un Mensaje
              </h3>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold text-textPrimary mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-textSecondary">Te responderemos en menos de 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-textSecondary text-sm mb-2">Nombre</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-primary transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-textSecondary text-sm mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-primary transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-textSecondary text-sm mb-2">Mensaje</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}