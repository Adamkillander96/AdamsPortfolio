<template>

<b-container fluid id="skillcomponent">
  <b-row class="bg-coding">
    <b-col lg="4" class="p-0">
      <b-link class="transparent-btn px-3 w-100 h-100 border-0 bg-transparent" to="/SEO" exact></b-link>
      <SkillSEO ></SkillSEO>
    </b-col>
    <b-col lg="4" class="p-0">
      <b-link class="transparent-btn px-3 w-100 h-100 border-0 bg-transparent" to="/Web" exact></b-link>
      <SkillWeb></SkillWeb>
    </b-col>
    <b-col lg="4" class="p-0">
      <SkillSupport></SkillSupport> 
    </b-col>
  </b-row>
  <transition name="component-fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <GridComponent></GridComponent>
</b-container>

</template>

<script>

import GridComponent from './skill-grid-component.vue'
import SkillSEO from './qua-components/skill-component-seo.vue'
import SkillWeb from './qua-components/skill-component-web.vue'
import SkillSupport from './qua-components/skill-component-support.vue'

export default {
  name: 'skill-overview',
  components: {
      GridComponent,
      SkillSEO,
      SkillWeb,
      SkillSupport
  },
  data: function () {
    return { 
      }
    }
}

</script>