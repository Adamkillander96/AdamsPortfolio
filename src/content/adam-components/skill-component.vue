<template>

<b-container fluid id="skillcomponent">
  <b-row class="p-4 wired-bg text-center">
    <b-col md="12"><h1>{{ $t('overviewH1') }}</h1></b-col>
  </b-row>
  <b-row class="p-0 text-center">
    <b-col sm="12" class="p-0">
      <h2 class="text-light py-4">Languages, SAAS, Softwares, Frameworks & libraries</h2>
      <p class="lead">Klicka på </p>
    </b-col>
  </b-row>
  <SkillwModal class="wired-bg py-5"/>
  <GridComponent></GridComponent>
</b-container>

</template>

<script>

import GridComponent from './skill-grid-component.vue'

import SkillwModal from './qua-components/skill-component.vue'

export default {
  name: 'skill-overview',
  components: {
    GridComponent,
    SkillwModal
  }
}

</script>