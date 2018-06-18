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
  data() {
    return {
      author: 'Adam Killander',
      title: 'Frontend utvecklarportfolio',
      description: 'Här är min Frontend utvecklarportfolio där jag har tagit fram hemsidor, funktioner & wireframes jag har codat.',
      img: '',
      intro: true,
      activeItem: 'se',
    }
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {vmid: 'description', name: 'description', content: this.description },
        // Og
        {vmid: 'og:title', property: 'og:title', content: this.title },
        {vmid: 'og:site_name', property: 'og:site_name', content: this.author },
        {vmid: 'og:type', property: 'og:type', content: 'website'},
        {vmid: 'og:url', property: 'og:url', content: 'https://adamkillander.se/portfolio/'},
        {vmid: 'og:image', property: 'og:image', content: this.img },
        {vmid: 'og:description', property: 'og:description', content: this.description },
        // Twitter card
        {vmid: 'twitter:card', name: 'twitter:card', content: 'summary'},
        {vmid: 'twitter:site', name: 'twitter:site', content: 'https://adamkillander.se/portfolio/'},
        {vmid: 'twitter:title', name: 'twitter:title', content: this.title},
        {vmid: 'twitter:description', name: 'twitter:description', content: this.description },
        {vmid: 'twitter:creator', name: 'twitter:creator', content: '@adamkillander96'},
        {vmid: 'twitter:image:src', name: 'twitter:image:src', content: this.img },
        //Google
        {vmid: 'name', itemprop: 'name', content: this.title},
        {vmid: 'description', itemprop: 'description', content: this.description },
        {vmid: 'image', itemprop: 'image', content: this.img }
      ],
      links: [
        {rel: 'canonical', href: 'https://adamkillander.se'}
      ],
    }
  },
  components: {
    websiteComponent,
    githubCommits
  },
}

</script>
