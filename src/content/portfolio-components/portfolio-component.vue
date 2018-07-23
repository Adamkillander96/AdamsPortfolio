<template>

<b-container fluid id="Portfolio-Component">
  <b-row class="py-5 text-center">
    <b-col md="12">
      <h1>{{ $t('portfolioH1') }}</h1>
      <p class="lead my-4">{{ $t('portfolioDesc') }}</p>
    </b-col>
  </b-row>
  <b-container class="pb-5">
    <websiteComponent />
  </b-container>
  <b-container class="pb-5">
    <githubCommits />
  </b-container>
</b-container>

</template>

<script>
import websiteComponent from './websites-component.vue'
import githubCommits from './update-component.vue'

export default {
  name: 'portfolio-details',
  data() {
    return {
    }
  },
  components: {
    websiteComponent,
    githubCommits
  },
}

</script>
