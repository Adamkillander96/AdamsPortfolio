<template>

<b-container fluid id="skillcomponent">
  <b-row class="wired-bg py-5">
    <b-col md="12" lg="4" class="p-0">
      <b-link class="transparent-btn px-3 w-100 h-100 border-0 bg-transparent" v-b-modal.skillModal v-on:click="currentTab = 'SEO'"></b-link>
      <SkillSEO></SkillSEO>
    </b-col>
    <b-col sm="6" md="6" lg="4" class="p-0">
      <b-link class="transparent-btn px-3 w-100 h-100 border-0 bg-transparent" v-b-modal.skillModal v-on:click="currentTab = 'WEB'"></b-link>
      <SkillWeb></SkillWeb>
    </b-col>
    <b-col sm="6" md="6" lg="4" class="p-0">
      <b-link class="transparent-btn px-3 w-100 h-100 border-0 bg-transparent" v-b-modal.skillModal v-on:click="currentTab = 'SUP'"></b-link>
      <SkillSupport></SkillSupport> 
    </b-col>
  </b-row>
  <transition name="component-fade" mode="out-in">
    <b-modal ref="thymodal" id="skillModal" body-class="p-0" class="p-0" hide-header hide-footer>
      <div class="bg-dark nav nav-justified">
        <a 
        v-html="tab.icon" 
        v-for="tab in tabs" 
        v-bind:key="tab.name" 
        v-bind:id="tab.id"
        class="p-3 nav-item" 
        v-bind:class="[{ 
          'active': tab.name === currentTab, 
          'adam-green': tab.id === 'seoTab' && currentTab === 'SEO',
          'adam-red'  : tab.id === 'webTab' && currentTab === 'WEB',
          'adam-blue' : tab.id === 'supTab' && currentTab === 'SUP'
        }]" 
        v-on:click="currentTab = tab.name">
        </a>
      </div>
      <component v-bind:is="currentTabComponent"></component>
      <div class="p-2 text-right">
        <b-btn class="border-0" @click="hideModal" exact>Close</b-btn>
      </div>
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

import thyComponent from './skill-component.vue'

export default {
  name: 'skill-overview',
  data () {
    return {
      currentTab: 'SEO',
      tabs: [
        { name: 'SEO', id: 'seoTab', icon: '<i class="far fa-chart-bar fa-3x"></i>' }, 
        { name: 'WEB', id: 'webTab', icon: '<i class="fas fa-paint-brush fa-3x"></i>' }, 
        { name: 'SUP', id: 'supTab', icon: '<i class="fas fa-rocket fa-3x"></i>' }, 
      ]
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  components: {
      GridComponent,
      SkillSEO,
      SkillWeb,
      SkillSupport,
      'tab-seo': SkillSEODetails,
      'tab-web': SkillWebDetails,
      'tab-sup': SkillSupportDetails
  },
  methods: {
    hideModal () {
      this.$refs.thymodal.hide()
    }
  },
  i18n: {
    messages: {
      en: { 
        seo: 'SEO Specialist',
        web: 'Web developer',
        sup: 'First-line Support',
        },
      se: { 
        seo: 'SEO Specialist',
        web: 'Webbutvecklare',
        sup: 'First-line Support',
      }
    }
  }
}

</script>