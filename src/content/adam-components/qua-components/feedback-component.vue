<template>
<div class="p-4 text-center">
  <h2 class="adam-blue-text">{{ $t('myNPS') }} <i class="fas fa-tachometer-alt"></i></h2>
  <span class="text-dark">{{ $t('desNPS') }}</span>
  <div class="p-4 text-dark position-relative" >
    <span id="npsvalue" class="nps-value">71</span>
  </div>
</div>
</template>

<script>

export default {
  name: 'feedback-component',
  components: {
  },
  i18n: {
    messages: {
      en: {
        myNPS: 'My NPS value',
        desNPS: 'This is my "Recommendation" value from when I worked at Quicksearch. The lowest value is -100 and the highest is + 100.',
        },
      se: {
        myNPS: 'Mitt NPS värde',
        desNPS: 'Det här är mitt "Rekommendations" värde jag hade när jag jobbade på Quicksearch. Det lägsta värdet är -100 och det bästa är + 100.',
      }
    }
  }
}

</script>
