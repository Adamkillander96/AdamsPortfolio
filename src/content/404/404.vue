<template>

<b-container fluid class="introSection">
  <b-row>
    <b-col lg="12" class="text-center mt-0 mt-md-5">
      <h1 class="display-3" v-html="$t('appHead')"></h1>
      <p class="lead" v-html="$t('appDescr')"></p>
      <i class="fal fa-user-astronaut fa-10x"></i>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="12" class="text-center my-2 py-md-5">
      <span class="lead" v-html="$t('helloMsg')"></span>
    </b-col>
  </b-row>
  <b-row class="mt-5">
    <b-col cols="12" class="text-center py-4">{{$t('lang')}}</b-col>
    <b-col cols="6" sm="6" class="p-0">
      <a class="d-flex align-items-center justify-content-center p-5 position-relative" id="Swedish" type="language"
      @click="setLanguage('sv'); setActive('sv')" 
      :class="{ active: isActive('sv'), 'bg-primary': isActive('sv'), 'bg-light-secondary': isActive('en') }" >
      <span style="z-index:2"><i class="fal fa-flag fa-fw d-block mx-auto mb-1"></i> Svenska</span></a>
    </b-col>
    <b-col cols="6" sm="6" class="p-0">
      <a class="d-flex align-items-center justify-content-center p-5 position-relative" id="English" type="language"
      @click="setLanguage('en'); setActive('en')" 
      :class="{ active: isActive('en'), 'bg-danger': isActive('en'), 'bg-light-secondary': isActive('sv') }">
      <span style="z-index:2"><i class="fal fa-flag fa-fw d-block mx-auto mb-1"></i> English</span></a>
    </b-col>
  </b-row>
</b-container>

</template>

<script>

export default {
  name: 'intro',
  data() {
    return {
      activeItem: this.$i18n.locale,
    }
  },
  created() {
    const html = document.documentElement // returns the html tag
    html.setAttribute('lang', this.$i18n.locale)
  },
  methods: {
    setLanguage (val) {
      this.$i18n.locale = val
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem
    }
  }
}

</script>
