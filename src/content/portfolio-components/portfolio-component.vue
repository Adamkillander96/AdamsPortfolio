<template>

<b-container fluid id="Portfolio-Component">
  <b-row class="py-5 text-center">
    <b-col md="12">
      <h1>{{ $t('portfolioH1') }}</h1>
      <p class="lead my-4">{{ $t('portfolioDesc') }}</p>
    </b-col>
  </b-row>
  <b-container class="pb-5">
    <websites />
  </b-container>
  <b-container class="pb-5">
    <commits />
  </b-container>
</b-container>

</template>

<script>
import websites from './items/fiddles.vue'
import commits from './items/commits.vue'

export default {
  name: 'portfolio-details',
  data() {
    return {
    }
  },
  components: {
    websites,
    commits
  },
}

</script>
