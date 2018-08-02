<template>
  <b-row>
    <b-col cols="12">
      <h3 class="text-primary">{{ $t('titleh1') }}</h3>
      <p>{{ $t('titledesc') }}</p>
      <hr class="border-primary">
    </b-col>
    <b-col md="4" class="mb-4" v-for="website in website" v-bind:key="website.id">
      <div class="card-body bg-dark rounded-top">
        <h3 v-t="website.content[0]"></h3>
        <span class="thisio" v-t="website.content[1]"></span>
      </div>
      <div class="card-footer bg-light-dark rounded-bottom">
        <span class="d-block">
          <a class="text-primary" target="_blank" v-bind:href="website.thumbnail" ><i class="fal fa-external-link-alt fa-fw"></i> Länk till prototypen</a>
        </span>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'website-template',
  data() {
    return {
      website: [
        { content: this.$t('website1'), thumbnail: 'https://jsfiddle.net/Adamkillander/pmd9Ls2z/' },
        { content: this.$t('website2'), thumbnail: 'https://jsfiddle.net/Adamkillander/vuq3gnd5/' },
        { content: this.$t('website3'), thumbnail: 'https://jsfiddle.net/Adamkillander/tkyv438b/' },
      ]
    }
  },
  i18n: {
    messages: {
      en: { 
        titleh1: 'Latest JSFiddles',
        titledesc: 'My newest JSFiddles, follow the link to try them out.',
        website1: [ 'Weather styling', 'Description 1' ],
        website2: [ 'A simple Vue.js langauge switcher', 'Use vue.js i18n to change language quick and easy. ' ],
        website3: [ 'Latest commits', 'Based on the offical Vue.js example but whit Bootstrap 4.' ],
      },
      sv: { 
        titleh1: 'Senaste JSFiddles',
        titledesc: 'Mina senaste JSFiddles, följ länken för att testa funktionerna.',
        website1: [ 'Väder styling', 'Ändra bakgrundsfärg beroende på vädret!' ],
        website2: [ 'Språk-switcher', 'Byt snabbt & enkelt språk utan att uppdatera sidan.' ],
        website3: [ 'Senaste commits', 'Byggt med vue.js officiela documentation fast med Bootstrap 4.' ],
      }
    }
  }
}
</script>