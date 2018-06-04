<template>

  <b-col md="4" v-if="website">
    <h3>{{website.title}}</h3>
    <span>{{website.description}}</span>
    <img v-bind:src="website.thumbnail">
  </b-col>
  
</template>

<script>

export default {
  name: 'website-template',
  props: ['website']
}

</script>