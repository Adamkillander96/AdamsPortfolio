<template>
<b-row>
  <b-col>
    <b-card class="p-0 text-center border-0">
      <b-list-group class="text-left">
        <b-list-group-item class="adam-green border-0 text-light" target="_blank" href="https://www.onmediagroup.se"><i class="far fa-building fa-fw"></i> {{ $t('skillSeoTitle') }} - OnMedia</b-list-group-item>
        <b-list-group-item class="adam-green border-0 text-light"><i class="far fa-calendar-alt fa-fw"></i> 2018-04-23 - {{ $t('today') }}</b-list-group-item>
        <b-list-group-item class="border-0" variant="light" href="#" ><i class="fas fa-info fa-fw"></i> {{ $t('skillSeoText') }}</b-list-group-item>
      </b-list-group>
    </b-card>
  </b-col>
</b-row>

</template>

<script>

export default {
  name: 'skill-details-seo',
}

</script>