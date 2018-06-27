<template>

<b-container fluid class="introSection">
  <b-row>
    <b-col lg="12" class="text-center">
      <h1 class="display-3">{{ $t('appHead') }}</h1>
      <p class="lead">{{ $t('appDescr') }}</p>
      <i class="fas fa-user-astronaut fa-10x"></i>
    </b-col>
  </b-row>
  <b-row>
    <b-col cols="12">{{$t('lang')}}</b-col>
    <b-col cols="12" sm="6" class="p-0">
      <a class="d-flex align-items-center justify-content-center p-5 position-relative" id="Swedish" type="language"
      @click="setLanguage('se'); setActive('se')" 
      :class="{ active: isActive('se'), 'bg-primary': isActive('se') }" >
      <span style="z-index:2">Svenska</span></a>
    </b-col>
    <b-col cols="12" sm="6" class="p-0">
      <a class="d-flex align-items-center justify-content-center p-5 position-relative" id="English" type="language"
      @click="setLanguage('en'); setActive('en')" 
      :class="{ active: isActive('en'), 'bg-danger': isActive('en') }">
      <span style="z-index:2">English</span></a>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="12" class="text-center">
      <span class="lead">{{$t('helloMsg')}}</span>
    </b-col>
  </b-row>
</b-container>

</template>

<script>

export default {
  name: 'intro',
  data() {
    return {
      activeItem: 'se',
    }
  },
  created() {
    const html = document.documentElement // returns the html tag
    html.setAttribute('lang', 'se')
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
