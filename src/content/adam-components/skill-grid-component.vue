<template>
 <b-row id="skill-grid-component">
  <b-col lg="6" class="p-0" >
   <div class="rounded-0 p-5 text-center text-light">
    <div class="container">
     <h2>{{ $t('gridSkillTitle1') }}</h2>
     <p class="lead">{{ $t('gridSkillDescr1') }}</p>
    </div>
    <div class="">
     <span class="fa-layers fa-10x fa-fw">
      <i class="fas fa-desktop"></i>
      <i class="fa-inverse fas fa-cogs" data-fa-transform="shrink-10 up-2" ></i>
     </span>
    </div>
   </div>
  </b-col>
  <b-col lg="6" class="p-0">
   <div class="rounded-0 p-5 text-center text-light">
    <div class="container">
     <h2>{{ $t('gridSkillTitle2') }}</h2>
     <p class="lead">{{ $t('gridSkillDescr2') }}</p>
    </div>
    <i class="fas fa-code fa-8x"></i>
   </div>
  </b-col>
  <b-col lg="6" class="wired-bg py-2 rounded-right">
    <b-row id="iconsdawg" class="nav nav-fill h-100 h4 p-0 m-0 d-flex align-items-stretch">
      <b-col cols="4"
        v-html="icons.icon" 
        v-for="icons in icons" 
        v-bind:key="icons.name" 
        v-bind:id="icons.id"
        class="text-center">
      </b-col>
    </b-row>
  </b-col>
  <b-col lg="6" class="p-0" >
   <div class="rounded-0 p-5 text-center text-light">
    <div class="container">
     <h2>{{ $t('gridSkillTitle6') }}</h2>
     <p class="lead">{{ $t('gridSkillDescr6') }}</p>
    </div>
    <i class="fas fa-gamepad fa-8x"></i>
   </div>
  </b-col>
  <b-col lg="6" class="p-0">
   <div class="rounded-0 p-5 text-center text-light">
    <div class="container">
     <h2>{{ $t('gridSkillTitle7') }}</h2>
     <p class="lead">{{ $t('gridSkillDescr7') }}</p>
    </div>
    <div class="">
     <span class="fa-layers fa-10x fa-fw">
      <i class="fas fa-search"></i>
      <i class="fa-inverse fas fa-chart-line" data-fa-transform="shrink-12 up-1.5 left-1.5" ></i>
     </span>
    </div>
   </div>
  </b-col>
 </b-row>
</template>

<script>

export default {
  name: 'skill-grid-component',
  data () {
    return {
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
          gridSkillTitle1: 'Passion for frontend development',
          gridSkillDescr1: 'I love nice layout & neat functions!',
          gridSkillTitle2: 'Coding',
          gridSkillDescr2: 'Easy to read & manageable code is my bread & butter',
          gridSkillTitle6: 'Couch potato',
          gridSkillDescr6: 'I play all the FPS games!',
          gridSkillTitle7: 'Analysis',
          gridSkillDescr7: 'Fixed on detail & improvement work', },
      se: {
          gridSkillTitle1: 'Passion för frontend utveckling',
          gridSkillDescr1: 'Jag brinner för snygg layout & coola funktioner!',
          gridSkillTitle2: 'Kodning',
          gridSkillDescr2: 'Lättläst & hanterbar kod är mitt bread & butter',
          gridSkillTitle6: 'Soffpotatis',
          gridSkillDescr6: 'Spelar alla FPS spel!',
          gridSkillTitle7: 'Analys',
          gridSkillDescr7: 'Fixerad på detalj & förbättringsarbete', 
        }
    }
  }
}

</script>