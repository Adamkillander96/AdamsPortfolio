<template>

<b-container fluid class="p-5 h-100">
    <b-row id="introSection">
      <b-col sm="12" md="6" align-self="center" class="text-center">
        <h1 class="display-3">{{ $t('appHead') }}</h1>
        <p class="lead">{{ $t('appDescr') }}</p>
      </b-col>
      <b-col sm="12" md="6" align-self="center" class="text-center">
        <i class="fas fa-user-astronaut fa-10x"></i>
        <div class="floaty-text position-absolute">
          <vue-typer class="d-block text-white" v-bind:text="$t('helloMsg')" :pre-erase-delay='9999999999'></vue-typer>
        </div>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>

// ES6
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
        helloMsg2: 'Second',
      },  
      se: { 
        appHead: 'Adams Portfolio',
        appDescr: 'En enkel SPA för min portfolio',
        helloMsg: 'Hejsan, mitt namn är Adam och jag jobbar som SEO-specialist och webbutvecklare i Uppsala.',
        helloMsg2: 'Andra',
      }
    }
  }
}

</script>
