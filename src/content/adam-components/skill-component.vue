<template>

<b-container fluid id="skillcomponent">
  <b-row class="py-5 text-center">
    <b-col md="12">
      <h1>{{ $t('overviewH1') }}</h1>
      <p class="lead my-4">{{ $t('overviewDesc') }}</p>
    </b-col>
  </b-row>
  <SkillwModal/>
  <GridComponent/>
</b-container>

</template>

<script>
import GridComponent from './qua-components/grid-overview.vue'
import SkillwModal from './qua-components/skill-modal.vue'

export default {
  name: 'skill-overview',
  components: {
    GridComponent,
    SkillwModal
  }
}
</script>
