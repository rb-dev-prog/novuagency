'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingCart, Check, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

const products = [
  {
    id: 'template-1',
    title: 'Plantilla n8n - Lead Qualification',
    description: 'Workflow completo para calificar leads automáticamente. Integración con OpenAI.',
    price: 49,
    features: ['Configuración en 15 minutos', 'Integración OpenAI', 'Dashboard de métricas', 'Soporte 30 días'],
    popular: true,
  },
  {
    id: 'prompt-1',
    title: 'Prompt Master - Ventas',
    description: 'Collection de 50+ prompts optimizados para ventas, atención al cliente y embudos.',
    price: 29,
    features: ['50+ prompts testeados', 'Categorizados por caso uso', 'Ejemplos de uso real', 'Actualizaciones gratis'],
    popular: false,
  },
  {
    id: 'template-2',
    title: 'Embudo Digital Complete',
    description: 'Sistema completo de embudo de ventas con emails, WhatsApp y pagos.',
    price: 97,
    features: ['Landing page incluida', 'Sequencia de emails', 'Integración WhatsApp', 'Pagos con Stripe'],
    popular: false,
  },
  {
    id: 'tool-1',
    title: 'AI Agent Builder',
    description: 'Crea tus propios agentes IA sin código. Interfaz visual intuitiva.',
    price: 149,
    features: ['Interfaz visual', 'Múltiples agentes', 'Integración WhatsApp', 'Escalabilidad'],
    popular: false,
  },
];

export function Shop() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);

  const handleBuy = async (productId: string) => {
    setLoadingProduct(productId);
    try {
      const webhookUrl = siteConfig.shopWebhookUrl;
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          timestamp: new Date().toISOString(),
          url: window.location.href,
        }),
      });
      
      if (response.ok) {
        alert('¡Gracias por tu compra! Te contactaremos pronto para continuar.');
      } else {
        alert('Error al procesar. Intenta de nuevo.');
      }
    } catch {
      alert('Webhook no configurado aún. Configura NEXT_PUBLIC_SHOP_WEBHOOK_URL en .env');
    } finally {
      setLoadingProduct(null);
    }
  };

  return (
    <section id="tienda" className="py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
            Tienda <span className="text-primary">Digital</span>
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Plantillas, prompts y herramientas para implementar tu propia automatización
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full z-10">
                  Popular
                </div>
              )}
              <Card className="h-full flex flex-col">
                <div className="aspect-square bg-background rounded-lg mb-4 flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-textMuted" />
                </div>

                <h3 className="text-lg font-semibold text-textPrimary mb-2">{product.title}</h3>
                <p className="text-textSecondary text-sm mb-4 flex-grow">{product.description}</p>

                <ul className="space-y-2 mb-4">
                  {product.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-textSecondary">
                      <Check className="w-4 h-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-textPrimary">${product.price}</span>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleBuy(product.id)}
                    isLoading={loadingProduct === product.id}
                    disabled={loadingProduct === product.id}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}