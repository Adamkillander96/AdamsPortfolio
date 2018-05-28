<template>

<b-container fluid class="p-5">
    <b-row>
      <b-col sm="12" md="6" class="text-center">
        <h1 class="display-3">{{ $t('appHead') }}</h1>
        <p class="lead">{{ $t('appDescr') }}</p>
      </b-col>
      <b-col sm="12" md="6" class="text-center">
        <i class="fas fa-user-astronaut fa-5x"></i>
        <vue-typer class="d-block" text='Hejsan, jag är en webbutvecklare & SEO-specialist från Halmstad.'></vue-typer>
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
      },  
      se: { 
        appHead: 'Adams Portfolio',
        appDescr: 'En enkel SPA för min portfolio',
      }
    }
  }
}

</script>
