<template>

<b-row>
  <b-col md="12" class="hero-row p-0" v-for="(gridOverviews, index) in gridOverviews" v-bind:key="gridOverviews.id" v-bind:id="gridOverviews.id">
    <b-row class="m-0 text-center text-light">
      <b-col md="6" :class="[gridOverviews.lightColor, {'order-md-last': index % 2 === 0 }]" class="py-5">
        <span class="d-flex h-100 align-items-center justify-content-center align-self-center" v-html="gridOverviews.icon"></span>
      </b-col>
      <b-col md="6" :class="gridOverviews.color" class="py-5">
        <h2 class="display-4" v-html="gridOverviews.title"></h2>
        <span class="lead">{{ gridOverviews.description }}</span>
      </b-col>
    </b-row>
    <b-row class="m-0 d-none d-md-block">
      <b-col cols="12"
        v-text="gridOverviews.text"
        :class="gridOverviews.textColor"
        class="text-center p-2 p-md-5 bg-dark fa-2x">
      </b-col>
    </b-row>
  </b-col>
</b-row>

</template>

<script>

export default {
  name: 'skill-grid-component',
  data () {
    return {
      gridOverviews: [
        { title: this.$t('gridSkillTitle1'), description: this.$t('gridSkillDescr1'), text: this.$t('gridSkillText1'), color: 'bg-primary', lightColor: 'bg-light-primary developer', textColor: 'text-primary', icon: '<span class="fa-layers fa-10x fa-fw"><i class="fal fa-desktop"></i><i class="fa-inverse fal fa-cogs" data-fa-transform="shrink-10 up-2" ></i></span>'},
        { title: this.$t('gridSkillTitle2'), description: this.$t('gridSkillDescr2'), text: this.$t('gridSkillText2'), color: 'bg-pinky', lightColor: 'bg-light-pinky code', textColor: 'text-pinky', icon: '<i class="fal fa-code fa-8x fa-fw"></i>'},
        { title: this.$t('gridSkillTitle3'), description: this.$t('gridSkillDescr3'), text: this.$t('gridSkillText3'), color: 'bg-warning', lightColor: 'bg-light-warning game', textColor: 'text-warning', icon: '<i class="fal fa-gamepad fa-8x fa-fw"></i>'},
        { title: this.$t('gridSkillTitle4'), description: this.$t('gridSkillDescr4'), text: this.$t('gridSkillText4'), color: 'bg-success', lightColor: 'bg-light-success analys', textColor: 'text-success', icon: '<i class="fal fa-chart-pie fa-8x fa-fw"></i>'},
      ],
      icons: [
        { icon: '<i class="fab fa-html5 fa-fw h-100"></i>' }, 
        { icon: '<i class="fab fa-css3-alt fa-fw h-100"></i>' }, 
        { icon: '<i class="fab fa-sass fa-fw h-100"></i>' },  
        { icon: '<i class="fab fa-js-square fa-fw h-100"></i>' },   
        { icon: '<i class="fab fa-vuejs fa-fw h-100"></i>' },  
        { icon: '<i class="fab fa-angular fa-fw h-100"></i>' },  
        { icon: '<i class="fab fa-node fa-fw h-100"></i>' },  
        { icon: 'Bootstrap 4' },  
        { icon: '<i class="fab fa-npm fa-fw h-100"></i>' },  
        { icon: '<i class="fab fa-wordpress fa-fw h-100"></i>' },  
        { icon: '<i class="fab fa-chrome fa-fw h-100"></i>' },  
        { icon: '<i class="fab fa-hotjar fa-fw h-100"></i>' },  
      ]
    }
  },
  i18n: {
    messages: {
      en: { 
          gridSkillTitle1: '<span class="d-block m-0 h6">Passion for </span>Frontend development',
          gridSkillDescr1: 'I love nice layout & neat functions!',
          gridSkillText1 : 'My preferred framworks/tools are Vue.js, Bootstrap 4, NPM & jQuery.',
          gridSkillTitle2: 'Coding',
          gridSkillDescr2: 'Easy to read & manageable code is my bread & butter',
          gridSkillText2 : 'The most enjoyable syntaxes are Vue.js and SASS because of the fancy highlighters!',
          gridSkillTitle3: 'Couch potato',
          gridSkillDescr3: 'I play all the FPS games!',
          gridSkillText3 : 'My favorite games are Mount & Blade: Warband, Team Fortress 2 & Cities: Skylines.',
          gridSkillTitle4: 'Analysis',
          gridSkillDescr4: 'Fixed on detail & improvement work',
          gridSkillText4 : 'Using various tools such as Hotjar & Google Analytics are super fun!', },
      sv: {
          gridSkillTitle1: '<span class="d-block m-0 h6">Passion för </span>Frontend utveckling',
          gridSkillDescr1: 'Jag brinner för snygg layout & coola funktioner!',
          gridSkillText1 : 'Mina föredragna ramverk/verktyg är Vue.js, Bootstrap 4, NPM & jQuery.',
          gridSkillTitle2: 'Kodning',
          gridSkillDescr2: 'Lättläst & hanterbar kod är mitt bread & butter',
          gridSkillText2 : 'Syntaxerna jag gillar bäst är Vue.js & SASS på grund av de trevliga färgerna i texteditorerna.',
          gridSkillTitle3: 'Soffpotatis',
          gridSkillDescr3: 'Spelar alla FPS spel!',
          gridSkillText3 : 'Mina favorit spel är Mount & Blade: Warband, Team Fortress 2 & Cities: Skylines.',
          gridSkillTitle4: 'Analys',
          gridSkillDescr4: 'Fixerad på detalj & förbättringsarbete', 
          gridSkillText4 : 'Att använda olika verktyg som Hotjar & Google Analytics är super kul!',
        }
    }
  }
}

</script>