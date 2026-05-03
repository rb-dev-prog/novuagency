import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { SiteConfig } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig: SiteConfig = {
  calUrl: process.env.NEXT_PUBLIC_CAL_URL || 'your-calendario',
  calEmbedUrl: process.env.NEXT_PUBLIC_CAL_EMBED_URL || 'https://cal.com/embed/your-calendario',
  chatApiUrl: process.env.NEXT_PUBLIC_CHAT_API_URL || 'http://localhost:3000/api/chat',
  chatWelcomeMessage: process.env.NEXT_PUBLIC_CHAT_WELCOME_MESSAGE || '¡Hola! Soy el asistente de Novu Agency. ¿En qué puedo ayudarte?',
  chatPlaceholder: process.env.NEXT_PUBLIC_CHAT_PLACEHOLDER || 'Escribe tu mensaje...',
  shopWebhookUrl: process.env.NEXT_PUBLIC_SHOP_WEBHOOK_URL || 'http://localhost:5678/webhook/shop-order',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Novu Agency',
  siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Automatización y agentes de IA para escalar tu negocio',
  siteImage: process.env.NEXT_PUBLIC_SITE_IMAGE || '/assets/og-image.png',
  brandEmail: process.env.NEXT_PUBLIC_BRAND_EMAIL || 'hola@novuagency.com',
  brandPhone: process.env.NEXT_PUBLIC_BRAND_PHONE || '+1234567890',
};