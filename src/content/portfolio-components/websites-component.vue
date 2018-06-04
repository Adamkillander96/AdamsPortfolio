<template>
<b-row>
  <b-col md="4" class="p-4"
    v-for="website in website" 
    v-bind:key="website.id"
    v-bind:title="website.title"
    v-bind:description="website.description"
    v-bind:thumbnail="website.thumbnail">
    <h3>{{website.title}}</h3>
    <span>{{website.description}}</span>
    <img v-bind:src="website.thumbnail">
  </b-col>
</b-row>
  
</template>

<script>

export default {
  name: 'website-template',
  data() {
    return {
      website: [
        { title: 'Example 1', description: 'text1', thumbnail: 'ex1' }, 
        { title: 'Example 2', description: 'text2', thumbnail: 'ex2' }, 
        { title: 'Example 3', description: 'text3', thumbnail: 'ex3' }, 
      ]
    }
  },
  i18n: {
    messages: {
      en: { 
        title1: 'Internal links',
        description1: 'External links', 
      },
      se: { 
        title1: 'Interna länkar',
        description1: 'Externa länkar',
      }
    }
  }
}

</script>