# Guía de despliegue — Marvanto

Este documento explica cómo desplegar el sitio Astro en tres entornos: **local**, **GitHub Pages** y **Hostinger**.

## Configuración por entorno

El proyecto usa variables de entorno para personalizar `base` y `site` de Astro según el destino:

| Entorno         | `ASTRO_BASE_PATH`          | `ASTRO_SITE`                                  |
|-----------------|----------------------------|-----------------------------------------------|
| Local (dev)     | `/`                        | `https://adrianburgoscolas.github.io`         |
| GitHub Pages    | `/marvanto_web_site`       | `https://adrianburgoscolas.github.io`         |
| Hostinger       | `/`                        | `https://marvantodistribution.com`            |

Estas variables se leen en `astro.config.mjs`:

```js
const base = process.env.ASTRO_BASE_PATH ?? '/marvanto_web_site';
const site = process.env.ASTRO_SITE ?? 'https://adrianburgoscolas.github.io';
```

> **Importante:** `ASTRO_BASE_PATH` afecta a todas las rutas internas generadas por Astro. Si cambia, deben revisarse los enlaces y assets. El helper `withBase()` en `src/utils/paths.ts` aplica automáticamente el `base` configurado a las URLs internas.

---

## 1. Desarrollo local

```bash
pnpm dev
```

Esto ejecuta `ASTRO_BASE_PATH=/ astro dev` — el sitio se sirve en `http://localhost:4321/`.

Para simular el entorno de GitHub Pages en local (con el subdirectorio `/marvanto_web_site`):

```bash
pnpm dev:gp
```

### Preview de la build

```bash
pnpm build && pnpm preview
```

Esto construye con la configuración por defecto (GitHub Pages) y sirve el resultado en `http://localhost:4321/marvanto_web_site/`.

---

## 2. Despliegue a GitHub Pages

### Flujo automático (CI/CD)

El despliegue se realiza mediante **GitHub Actions** al hacer push a la rama `develop`.

**Archivo de workflow:** `.github/workflows/deploy.yml`

```
name: Deploy to GitHub Pages

on:
  push:
    branches: [ develop ]
  workflow_dispatch:
```

**Qué hace el workflow:**

1. **Checkout** del repositorio.
2. **Build** con `withastro/action@v3` (instala dependencias con pnpm, ejecuta `astro build`).
3. **Deploy** a GitHub Pages con `actions/deploy-pages@v4`.

Las variables de entorno se inyectan en el paso de build:

```yaml
env:
  ASTRO_BASE_PATH: /marvanto_web_site
  ASTRO_SITE: https://adrianburgoscolas.github.io
```

### Requisitos previos en GitHub

1. El repositorio debe tener **GitHub Pages** habilitado en Settings → Pages.
2. La fuente debe apuntar a **GitHub Actions**.
3. El workflow necesita los permisos `contents: read`, `pages: write`, `id-token: write` (ya configurados en el YAML).

### URL resultante

```
https://adrianburgoscolas.github.io/marvanto_web_site/
```

### Build manual (sin CI)

```bash
pnpm build:gp
```

Genera la carpeta `dist/` lista para subirse manualmente a cualquier hosting que sirva archivos estáticos desde un subdirectorio `/marvanto_web_site`.

---

## 3. Despliegue a Hostinger

Hostinger es el dominio de producción: `https://marvantodistribution.com`.

### Build para Hostinger

```bash
pnpm build:hostinger
```

Esto ejecuta:

```
ASTRO_BASE_PATH=/ ASTRO_SITE=https://marvantodistribution.com astro build
```

La carpeta `dist/` se genera con `base: '/'` (raíz del dominio) y `site` apuntando al dominio de producción.

### Subida al hosting

Una vez generada la carpeta `dist/`, el contenido debe subirse a Hostinger. Las opciones son:

#### Opción A: hPanel (File Manager)

1. Accede a hPanel → File Manager.
2. Navega a `public_html/` (o la carpeta raíz configurada para el dominio).
3. Sube **todo el contenido** de `dist/` (no la carpeta `dist/` en sí, sino lo que contiene: `index.html`, `assets/`, etc.).

#### Opción B: FTP/SFTP

Usa cualquier cliente FTP (FileZilla, Cyberduck, etc.) con las credenciales de Hostinger:

```
Host: ftp.marvantodistribution.com (o la IP del hosting compartido)
Usuario: (proporcionado por Hostinger)
Contraseña: (proporcionado por Hostinger)
Puerto: 21 (FTP) o 22 (SFTP)
```

Sube el contenido de `dist/` a la carpeta raíz del dominio (normalmente `public_html/`).

#### Opción C: SSH (si el plan lo permite)

Si Hostinger tiene SSH habilitado, se puede usar `rsync`:

```bash
rsync -avz --delete dist/ usuario@hostinger:/home/usuario/public_html/
```

> `--delete` elimina archivos huérfanos en el servidor que ya no existen en `dist/`.

---

## Scripts disponibles (resumen)

| Comando              | Uso                                          |
|----------------------|----------------------------------------------|
| `pnpm dev`           | Dev local en `/`                             |
| `pnpm dev:gp`        | Dev local simulando GitHub Pages             |
| `pnpm build`         | Build por defecto (GitHub Pages)             |
| `pnpm build:gp`      | Build explícito para GitHub Pages            |
| `pnpm build:hostinger` | Build para Hostinger (producción)          |
| `pnpm preview`       | Previsualizar la build generada              |

---

## Notas importantes

- **`base` y `site`**: Siempre verifica que las variables de entorno coincidan con el destino. Un `base` incorrecto rompe todos los enlaces, assets y rutas.
- **SPA/SSG**: Este proyecto es estático (SSG). No necesita Node.js en el servidor de producción.
- **Certificado SSL**: Hostinger y GitHub Pages proporcionan SSL automático. Si usas otro hosting, asegúrate de configurar HTTPS.
- **Dominio personalizado en GitHub Pages**: Si se configura un dominio custom, debe ajustarse `ASTRO_SITE` y añadirse un archivo `CNAME` en `public/` o en la configuración del repositorio.
