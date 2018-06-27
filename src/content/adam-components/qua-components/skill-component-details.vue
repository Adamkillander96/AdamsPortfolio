<template>

<b-card body-class="p-0 rounded-0" class="text-center border-0">
  <b-list-group class="text-left"
  v-for="skillsDetails in skillsDetails" 
  v-bind:key="skillsDetails.id" 
  v-bind:id="skillsDetails.id" 
  v-bind:class="{ 'd-block': skillsDetails.id == this }"
  :currentTab.sync="currentTab"
  >
    <b-list-group-item v-bind:class="skillsDetails.color" class="border-0 rounded-0 text-light" target="_blank" v-bind:href="skillsDetails.link"><i class="far fa-building fa-fw"></i> {{skillsDetails.title}} - <em>{{skillsDetails.company}}</em></b-list-group-item>
    <b-list-group-item v-bind:class="skillsDetails.color" class="border-0 border-dark text-light"><i class="far fa-calendar-alt fa-fw"></i> {{skillsDetails.time}} - {{ $t('today') }}</b-list-group-item>
    <b-list-group-item class="border-0" variant="light"><i class="fas fa-info fa-fw"></i> {{skillsDetails.text}}</b-list-group-item>
  </b-list-group>
</b-card>

</template>

<script>

export default {
  name: 'skill-details',
  props: ['seo'],
  data() {
    return {
      skillsDetails: [
        { title: this.$t('skillSeoTitle'), 
          text: this.$t('skillSeoText'), 
          name: 'seo', 
          id: 'seo', 
          color: 'bg-success', 
          company: 'OnMedia Group', 
          link: 'https://www.onmediagroup.se', 
          time: '2018-04-23'
        },
        { title: this.$t('skillWebbTitle'), 
          text: this.$t('skillWebbText'), 
          name: 'web', 
          id: 'web', 
          color: 'bg-danger', 
          company: 'Hobby', 
          link: '', 
          time: '2016-08-01'
        },
        { title: this.$t('skillSupportTitle'), 
          text: this.$t('skillSupportText'), 
          name: 'sup',  
          id: 'sup', 
          color: 'bg-primary', 
          company: 'QuickSearch', 
          link: 'https://www1.quicksearch.se/',  
          time: '2016-01-15 - 2018-04-06', 
          nps: `<h4 class="text-primary">{{ $t('myNPS') }} <i class="fas fa-tachometer-alt"></i></h4><span class="text-dark">{{ $t('desNPS') }}</span><div class="p-4 text-dark position-relative" ><span id="npsvalue" class="nps-value">71</span></div>`},
      ]
    }
  }
}

</script>