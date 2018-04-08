<template>
<b-card body-class="p-0" class="text-center border-0">
  <b-list-group class="text-left">
    <b-list-group-item class="adam-blue border-0 rounded-0 text-light" target="_blank" href="https://www1.quicksearch.se/"><i class="far fa-building fa-fw"></i> {{ $t('skillSupportTitle') }} - <em>Quicksearch</em></b-list-group-item>
    <b-list-group-item class="adam-blue border-0 text-light"><i class="far fa-calendar-alt fa-fw"></i>2016-01-15 - 2018-04-06</b-list-group-item>
    <b-list-group-item class="border-0" variant="light"><i class="fas fa-info fa-fw"></i> {{ $t('skillSupportText') }}</b-list-group-item>
    <feedbackComponent></feedbackComponent>
  </b-list-group>
</b-card>
</template>

<script>
import feedbackComponent from './feedback-component.vue'

export default {
  name: 'skill-overview-web-details',
  components: {
    feedbackComponent
  }
}

</script>