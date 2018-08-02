import intro from './content/intro-components/intro-component.vue'
import home from './content/adam-components/skill-component.vue'
import about from './content/about-components/about-component.vue'
import portfolio from './content/portfolio-components/portfolio-component.vue'

export const metaText = {
    author: 'Adam Killander',
    title: [
      'Frontend utvecklarportfolio för Adam Killander', 
      'En översikt av mitt arbetsliv | Adam Killander', 
      'Om mig som person | Adam Killander',
      'Frontend utvecklarportfolio | Adam Killander'
    ],
    description: [
      'Det här är min Frontend utvecklarportfolio där jag har lite text om mig själv & även några hemsidor/funktioner jag har byggt.', 
      'Jag arbetar som SEO-specialist & Frontend utvecklare. Det började dock med att jag jobbade som first-line support där jag fick intresse för Frontend utveckling.',
      'När jag inte bygger funktioner & lär mig nya ramverk så gillar jag bland annat att träna, spela spel & kolla film.',
      'Här är min Frontend utvecklarportfolio där jag har tagit fram hemsidor, funktioner & wireframes jag har codat.'
    ],
    img: ['','','',''],
}

export const routes = [
  { path: '/overview', redirect: '/oversikt' },
  { path: '/översikt', redirect: '/oversikt' },
  { path: '/about-me', redirect: '/om-mig' },
  { path: '/', 
    name: 'Intro', 
    component: intro ,
    meta: {
      title: metaText.title[0],
      metaTags: [ 
        {name: 'description', content: metaText.description[0]},
        // OpenGraph
        {property: 'og:title', content: metaText.title[0]},
        {property: 'og:site_name', content: metaText.author},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://adamkillander.se'},
        {property: 'og:image', content: metaText.img[0]},
        {property: 'og:description', content: metaText.description[0]},
        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://adamkillander.se'},
        {name: 'twitter:title', content: metaText.title[0]},
        {name: 'twitter:description', content: metaText.description[0]},
        {name: 'twitter:creator', content: '@adamkillander96'},
        {name: 'twitter:image:src', content: metaText.img[0]},
        // Google
        {itemprop: 'name', content: metaText.title[0]},
        {itemprop: 'description', content: metaText.description[0]},
        {itemprop: 'image', content: metaText.img[0]}
      ]
    }
  },
  { 
    path: '/oversikt/',
    name: 'Overview', 
    component: home,
    meta: {
      title: metaText.title[1],
      metaTags: [ 
        {name: 'description', content: metaText.description[1]},
        // OpenGraph
        {property: 'og:title', content: metaText.title[1]},
        {property: 'og:site_name', content: metaText.author},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://adamkillander.se'},
        {property: 'og:image', content: metaText.img[1]},
        {property: 'og:description', content: metaText.description[1]},
        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://adamkillander.se'},
        {name: 'twitter:title', content: metaText.title[1]},
        {name: 'twitter:description', content: metaText.description[1]},
        {name: 'twitter:creator', content: '@adamkillander96'},
        {name: 'twitter:image:src', content: metaText.img[1]},
        // Google
        {itemprop: 'name', content: metaText.title[1]},
        {itemprop: 'description', content: metaText.description[1]},
        {itemprop: 'image', content: metaText.img[1]}
      ]
    }
  },
  { 
    path: '/om-mig/', 
    name: 'About me', 
    component: about,
    meta: {
      title: metaText.title[2],
      metaTags: [ 
        {name: 'description', content: metaText.description[2]},
        // OpenGraph
        {property: 'og:title', content: metaText.title[2]},
        {property: 'og:site_name', content: metaText.author},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://adamkillander.se'},
        {property: 'og:image', content: metaText.img[2] },
        {property: 'og:description', content: metaText.description[2]},
        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://adamkillander.se'},
        {name: 'twitter:title', content: metaText.title[2]},
        {name: 'twitter:description', content: metaText.description[2]},
        {name: 'twitter:creator', content: '@adamkillander96'},
        {name: 'twitter:image:src', content: metaText.img[2]},
        // Google
        {itemprop: 'name', content: metaText.title[2]},
        {itemprop: 'description', content: metaText.description[2]},
        {itemprop: 'image', content: metaText.img[2]}
      ]
    }
  },
  {
    path: '/portfolio/', 
    name: 'Portfolio', 
    component: portfolio,
    meta: {
      title: metaText.title[3],
      metaTags: [ 
        {name: 'description', content: metaText.description[3]},
        // OpenGraph
        {property: 'og:title', content: metaText.title[3]},
        {property: 'og:site_name', content: metaText.author},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://adamkillander.se'},
        {property: 'og:image', content: metaText.img[3]},
        {property: 'og:description', content: metaText.description[3]},
        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://adamkillander.se'},
        {name: 'twitter:title', content: metaText.title[3]},
        {name: 'twitter:description', content: metaText.description[3]},
        {name: 'twitter:creator', content: '@adamkillander96'},
        {name: 'twitter:image:src', content: metaText.img[3]},
        // Google
        {itemprop: 'name', content: metaText.title[3]},
        {itemprop: 'description', content: metaText.description[3]},
        {itemprop: 'image', content: metaText.img[3]}
      ]
    }
  }
]