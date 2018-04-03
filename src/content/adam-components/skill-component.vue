<template>

<b-container fluid id="skillcomponent">
  <b-row class="bg-coding">
    <b-col lg="4" class="p-0">
      <button class="transparent-btn w-100 h-100 border-0 bg-transparent" v-on:click="SEO = !SEO"></button>
      <transition name="component-fade" mode="out-in">
        <SkillSEO v-if="SEO"></SkillSEO>
        <SkillSEODetails v-else></SkillSEODetails>
      </transition>
    </b-col>
    <b-col lg="4" class="p-0">
      <button class="transparent-btn w-100 h-100 border-0 bg-transparent" v-on:click="Web = !Web"></button>
      <transition name="component-fade" mode="out-in">
        <SkillWeb v-if="Web"></SkillWeb>
        <SkillWebDetails v-else></SkillWebDetails>
      </transition>
    </b-col>
    <b-col lg="4" class="p-0">
      <SkillSupport></SkillSupport> 
    </b-col>
  </b-row>
  <GridComponent></GridComponent>
</b-container>

</template>

<script>

import GridComponent from './skill-grid-component.vue'
import SkillSEO from './skill-component-seo.vue'
import SkillSEODetails from './skill-component-seo-details.vue'
import SkillWeb from './skill-component-web.vue'
import SkillWebDetails from './skill-component-web-details.vue'
import SkillSupport from './skill-component-support.vue'

export default {
  name: 'skill-overview',
  components: {
      GridComponent,
      SkillSEO,
      SkillSEODetails,
      SkillWeb,
      SkillWebDetails,
      SkillSupport
  },
  data: function () {
    return { 
      SEO: true,
      Web: true,
      Sup: true
      }
    }
}

</script>