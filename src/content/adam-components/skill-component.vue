<template>

<b-container fluid id="skillcomponent">
  <b-row class="bg-coding">
    <b-col lg="4" class="p-0">
      <b-link class="transparent-btn px-3 w-100 h-100 border-0 bg-transparent" v-b-modal.skillModal v-on:click="isActive = true" exact></b-link>
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
    <b-modal ref="thymodal" id="skillModal" centered hide-header hide-footer>
      <SkillSEODetails v-if="isActive"></SkillSEODetails>
      <SkillWebDetails></SkillWebDetails>
      <SkillSupportDetails></SkillSupportDetails>
      <b-btn class="border-0" @click="hideModal" exact>Close</b-btn>
    </b-modal>
  </transition>
  <GridComponent></GridComponent>
</b-container>

</template>

<style>
h5.modal-title {color:black;}
</style>

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
  data() {
    return {
      display: true,
    }
  },
  computed:{
  	active(){
    	return this._uid == this.$root.active
    }
  },
  created(){
  	addEventListener('click', ()=> this.active = false)
  },
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