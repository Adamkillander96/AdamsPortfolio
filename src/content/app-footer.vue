<template>

<b-container fluid id="app-footer">
  <b-container>
    <b-row class="justify-content-center">
        <b-col cols="6" class="p-3 text-center">
          <div class="nav-link-container">
            <h6 class="mb-1">{{ $t('linkInternal') }}</h6>
            <b-button-group vertical>
              <b-link class="rounded-0 text-light d-block p-2 w-100" to="/oversikt/" exact><i class="fal fa-home fa-fw"></i> {{ $t('overview') }}</b-link>
              <b-link class="rounded-0 text-light d-block p-2 w-100" to="/om-mig/" exact><i class="fal fa-street-view fa-fw"></i> {{ $t('aboutme') }}</b-link>
              <b-link class="rounded-0 text-light d-block p-2 w-100" to="/portfolio/" exact><i class="fal fa-briefcase fa-fw"></i> {{ $t('portfolio') }}</b-link>
            </b-button-group>
          </div>
        </b-col>
        <b-col cols="6" class="p-3 text-center">
          <h6 class="mb-1">{{ $t('linkExternal') }}</h6>
          <b-button-group vertical>
            <b-link class="rounded-0 text-light d-block p-2 w-100" target="_blank" href="https://www.linkedin.com/in/adam-killander-a91aa0103/"><i class="fab fa-linkedin fa-fw"></i> Linkedin</b-link>
            <b-link class="rounded-0 text-light d-block p-2 w-100" target="_blank" href="https://github.com/Adamkillander96?tab=repositories"><i class="fab fa-github-square fa-fw"></i> Github</b-link>
            <b-link class="rounded-0 text-light d-block p-2 w-100" target="_blank" href="https://jsfiddle.net/user/Adamkillander/fiddles/"><i class="fab fa-jsfiddle fa-fw"></i> JSFiddle</b-link>
          </b-button-group>
        </b-col>
    </b-row>
  </b-container>
</b-container>

</template>

<script>

export default {
  name: 'app-footer',
  i18n: {
    messages: {
      en: { 
        linkInternal: 'Internal links',
        linkExternal: 'External links', 
      },
      sv: { 
        linkInternal: 'Interna länkar',
        linkExternal: 'Externa länkar',
      }
    }
  }
}

</script> 
