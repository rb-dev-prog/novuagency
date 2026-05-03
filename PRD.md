# Product Requirements Document (PRD)

## 1. Project Overview

### Project Name
**Novu Agency** - Landing Page y Plataforma de Automatización con IA

### Project Type
Sitio web corporativo / Landing page de servicios

### Core Functionality
Sitio web de presentación para agencia de automatización e inteligencia artificial. Showcase de servicios, casos de éxito, tienda digital de productos/templates, y sistema de agendamiento/contacto.

### Target Users
- Emprendedores y negocios que buscan automatizar procesos
- Pymes que necesitan escalar sin contratar más personal
- Empresas que buscan implementar IA en sus operaciones

---

## 2. UI/UX Specification

### Layout Structure

#### Page Sections (en orden)
1. **Hero** - Sección principal con headline, CTA y estadísticas
2. **Servicios** - Grid de 4 servicios destacados
3. **Portafolio** - Casos de éxito con modal de detalle
4. **Tienda** - Productos digitales para venta
5. **Contacto** - Formulario y agendamiento

#### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
| Role | Color | Usage |
|------|-------|-------|
| Primary | `#6366f1` (Indigo) | Buttons, accents, hero gradient |
| Accent | `#10b981` (Emerald) | Success states, checkmarks |
| Background | Dark mode | Backgrounds |
| Surface | `#1e293b` | Cards, containers |
| Border | `#334155` | Borders, dividers |
| Text Primary | `#f8fafc` | Headings, main text |
| Text Secondary | `#94a3b8` | Descriptions |
| Text Muted | `#64748b` | Labels, muted text |

#### Typography
- **Font Family**: System fonts (Tailwind default)
- **Headings**: Bold, 3xl - 7xl
- **Body**: Regular, lg - xl
- **Labels**: Medium, sm

#### Animations
- Framer Motion para transiciones
- Entradas con `useInView`
- Hover effects en cards interactivas
- Gradient animado en headline

### Components

#### Core Components
- **Button**: Primary, outline variants; sizes sm/lg; loading state
- **Card**: Interactive hover state, padding, border
- **Section**: Wrapper con max-width y padding

#### Section Components
- **Hero**: Stats grid, benefits list, CTAs
- **Services**: 4-column grid con icons
- **Portfolio**: 2-column grid con modal
- **Shop**: 4-column grid con buy buttons
- **Contact**: 2-column (form + info), Cal.com embed

---

## 3. Functionality Specification

### Core Features

#### 3.1 Hero Section
- Headline animado con gradient
- Estadísticas: 500+ automations, 98% satisfacción, 24/7
- Lista de beneficios
- Botones CTA: Agendar Consultoría, Ver Casos de Éxito

#### 3.2 Servicios
4 servicios mostrados:
1. **WhatsApp IA** - Asistentes para WhatsApp
2. **Embudos** - Automatización de ventas
3. **Agendamiento** - Sistemas de citas
4. **Infraestructura** - Monitoreo web

Cada servicio incluye:
- Icono
- Título
- Descripción
- Lista de características (4 items)
- Hover interactivo

#### 3.3 Portafolio
4 casos de éxito:
1. Clínica Dental - Agendamiento
2. E-commerce - Embudo automatizado
3. SaaS - Chat de soporte IA
4. Agencia Inmobiliaria - CRM automatizado

Cada caso incluye:
- Título y descripción
- 3 métricas con icons
- Tags de tecnologías
- Click abre modal con detalle

#### 3.4 Tienda Digital
4 productos:
1. Plantilla n8n - Lead Qualification ($49)
2. Prompt Master - Ventas ($29)
3. Embudo Digital Complete ($97)
4. AI Agent Builder ($149)

Funcionalidades:
- Botón comprar envía a webhook
- Loading state durante request
- Alerta de éxito/error
- Producto "Popular" badge

#### 3.5 Contacto
- Información de contacto (email, teléfono, ubicación, horario)
- Formulario: nombre, email, mensaje
- Botón Cal.com para agendamiento
- Embed de Cal.com bajo demanda

### Environment Variables Requeridas
```
NEXT_PUBLIC_CAL_URL
NEXT_PUBLIC_CAL_EMBED_URL
NEXT_PUBLIC_CHAT_API_URL
NEXT_PUBLIC_CHAT_WELCOME_MESSAGE
NEXT_PUBLIC_CHAT_PLACEHOLDER
NEXT_PUBLIC_SHOP_WEBHOOK_URL
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_SITE_DESCRIPTION
NEXT_PUBLIC_SITE_IMAGE
NEXT_PUBLIC_BRAND_EMAIL
NEXT_PUBLIC_BRAND_PHONE
```

### Edge Cases
- Webhook no configurado: mostrar alerta con instrucción
- Cal.com: cargar embed solo bajo demanda
- Formulario: reset después de submit exitoso

---

## 4. Technical Stack

### Dependencies
- **Next.js** 16.2.4 (App Router)
- **React** 19.2.4
- **Tailwind CSS** v4
- **Framer Motion** 12.x
- **Lucide React** (icons)
- **clsx + tailwind-merge** (utilities)

### File Structure
```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   └── Shop.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   └── chat/
│       └── ChatWidget.tsx
├── lib/
│   └── config.ts
└── types/
    └── index.ts
```

---

## 5. Acceptance Criteria

### Visual Checkpoints
- [ ] Dark theme aplicado consistentemente
- [ ] Gradients y blur effects en Hero
- [ ] Animaciones de entrada en todas las secciones
- [ ] Hover states en cards interactivas
- [ ] Modal abre y cierra correctamente
- [ ] Responsive en mobile/tablet/desktop

### Functional Checkpoints
- [ ] Botones CTA scroll a secciones
- [ ] Formulario muestra states de loading/success
- [ ] Tienda envía a webhook correctamente
- [ ] Cal.com embed carga bajo demanda
- [ ] Todas las variables de entorno configuradas

### Performance
- [ ] Build sin errores
- [ ] No hay TypeScript errors
- [ ] ESLint passes

---

## 6. Future Considerations

### Potential Features
- Blog/sección de artículos
- Chat widget en vivo
- Sistema de pagos integrado (Stripe)
- Dashboard para clientes
- Área de miembros
- Blog/recursos

### Integraciones Pendientes
- WhatsApp Business API
- Stripe para pagos
- CRM integrations (HubSpot, Pipedrive)
- n8n/self-hosted automatización