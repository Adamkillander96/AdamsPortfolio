<template>
<nav id="app-nav" role="navigation">
<b-navbar toggleable="md" type="dark">

  <b-navbar-toggle target="nav_collapse"><i class="fas fa-bars fa-lg"></i></b-navbar-toggle>
  <b-navbar-brand v-on:click="intro = true" to="/" value="/" exact for="appName">{{ $t('appName') }}</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="mr-auto">
      <b-nav-item class="px-3" to="/oversikt/" exact>{{ $t('overview') }} <i class="fas fa-home"></i></b-nav-item>
      <b-nav-item class="px-3" to="/om-mig/" exact>{{ $t('aboutme') }} <i class="fas fa-street-view"></i></b-nav-item>
      <b-nav-item class="px-3" to="/portfolio/" exact>{{ $t('portfolio') }} <i class="fas fa-briefcase"></i></b-nav-item>
      <b-nav-item-dropdown id="nav7_ddown" v-bind:text="$t('lang')" extra-toggle-classes="nav-link-custom" class="px-3" right>
        <b-dropdown-item @click="setLanguage('se'); setActive('se')" :class="{ active: isActive('se'), 'adam-green': isActive('se') }" id="Swedish" type="language" class="">Swedish <i class="far fa-flag"></i></b-dropdown-item>
        <b-dropdown-item @click="setLanguage('en'); setActive('en')" :class="{ active: isActive('en'), 'adam-green': isActive('en') }" id="English" type="language" class="">English <i class="far fa-flag"></i></b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    
  </b-collapse>
</b-navbar>
</nav>
</template>

<script>
export default {
  name: 'app-header',
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