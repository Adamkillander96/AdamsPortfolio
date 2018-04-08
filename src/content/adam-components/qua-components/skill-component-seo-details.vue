<template>

<b-card body-class="p-0 rounded-0" class="text-center border-0">
  <b-list-group class="text-left">
    <b-list-group-item class="adam-green border-0 rounded-0 text-light" target="_blank" href="https://www.onmediagroup.se"><i class="far fa-building fa-fw"></i> {{ $t('skillSeoTitle') }} - <em>OnMedia</em></b-list-group-item>
    <b-list-group-item class="adam-green-2nd border-0 text-light"><i class="far fa-calendar-alt fa-fw"></i> 2018-04-23 - {{ $t('today') }}</b-list-group-item>
    <b-list-group-item class="border-0" variant="light"><i class="fas fa-info fa-fw"></i> {{ $t('skillSeoText') }}</b-list-group-item>
  </b-list-group>
</b-card>

</template>

<script>

export default {
  name: 'skill-details-seo',
}

</script>