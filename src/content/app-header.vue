<template>
<b-navbar id="app-nav" toggleable="md" type="dark" role="navigation">

  <b-navbar-toggle target="nav_collapse"><i class="fas fa-bars fa-lg"></i></b-navbar-toggle>
  <b-navbar-brand v-on:click="intro = true" to="/" value="/" exact for="appName">{{ $t('appName') }}</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="mr-auto">
      <b-nav-item class="px-3" to="/oversikt/" exact><i class="fas fa-home"></i> {{ $t('overview') }}</b-nav-item>
      <b-nav-item class="px-3" to="/om-mig/" exact><i class="fas fa-street-view"></i> {{ $t('aboutme') }}</b-nav-item>
      <b-nav-item class="px-3" to="/portfolio/" exact><i class="fas fa-briefcase"></i> {{ $t('portfolio') }}</b-nav-item>
    </b-navbar-nav>
    
  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'app-header',
}
</script>