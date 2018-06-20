import intro from './content/intro-components/intro-component.vue'
import home from './content/adam-components/skill-component.vue'
import about from './content/about-components/about-component.vue'
import portfolio from './content/portfolio-components/portfolio-component.vue'

export const metaText = {
  author: 'Adam Killander',
  title: 'Frontend utvecklarportfolio för Adam Killander',
  description: 'Det här är min Frontend utvecklarportfolio där jag har lite text om mig själv & även några hemsidor/funktioner jag har byggt.',
  img: '',
}
export const metaText2 = {
  author: 'Adam Killander',
  title: 'En översikt av mitt arbetsliv',
  description: 'Jag arbetar som SEO-specialist & Frontend utvecklare. Det började dock med att jag jobbade som first-line support där jag fick intresse för Frontend utveckling.',
  img: '',
}
export const metaText3 = {
  author: 'Adam Killander',
  title: 'Om mig som person',
  description: 'När jag inte bygger funktioner & lär mig nya ramverk så gillar jag bland annat att träna, spela spel & kolla film.',
  img: '',
}
export const metaText4 = {
  author: 'Adam Killander',
  title: 'Frontend utvecklarportfolio',
  description: 'Här är min Frontend utvecklarportfolio där jag har tagit fram hemsidor, funktioner & wireframes jag har codat.',
  img: '',
}

export const routes = [
  { path: '/', 
    name: 'Intro', 
    component: intro ,
    meta: {
      title: metaText.title,
      metaTags: [ 
        {charset: 'utf-8' },
        {name: 'description', content: metaText.description },
        // Og
        {property: 'og:title', content: metaText.title },
        {property: 'og:site_name', content: metaText.author },
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://adamkillander.se'},
        {property: 'og:image', content: metaText.img },
        {property: 'og:description', content: metaText.description },
        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://adamkillander.se'},
        {name: 'twitter:title', content: metaText.title},
        {name: 'twitter:description', content: metaText.description },
        {name: 'twitter:creator', content: '@adamkillander96'},
        {name: 'twitter:image:src', content: metaText.img },
        //Google
        {itemprop: 'name', content: metaText.title},
        {itemprop: 'description', content: metaText.description },
        {itemprop: 'image', content: metaText.img }
      ]
    }
  },
  { 
    path: '/oversikt/',
    name: 'Overview', 
    component: home,
    meta: {
      title: metaText2.title,
      metaTags: [ 
        {charset: 'utf-8' },
        {name: 'description', content: metaText2.description },
        // Og
        {property: 'og:title', content: metaText2.title },
        {property: 'og:site_name', content: metaText2.author },
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://adamkillander.se'},
        {property: 'og:image', content: metaText2.img },
        {property: 'og:description', content: metaText2.description },
        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://adamkillander.se'},
        {name: 'twitter:title', content: metaText2.title},
        {name: 'twitter:description', content: metaText2.description },
        {name: 'twitter:creator', content: '@adamkillander96'},
        {name: 'twitter:image:src', content: metaText2.img },
        //Google
        {itemprop: 'name', content: metaText2.title},
        {itemprop: 'description', content: metaText2.description },
        {itemprop: 'image', content: metaText2.img }
      ]
    }
  },
  { 
    path: '/om-mig/', 
    name: 'About me', 
    component: about,
    meta: {
      title: metaText3.title,
      metaTags: [ 
        {charset: 'utf-8' },
        {name: 'description', content: metaText3.description },
        // Og
        {property: 'og:title', content: metaText3.title },
        {property: 'og:site_name', content: metaText3.author },
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://adamkillander.se'},
        {property: 'og:image', content: metaText3.img },
        {property: 'og:description', content: metaText3.description },
        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://adamkillander.se'},
        {name: 'twitter:title', content: metaText3.title},
        {name: 'twitter:description', content: metaText3.description },
        {name: 'twitter:creator', content: '@adamkillander96'},
        {name: 'twitter:image:src', content: metaText3.img },
        //Google
        {itemprop: 'name', content: metaText3.title},
        {itemprop: 'description', content: metaText3.description },
        {itemprop: 'image', content: metaText3.img }
      ]
    }
  },
  {
    path: '/portfolio/', 
    name: 'Portfolio', 
    component: portfolio,
    meta: {
      title: metaText4.title,
      metaTags: [ 
        {charset: 'utf-8' },
        {name: 'description', content: metaText4.description },
        // Og
        {property: 'og:title', content: metaText4.title },
        {property: 'og:site_name', content: metaText4.author },
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://adamkillander.se'},
        {property: 'og:image', content: metaText4.img },
        {property: 'og:description', content: metaText4.description },
        // Twitter card
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: 'https://adamkillander.se'},
        {name: 'twitter:title', content: metaText4.title},
        {name: 'twitter:description', content: metaText4.description },
        {name: 'twitter:creator', content: '@adamkillander96'},
        {name: 'twitter:image:src', content: metaText4.img },
        //Google
        {itemprop: 'name', content: metaText4.title},
        {itemprop: 'description', content: metaText4.description },
        {itemprop: 'image', content: metaText4.img }
      ]
    }
  }
]