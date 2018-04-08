<template>
<div class="p-4 text-center">
  <h2 class="adam-blue-text">{{ $t('myNPS') }} <i class="fas fa-tachometer-alt"></i></h2>
  <span class="text-dark">{{ $t('desNPS') }}</span>
  <div class="p-4 text-dark position-relative" >
    <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(-90deg);">
      <g>
        <title>NPS graph</title>
        <circle :style="style" id="circle" class="circle_animation" :r="radius" :cy="size/2" :cx="size/2" :stroke-width="stroke" stroke="#79ce62" fill="none" />
      </g>
      </svg>
    <span id="npsvalue" class="d-block position-absolute w-100 h-100 mx-auto">{{perc}}</span>
  </div>
</div>
</template>

<script>

export default {
  name: 'feedback-component',
  components: {
  },
  data () {
    return {
      perc: 75,
      radius: 120,
      stroke: 24
    }
  },
  computed: {
  	size () {
    	return this.radius * 2 + this.stroke
    },
  	perimeter () {
    	return Math.round(Math.PI * this.radius * 2)
    },
  	style () {
    	return {
      	'stroke-dashoffset': this.perimeter - this.perc / 100 * this.perimeter,
        'stroke-dasharray': this.perimeter,
      }
    }
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
