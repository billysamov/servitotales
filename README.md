# ??? SERVITOTALES S.A.C. - Portal Corporativo

Sitio web corporativo y catálogo técnico de **Servicios Totales del Perú S.A.C. (SERVITOTALES)**, empresa especializada en:
- Venta y alquiler de **maquinaria pesada** y sistemas para **minería subterránea trackless**.
- Equipos de protección personal (**EPP**) certificados bajo normas ANSI/OSHA.
- **Ferretería industrial**, pernos de alta resistencia y suministros corporativos.
- Sistema de Gestión de la Calidad respaldado por la certificación internacional **ISO 9001:2015**.

---

## ?? Tecnologías y Arquitectura

- **Framework**: [Astro v5 / v7+](https://astro.build/) - Arquitectura *Islands* ultra-rápida y zero-JS por defecto.
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) con soporte integrado de modo claro / modo oscuro.
- **Animaciones & UI**: [GSAP](https://greensock.com/gsap/) para transiciones industriales fluidas.
- **Despliegue & CI/CD**: Optimizado para despliegue continuo en **Vercel** mediante integración con GitHub.

---

## ?? Estructura del Proyecto

```text
servitotales/
+-- public/              # Favicon y recursos estáticos
+-- src/
¦   +-- components/      # Navbar, Footer, ThemeToggle, WhatsAppFloat
¦   +-- layouts/         # Layout maestro con SEO, OpenGraph y JSON-LD ISO 9001
¦   +-- pages/           # Rutas: /, /nosotros, /maquinaria, /epp, /suministros, /contacto
¦   +-- styles/          # Estilos globales y variables de diseño
+-- astro.config.mjs     # Configuración de Astro y adapter Vercel
+-- tailwind.config.mjs  # Configuración de colores y tipografías corporativas
+-- package.json
```

---

## ??? Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor local de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación de producción
npm run preview
```
