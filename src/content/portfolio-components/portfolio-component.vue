<template>

<b-container fluid id="Portfolio-Component">
  <b-row class="wired-bg">
    <b-col class="p-4 text-center">
      <h1>My websites, prototypes & fiddles</h1>
      <span clsas="lead">text</span>
    </b-col>
  </b-row>
  <websiteComponent />
  <githubCommits />
</b-container>

</template>

<script>
import websiteComponent from './websites-component.vue'
import githubCommits from './update-component.vue'

export default {
  name: 'portfolio-details',
  components: {
    websiteComponent,
    githubCommits
  },
}

</script>
