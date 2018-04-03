<template>

<b-card class="p-0 text-center border-0">
  <h3 class="card-text">{{ $t('skillWebbTitle') }} <i class="fas fa-paint-brush"></i></h3>
  <b-list-group class="text-left">
    <b-list-group-item class="adam-red border-0 text-light"><i class="far fa-building fa-fw"></i> OnMedia</b-list-group-item>
    <b-list-group-item class="adam-red border-0 text-light"><i class="far fa-calendar-alt fa-fw"></i> Hobby {{ $t('since') }} 2016-08-01</b-list-group-item>
    <b-list-group-item class="border-0" variant="light" href="#" ><i class="fas fa-info fa-fw"></i> {{ $t('skillWebbText') }}</b-list-group-item>
  </b-list-group>
</b-card>

</template>

<script>

export default {
  name: 'skill-overview-web-details',
}

</script>