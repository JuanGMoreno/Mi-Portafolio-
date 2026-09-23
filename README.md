# Portafolio | Juan Guillermo Moreno

Portafolio bilingüe de Juan Guillermo Moreno, desarrollador **Full-Stack**. Reúne experiencia, habilidades, proyectos y un formulario de contacto en una interfaz accesible y adaptable a distintos tamaños de pantalla.

**[Ver sitio en español](https://mi-portafolio-bay-eta.vercel.app/es)** · [English version](https://mi-portafolio-bay-eta.vercel.app/en)

## Vista previa

> Captura general del portafolio pendiente de añadir. Este espacio está reservado para una imagen de la página publicada, preferiblemente del inicio y la sección de proyectos.

## Qué incluye

- Presentación profesional, experiencia, tecnologías y fichas de proyectos con enlaces a sus aplicaciones y repositorios públicos.
- Contenido en español e inglés con `next-intl` y rutas `/es` y `/en`.
- Animaciones con Motion que contemplan la preferencia de movimiento reducido.
- Formulario de contacto con React Hook Form y Zod: validación en cliente y servidor, estados de envío y mensajes localizados.
- Endpoint `POST /api/contact` para enviar mensajes por SMTP mediante Nodemailer, con límites de tamaño y un campo honeypot contra envíos automatizados.
- Enlaces a las versiones PDF y DOCX del CV en ambos idiomas.

## Tecnologías

- **Interfaz:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, componentes de shadcn, Motion y Remix Icon.
- **Formularios y servidor:** React Hook Form, Zod, Route Handler de Next.js y Nodemailer.
- **Internacionalización:** `next-intl`.

## Estructura principal

```text
app/[locale]/           Página y layout por idioma
app/api/contact/        Endpoint HTTP del formulario
components/sections/    Secciones del portafolio
features/contact/       Esquema, tipos y servicio de contacto
i18n/                   Configuración de idiomas
messages/               Textos en español e inglés
public/                 Imágenes, iconos y CV
```

## Ejecutar en local

Requisitos: Node.js y [pnpm](https://pnpm.io/). La versión de pnpm declarada por el proyecto es `10.12.4`.

```bash
git clone https://github.com/JuanGMoreno/Mi-Portafolio-.git
cd Mi-Portafolio-
pnpm install
pnpm dev
```

Abre [http://localhost:3000/es](http://localhost:3000/es). También puedes visitar `/en`.

El contenido puede explorarse sin configurar SMTP. Para que el formulario **envíe correos**, copia `.env.example` a `.env.local` y configura `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` y `CONTACT_TO_EMAIL`. Nunca subas contraseñas ni el archivo `.env.local` al repositorio.

```bash
pnpm lint
pnpm build
```

## Autor

**Juan Guillermo Moreno** · [GitHub](https://github.com/JuanGMoreno) · [Portafolio](https://mi-portafolio-bay-eta.vercel.app/es)
