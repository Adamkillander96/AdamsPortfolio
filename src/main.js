import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import * as VueGoogleMaps from 'vue2-google-maps'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBBwhltghmUqdrK9fgUGaVGHo6Xlw-KrTk',
    libraries: 'places', 
  }
})

import template from './app-template.vue'

import intro from './content/intro-components/intro-component.vue'
import home from './content/adam-components/skill-component.vue'
import about from './content/about-components/about-component.vue'
import portfolio from './content/portfolio-components/portfolio-component.vue'

const routes = [
  { path: '/', 
    name: 'Intro', 
    meta: { title: 'Webbutvecklare & SEO-specialst' }, 
    component: intro,
    },
  { path: '/overview', 
    name: 'Overview', 
    meta: { title: 'Översikt' }, 
    component: home,
    },
  { path: '/about-me', 
    name: 'About me', 
    meta: { title: 'Om Adam' },
    component: about 
  },
  { path: '/portfolio', 
    name: 'Portfolio', 
    meta: { title: 'Adams Portfolio' },
    component: portfolio 
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})


const messages = {
  en: {
    appName: 'Adams Portfolio',
    lang: 'Language',
    
    overview: 'Overview',
    portfolio: 'Portfolio',
    aboutme: 'About me',

    today: 'today',
    since: 'since',

    skillSeoTitle: 'SEO Specialist',
    skillSeoDescr: 'I play by googles rules',
    skillSeoText: 'I started working at OnMedia because I wanted to develop my design and SEO skills. Before OnMedia, I could only build websites, but did not optimize them for Google and think about how users actually perceived the website.',
    
    skillWebbTitle: 'Web developer',
    skillWebbDescr: 'Some solve crosswords, I am learning new frameworks',
    skillWebbText: 'I am a hobby developer',
    
    skillSupportTitle: 'First-line Support',
    skillSupportDescr: 'Nice support both internally and externally',
    skillSupportText: 'Text',
  },
  se: {
    appName: 'Adams Portfolio',
    lang: 'Språk',
    
    overview: 'Översikt',
    portfolio: 'Portfolio',
    aboutme: 'Om mig',

    today: 'idag',
    since: 'sedan',

    skillSeoTitle: 'SEO Specialist',
    skillSeoDescr: 'Jag spelar efter googles regler',
    skillSeoText: 'Jag började jobba på OnMedia för att jag ville utveckla mina design och SEO kunskaper. Innan OnMedia kunde jag bara bygga hemsidor, men inte optimisera för Google och tänka ett steg till i hur användarna faktiskt uppfattade hemsidan. ',
    
    skillWebbTitle: 'Webbutvecklare',
    skillWebbDescr: 'En del löser korsord, jag lär mig nya ramverk',
    skillWebbText: 'Utveckling är min hobby',
    
    skillSupportTitle: 'First-line Support',
    skillSupportDescr: 'Trevligt stöd både internt & externt',
    skillSupportText: 'Text',
  }
}

const i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'se',
  messages,
  silentTranslationWarn: true
})


const app = new Vue({
  i18n,
  el: '#app-content',
  router,
  render: h => h(template)
})