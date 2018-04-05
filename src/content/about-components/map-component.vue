<template>
  <b-row>
    <gmap-map :center="center" @maptypeid_changed="updateMapType" :map-type-id="mapTypeId" :zoom="4" style="width: 100%; height:400px; color:black;">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">{{infoContent}}</gmap-info-window>
      <gmap-marker :key="i" v-for="(m, i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>
    </gmap-map>
  </b-row>

</template>

<script>

export default {
  name: 'map-component',
  components: {
  },
  data: function () {
      return {
        center: {
          lat: 58.466436, 
          lng: 5.841014
        },
        infoContent: '',
          infoWindowPos: {
            lat: 0,
            lng: 0
          },
          infoWinOpen: false,
          currentMidx: null,
          infoOptions: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
        markers: [{
          position: { 
            lat: 59.863529,
            lng: 17.638544 
          },
          infoText: this.$i18n.t('workPlace'),
          }, {
          position: { 
            lat: 56.686068,
            lng: 12.858931
          },
          infoText: this.$i18n.t('homeTown'),
        }],
        internalValue: '',
        display: false,
        mapTypeId: "terrain",
      }
    },
    methods: {
          updateMapType: function(type) {
            this.mapTypeId = type
          },
          revert: function(){
            this.display = !this.display;
          },
          toggleInfoWindow: function(marker, idx) {

            this.infoWindowPos = marker.position;
            this.infoContent = marker.infoText;

            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = idx;

            }
          }
        },
  i18n: {
    messages: {
      en: { 
        map: 'Map',
        homeTown: 'I was born & raised in Halmstad',
        workPlace: 'I live & work in Uppsala',
        },
      se: { 
        map: 'Karta',
        homeTown: 'Jag är född & uppvuxen i Halmstad',
        workPlace: 'Jag bor & arbetar i Uppsala',
      }
    }
  }
}

</script>
