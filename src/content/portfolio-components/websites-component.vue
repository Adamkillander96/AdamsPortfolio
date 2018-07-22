<template>
<b-row>
  <b-col md="4" class="p-4"

    v-for="website in website" 
    v-bind:key="website.id">
    <h3 v-t="website.content[0]"></h3>
    <span v-t="website.content[1]"></span>
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
        { content: this.$t('website1'), thumbnail: 'ex1' },
        { content: this.$t('website2'), thumbnail: 'ex2' },
        { content: this.$t('website3'), thumbnail: 'ex3' },
      ] 
    }
  },
  i18n: {
    messages: {
      en: { 
        website1: [ 'Title 1', 'Description 1' ],
        website2: [ 'Title 2', 'Description 2' ],
        website3: [ 'Title 3', 'Description 3' ],
      },
      sv: { 
        website1: [ 'Titel 1', 'Beskrivning 1' ],
        website2: [ 'Titel 2', 'Beskrivning 2' ],
        website3: [ 'Titel 3', 'Beskrivning 3' ],
      }
    }
  }
}
</script>