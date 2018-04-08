<template>
<b-card body-class="p-0" class="text-center border-0">
  <b-list-group class="text-left">
    <b-list-group-item class="adam-red border-0 rounded-0 text-light"><i class="far fa-building fa-fw"></i> {{ $t('skillWebbTitle') }} - <em>Everywhere</em></b-list-group-item>
    <b-list-group-item class="adam-red border-0 text-light"><i class="far fa-calendar-alt fa-fw"></i> Hobby {{ $t('since') }} 2016-08-01</b-list-group-item>
    <b-list-group-item class="border-0" variant="light"><i class="fas fa-info fa-fw"></i> {{ $t('skillWebbText') }}</b-list-group-item>
  </b-list-group>
</b-card>
</template>

<script>

export default {
  name: 'skill-overview-web-details',
}

</script>