<template>

<div id="app-body" class="bodyComponent">
  <b-container fluid class="p-5">
    <b-row class="p-5">
      <b-col lg="6" class="text-right">
        <h1 class="display-3">{{ $t('appHead') }}</h1>
        <p class="lead">{{ $t('appDescr') }}</p>
      </b-col>
      <b-col lg="6">
        <i class="fas fa-desktop fa-5x"></i>
      </b-col>
    </b-row>
  </b-container>
  <transition name="component-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>

export default {
  name: 'app-body',
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
