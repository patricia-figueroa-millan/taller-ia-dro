
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'es-MX',

  title: 'Taller IA-DRO',

  description:
    'Inteligencia Artificial aplicada a la Arquitectura y a la práctica profesional del Director Responsable de Obra',

  base: '/',

  cleanUrls: true,

  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Taller IA-DRO',

    nav: [
    { text: 'Inicio', link: '/' },
    { text: 'Programa', link: '/programa' },
    { text: 'Presentación', link: '/presentacion/index.html', target: '_self' },
    { text: 'Actividades', link: '/actividades/' },
    { text: 'Recursos', link: '/recursos/' }
    ],

    sidebar: [
      {
        text: 'Taller IA-DRO',
        items: [
          { text: 'Inicio', link: '/' },
          { text: 'Programa del taller', link: '/programa' }
        ]
      },
      {
        text: 'Módulos del taller',
        items: [
          { text: 'Índice de módulos', link: '/modulos/' },
          {
            text: 'Módulo 1. Fundamentos de IA',
            link: '/modulos/modulo-1'
          }
        ]
      },
      {
        text: 'Materiales',
        items: [
          { text: 'Actividades prácticas', link: '/actividades/' },
          { text: 'Recursos digitales', link: '/recursos/' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/patricia-figueroa-millan/taller-ia-dro'
      }
    ],

    footer: {
      message: 'Taller | Inteligencia Artificial aplicada a la Arquitectura y a la práctica profesional del DRO.',
      copyright: '© 2026 Derechos Reservados · Dra. Patricia Elizabeth Figueroa Millán · Instituto Tecnológico de Colima · División de Estudios de Posgrado e Investigación.'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: 'En esta página'
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Siguiente'
    },

    returnToTopLabel: 'Volver arriba',

    sidebarMenuLabel: 'Menú',

    darkModeSwitchLabel: 'Apariencia'
  }
})
