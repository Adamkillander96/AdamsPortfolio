<template>

<nav id="app-nav" role="navigation">
<b-navbar toggleable="md" type="dark" class="">

  <b-navbar-toggle target="nav_collapse"><i class="fas fa-times"></i></b-navbar-toggle>
  <b-navbar-brand href="#" for="appName">{{ $t('appName') }}</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item to="/" class="px-3" value="/" exact>{{ $t('appBtn1') }} <i class="fas fa-home"></i></b-nav-item>
      <b-nav-item to="/about_me" class="px-3" exact>{{ $t('appBtn3') }} <i class="fas fa-street-view"></i></b-nav-item>
      <b-nav-item to="/portfolio" class="px-3" exact>{{ $t('appBtn2') }} <i class="fas fa-briefcase"></i></b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown id="nav7_ddown" v-bind:text="$t('lang')" extra-toggle-classes="nav-link-custom" class="px-3" right>
        <b-dropdown-item @click="setLanguage('se'); setActive('se')" :class="{ active: isActive('se') }" id="Swedish" type="language" class="">Swedish <i class="far fa-flag"></i></b-dropdown-item>
        <b-dropdown-item @click="setLanguage('en'); setActive('en')" :class="{ active: isActive('en') }" id="English" type="language" class="">English <i class="far fa-flag"></i></b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    
  </b-collapse>
</b-navbar>
</nav>

</template>

<script>

export default {
  name: 'app-nav',
  data() {
    return { activeItem: 'se' }
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
