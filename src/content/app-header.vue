<template>
<b-navbar id="app-nav" toggleable="md" type="dark" role="navigation">

  <b-navbar-toggle target="nav_collapse" class="p-0 m-0 border-0">
    <div class="bar-icon collapsed">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </b-navbar-toggle>
  <b-navbar-brand v-on:click="intro = true" to="/" value="/" exact for="appName">{{ $t('appName') }}</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto lead">
      <b-nav-item class="px-3" to="/oversikt/" exact><i class="fal fa-home"></i> {{ $t('overview') }}</b-nav-item>
      <b-nav-item class="px-3" to="/om-mig/" exact><i class="fal fa-street-view"></i> {{ $t('aboutme') }}</b-nav-item>
      <b-nav-item class="px-3" to="/portfolio/" exact><i class="fal fa-briefcase"></i> {{ $t('portfolio') }}</b-nav-item>
    </b-navbar-nav>
    
  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      toggleIcon: false
    }
  }
}
</script>