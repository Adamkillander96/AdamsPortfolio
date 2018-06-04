<template>

<b-container fluid id="Portfolio-Component">
  <b-row class="wired-bg">
    <b-col class="p-4 text-center">
      <h1>My websites, prototypes & fiddles</h1>
      <span clsas="lead">text</span>
    </b-col>
  </b-row>
  <b-row>
    <websiteComponent 
      v-for="website in website" 
      v-bind:key="website.id"
      v-bind:title="website.title"
      v-bind:description="website.description"
      v-bind:thumbnail="website.thumbnail">
    </websiteComponent>
  </b-row>
</b-container>

</template>

<script>
import websiteComponent from './websites-component.vue'

export default {
  name: 'portfolio-details',
  components: {
    websiteComponent
  },
  data() {
    return {
      website: [
        { title: 'Example 1', description: 'text1', thumbnail: 'ex1' }, 
        { title: 'Example 2', description: 'text2', thumbnail: 'ex2' }, 
        { title: 'Example 3', description: 'text3', thumbnail: 'ex3' }, 
      ]
    }
  }
}

</script>
