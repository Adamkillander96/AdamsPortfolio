<template>

<b-container fluid class="p-5 h-100">
    <b-row class="introSection">
      <b-col lg="12" align-self="center" class="text-center">
        <h1 class="display-3">{{ $t('appHead') }}</h1>
        <p class="lead">{{ $t('appDescr') }}</p>
        <i class="fas fa-user-astronaut fa-10x"></i>
      </b-col>
      <b-col lg="12" align-self="top" class="text-center">
        <span class="lead">{{$t('helloMsg')}}</span>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>

export default {
  name: 'intro',
  i18n: {
    messages: {
      en: { 
        appHead: 'Adams Portfolio',
        appDescr: 'A simple SPA for my portfolio',
        helloMsg: 'Hi, my name is Adam and I work as an SEO-specialist and frontend developer in Uppsala.',
      },  
      se: { 
        appHead: 'Adams Portfolio',
        appDescr: 'En enkel SPA för min portfolio',
        helloMsg: 'Hejsan, mitt namn är Adam och jag jobbar som SEO-specialist och frontend utvecklare i Uppsala.',
      }
    }
  }
}

</script>
