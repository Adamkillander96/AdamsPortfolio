<template>

<b-container fluid class="p-5 h-100">
    <b-row class="introSection">
      <b-col lg="12" align-self="center" class="text-center">
        <h1 class="display-3">{{ $t('appHead') }}</h1>
        <p class="lead">{{ $t('appDescr') }}</p>
        <i class="fas fa-user-astronaut fa-10x"></i>
      </b-col>
      <b-col lg="12" align-self="top" class="text-center">
        <div class="floaty-text position-absolute w-100">
          <div class="text-center d-inline-block mx-auto">
            <vue-typer class="d-block mb-2" :text="$t('helloMsg')" :repeat='0'></vue-typer>
            <vue-typer class="d-block" :text="[$t('didYouKnow1'), $t('didYouKnow2')]" :pre-type-delay='9000' :pre-erase-delay='6000' :shuffle='true'></vue-typer>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>

import { VueTyper } from 'vue-typer'

export default {
  name: 'intro',
  components: {   
    'vue-typer': VueTyper
  },
  i18n: {
    messages: {
      en: { 
        appHead: 'Adams Portfolio',
        appDescr: 'A simple SPA for my portfolio',
        helloMsg: 'Hi, my name is Adam and I work as an SEO-specialist and web developer in Uppsala.',
        didYouKnow1: 'Have a look at my portfolio by clicking here!',
        didYouKnow2: 'Get to know me a bit better by clicking here!',
      },  
      se: { 
        appHead: 'Adams Portfolio',
        appDescr: 'En enkel SPA för min portfolio',
        helloMsg: 'Hejsan, mitt namn är Adam och jag jobbar som SEO-specialist och webbutvecklare i Uppsala.',
        didYouKnow1: 'Visste du att jag studerade Estetisk fotografi på gymnasiet? Läs mer här.',
        didYouKnow2: 'Visste du att jag började lära mig programmera av misstag? Läs mer här',
      }
    }
  }
}

</script>
