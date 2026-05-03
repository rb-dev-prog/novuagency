'use client';

import Link from 'next/link';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const footerLinks = {
  servicios: [
    { label: 'Asistentes IA para WhatsApp', href: '#servicios' },
    { label: 'Embudos de Venta', href: '#servicios' },
    { label: 'Sistemas de Agendamiento', href: '#servicios' },
    { label: 'Monitoreo e Infraestructura', href: '#servicios' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#' },
    { label: 'Casos de Éxito', href: '#portafolio' },
    { label: 'Blog', href: '#' },
    { label: 'Contacto', href: '#contacto' },
  ],
  legal: [
    { label: 'Términos de Servicio', href: '#' },
    { label: 'Política de Privacidad', href: '#' }],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-textPrimary">
                Novu <span className="text-primary">Agency</span>
              </span>
            </Link>
            <p className="text-textSecondary text-sm leading-relaxed">
              Automatización y agentes de Inteligencia Artificial para escalar tu negocio.
              Transformamos procesos manuales en sistemas inteligentes.
            </p>
          </div>

          <div>
            <h4 className="text-textPrimary font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-textSecondary text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-textPrimary font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-textSecondary text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-textPrimary font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-textSecondary text-sm">
                <Mail className="w-4 h-4" />
                <span>{siteConfig.brandEmail}</span>
              </li>
              <li className="flex items-center gap-2 text-textSecondary text-sm">
                <Phone className="w-4 h-4" />
                <span>{siteConfig.brandPhone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-sm">
            © {new Date().getFullYear()} Novu Agency. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} className="text-textMuted text-sm hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}