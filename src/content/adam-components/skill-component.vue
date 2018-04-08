<template>

<b-container fluid id="skillcomponent">
  <b-row class="bg-coding">
    <b-col lg="4" class="p-0">
      <b-link class="transparent-btn px-3 w-100 h-100 border-0 bg-transparent" v-b-modal.skillModal exact></b-link>
      <SkillSEO></SkillSEO>
    </b-col>
    <b-col lg="4" class="p-0">
      <b-link class="transparent-btn px-3 w-100 h-100 border-0 bg-transparent" v-b-modal.skillModal exact></b-link>
      <SkillWeb></SkillWeb>
    </b-col>
    <b-col lg="4" class="p-0">
      <b-link class="transparent-btn px-3 w-100 h-100 border-0 bg-transparent" v-b-modal.skillModal exact></b-link>
      <SkillSupport></SkillSupport> 
    </b-col>
  </b-row>
  <transition name="component-fade" mode="out-in">
    <b-modal ref="thymodal" id="skillModal" body-class="p-0" class="p-0" centered hide-header hide-footer>
      <b-tabs nav-class="nav-fill" pills>
        <b-tab title-link-class="adam-green-text" title="first" active>
          <SkillSEODetails></SkillSEODetails>
        </b-tab>
        <b-tab active-class="adam-red" title-link-class="adam-red-text" title="second">
          <SkillWebDetails></SkillWebDetails>
        </b-tab>
        <b-tab title-link-class="adam-blue-text" title="disabled">
          <SkillSupportDetails></SkillSupportDetails>
        </b-tab>
      </b-tabs>
      <b-btn class="border-0" @click="hideModal" exact>Close</b-btn>
    </b-modal>
  </transition>
  <GridComponent></GridComponent>
</b-container>

</template>

<script>

import GridComponent from './skill-grid-component.vue'
import SkillSEO from './qua-components/skill-component-seo.vue'
import SkillWeb from './qua-components/skill-component-web.vue'
import SkillSupport from './qua-components/skill-component-support.vue'

import SkillSEODetails from './qua-components/skill-component-seo-details.vue'
import SkillWebDetails from './qua-components/skill-component-web-details.vue'
import SkillSupportDetails from './qua-components/skill-component-support-details.vue'

export default {
  name: 'skill-overview',
  components: {
      GridComponent,
      SkillSEO,
      SkillWeb,
      SkillSupport,
      SkillSEODetails,
      SkillWebDetails,
      SkillSupportDetails
  },
  methods: {
    hideModal () {
      this.$refs.thymodal.hide()
    }
  }
}

</script>