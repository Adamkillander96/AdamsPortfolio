<template>
<b-row>
  <b-col>
    <b-card class="p-0 text-center border-0">
      <b-list-group class="text-left">
        <b-list-group-item class="adam-blue border-0 text-light"><i class="far fa-building fa-fw"></i> {{ $t('skillSupportTitle') }} - Quicksearch</b-list-group-item>
        <b-list-group-item class="adam-blue border-0 text-light"><i class="far fa-calendar-alt fa-fw"></i>2016-01-15 - 108-04-06</b-list-group-item>
        <b-list-group-item class="border-0" variant="light" href="#" ><i class="fas fa-info fa-fw"></i> {{ $t('skillSupportText') }}</b-list-group-item>
      </b-list-group>
    </b-card>
  </b-col>
</b-row>

</template>

<script>

export default {
  name: 'skill-overview-web-details',
}

</script>