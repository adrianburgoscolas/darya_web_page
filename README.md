# Darya Integral Trade SL

Sitio web corporativo de **Darya Integral Trade SL**, empresa especializada en electrodomésticos, accesorios del hogar y materiales de construcción con puntos de recogida en toda Latinoamérica.

## 🚀 Tech Stack

- **[Astro 7](https://astro.build)** — Framework estático con View Transitions
- **[Tailwind CSS 4](https://tailwindcss.com)** — Estilos utility-first con `@tailwindcss/vite`
- **[Lucide Astro](https://lucide.dev)** — Iconografía SVG
- **[Formspree Ajax](https://formspree.io)** — Envío de formularios sin backend
- **pnpm** — Gestor de paquetes

## 📁 Estructura del proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Navbar.astro      # Barra de navegación fija con menú móvil
│   ├── Hero.astro        # Sección principal con CTAs y categorías
│   ├── ValueProps.astro  # Grid de propuestas de valor (4 tarjetas)
│   ├── ProductShowcase.astro  # Categorías: Electrodomésticos, Accesorios, Construcción
│   ├── HowItWorks.astro  # Timeline de 3 pasos
│   ├── TrustSocial.astro # Métricas + carousel automático de testimonios + badges
│   ├── FAQ.astro         # Acordeón de preguntas frecuentes
│   └── Footer.astro      # Pie de página con enlaces legales y contacto
├── layouts/
│   └── Layout.astro      # Layout principal (head, Navbar, Footer, View Transitions)
├── pages/
│   ├── index.astro       # Landing page
│   ├── contacto.astro    # Formulario de contacto (Formspree)
│   ├── privacidad.astro  # Política de Privacidad
│   ├── terminos.astro    # Términos y Condiciones
│   └── cookies.astro     # Política de Cookies
├── styles/
│   └── global.css        # Configuración de Tailwind, fuentes y animaciones
public/
├── darya_logo.png        # Logo corporativo
├── favicon.ico / *.png   # Favicons multi-dispositivo
├── og-image.png          # Open Graph image
└── site.webmanifest      # PWA manifest
```

## 🛠️ Comandos

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Compila el sitio para producción en `dist/` |
| `pnpm preview` | Previsualiza la build de producción localmente |

## 🎨 Diseño

- **Paleta**: Navy `#0F172A`, Gold `#D97706`/`#F59E0B`, Emerald `#059669`
- **Tipografía**: Inter (Google Fonts)
- **Responsive**: Mobile-first, optimizado desde 360px
- **Transiciones**: Navegación SPA suave entre páginas con View Transitions API
- **Carousel**: Auto-avance cada 4s, pausa al hover, swipe táctil

## 📬 Formulario de contacto

El formulario en `/contacto` usa `@formspree/ajax` para enviar mensajes sin exponer direcciones de correo. La configuración se encuentra en `src/pages/contacto.astro`:

```js
import { initForm } from '@formspree/ajax/dist/index.mjs';
initForm({ formElement: '#contact-form', formId: 'xkodlzej' });
```

## 🚢 Despliegue

### Configuración por entorno

| Entorno | `ASTRO_BASE_PATH` | `ASTRO_SITE` |
|---|---|---|
| Local (dev) | `/` | `https://adrianburgoscolas.github.io` |
| GitHub Pages | `/darya_web_page` | `https://adrianburgoscolas.github.io` |
| Hostinger | `/` | `https://darya-integral-trade.com` |

### Scripts de build

| Comando | Uso |
|---|---|
| `pnpm dev` | Dev local en `/` |
| `pnpm dev:gp` | Dev local simulando GitHub Pages |
| `pnpm build` | Build por defecto (GitHub Pages) |
| `pnpm build:gp` | Build explícito para GitHub Pages |
| `pnpm build:hostinger` | Build para Hostinger (producción) |
| `pnpm preview` | Previsualizar la build generada |

### Workflows CI/CD

| Rama | Destino | Workflow |
|---|---|---|
| `develop` | GitHub Pages | `.github/workflows/deploy-develop.yml` |
| `master` | Hostinger (FTP) | `.github/workflows/deploy-master.yml` |

#### GitHub Pages (develop)

- Push a `develop` dispara el workflow
- Usa `withastro/action@v3` + `actions/deploy-pages@v4`
- Requiere GitHub Pages habilitado en Settings → Pages → Source: **GitHub Actions**
- URL: `https://adrianburgoscolas.github.io/darya_web_page/`

#### Hostinger (master)

- Push a `master` dispara el workflow
- Compila con `build:hostinger` y despliega vía FTP
- Requiere los secrets: `HOSTINGER_FTP_HOST`, `HOSTINGER_FTP_USER`, `HOSTINGER_FTP_PASSWORD`
- Sube el contenido de `dist/` a `public_html/`

## 📄 Páginas legales

- `/privacidad` — Política de Privacidad (RGPD)
- `/terminos` — Términos y Condiciones
- `/cookies` — Política de Cookies

## 🔧 Variables de entorno

| Variable | Default | Descripción |
|---|---|---|
| `ASTRO_BASE_PATH` | `/darya_web_page` | Path base para URLs |
| `ASTRO_SITE` | `https://adrianburgoscolas.github.io` | URL canónica del sitio |
