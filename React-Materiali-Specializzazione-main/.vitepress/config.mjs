import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Specializzazione React",
  cleanUrls: true,
  themeConfig: { 
    logo: "https://asset.brandfetch.io/idXWV8rEmc/id4RiI5qw_.png",
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Pre-requisiti', link: '/pre-requisiti/' },
      { text: "Letture", link: "/readings/" },
      { text: "Slides", link: "/slides/" },
      { text: "Selfworks", link: "/selfworks/" },
      { text: "Progetto", link: "/project/" },
    ],
    footer: {
      message: 'Usa questo materiale con il solo scopo di apprendimento ed esercizio personale, non a scopo divulgativo o lucrativo. I diritti di divulgazione sono riservati.',
      copyright: 'Copyright © 2023 Aulab'
    },
    sidebar: {
      '/slides/': [
        {
          text: "Slides",
          items: [
            {
              text: "01-intro-to-modern-web-development",
              link: "/slides/slides/01.a-intro-to-modern-web-development.md",
            },
            {
              text: "02-intro-to-React-components",
              link: "/slides/slides/01.b-intro-to-react-and-component-hierarchies.md",
            },
            {
              text: "03-intro-to-React-styling",
              link: "/slides/slides/02.a-react-styling-solutions-and-component-libraries.md",
            },
            {
              text: "04-React-form-basics",
              link: "/slides/slides/02.b-react-form-basics.md",
            },
            {
              text: "05-React-state-Todo-app",
              link: "/slides/slides/03-todo-list-checklist.md",
            },
            {
              text: "06-React-component-lifecycle",
              link: "/slides/slides/04-component-lifecycle-hooks-and-api-requests.md",
            },
            {
              text: "07-React-Router-dom",
              link: "/slides/slides/05-react-router.md",
            },
            {
              text: "08-intro-to-Context-API",
              link: "/slides/slides/06-Context-API.md",
            },
            {
              text: "08-React-ecosystem",
              link: "/slides/slides/React-ecosystem.md",
            },
          ],
        }
      ],
      '/selfworks/': [
        {
          text: "Selfworks",
          items: [
            {
              text: "01-intro-to-modern-web-development",
              link: "/selfworks/01-intro-to-modern-web-development/",
            },
            {
              text: "02-intro-to-React-components",
              link: "/selfworks/02-intro-to-react-and-components/",
            },
            {
              text: "03-intro-to-React-styling",
              link: "/selfworks/03-React-styling/",
            },
            {
              text: "04-React-form-basics",
              link: "/selfworks/04-React-form-basics/",
            },
            {
              text: "05-React-lifecycle-hooks",
              link: "/selfworks/05-React-lifecycle-hooks/",
            }, 
            {
              text: "06-Sigle-Page-Application",
              link: "/selfworks/06-React-router-dom/",
            }, 
            {
              text: "07-Context-API",
              link: "/selfworks/07-Context-API/",
            }, 
          ],
        }
      ],
      '/project/': [
        {
          text: "Guidelines",
          items: [
            {
              text: "01 - Setup",
              link: "/project/guidelines/01-setup.md",
            },  
            {
              text: "02 - Scaffolding project",
              link: "/project/guidelines/02-scaffolding.md",
            },
            {
              text: "03 - Api Requests",
              link: "/project/guidelines/03-api-requests.md",
            },
            {
              text: "04 - Dynamic routes",
              link: "/project/guidelines/04-dynamic-routes.md",
            },
            {
              text: "05 - Custom Hook",
              link: "/project/guidelines/05-custom-hook.md",
            }, 
            {
              text: "06 - QueryParams search",
              link: "/project/guidelines/06-qs-search.md",
            },
            {
              text: "07 - Supabase Integration",
              link: "/project/guidelines/07-supabase.md",
            },
            {
              text: "08 - Authentication",
              link: "/project/guidelines/08-authentication.md",
            },
            {
              text: "09 - SessionProvider",
              link: "/project/guidelines/09-session-provider.md",
            },
            {
              text: "10 - Update Profile",
              link: "/project/guidelines/10-update-profile.md",
            },
            {
              text: "11 - Favorites List",
              link: "/project/guidelines/11-list-favorites.md",
            },
            {
              text: "12 - Realtime Game Chat",
              link: "/project/guidelines/12-realtime-gamechat.md",
            },
            {
              text: "13 - Deploy",
              link: "/project/guidelines/13-deploy.md",
            },
          ],
        },
      ],
    },
  },
});