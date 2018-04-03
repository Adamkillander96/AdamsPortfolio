<template>

<b-card class="p-0 text-center border-0">
  <h3 class="card-text">{{ $t('skillSeoTitle') }} <i class="far fa-chart-bar"></i></h3>
  <b-list-group class="text-left">
    <b-list-group-item class="adam-green border-0 text-light"><i class="far fa-building fa-fw"></i> OnMedia</b-list-group-item>
    <b-list-group-item class="adam-green border-0 text-light"><i class="far fa-calendar-alt fa-fw"></i> 2018-05-23 - {{ $t('today') }}</b-list-group-item>
    <b-list-group-item class="border-0" variant="light" href="#" ><i class="fas fa-info fa-fw"></i> {{ $t('skillSeoText') }}</b-list-group-item>
  </b-list-group>
</b-card>

</template>

<script>

export default {
  name: 'skill-details-seo',
}

</script>