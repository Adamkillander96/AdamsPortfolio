<template>

<b-container fluid id="app-footer" class="wired-bg">
    <b-row>
        <b-col class="p-3 text-center text-center">
          <div class="nav-link-container">
            <h6 class="mb-1 border-bottom border-info">{{ $t('linkInternal') }}</h6>
            <b-button-group vertical>
              <b-link class="rounded-0 text-light d-block p-2 w-100" to="/oversikt/" exact>{{ $t('overview') }} <i class="fas fa-home"></i></b-link>
              <b-link class="rounded-0 text-light d-block p-2 w-100" to="/om-mig/" exact>{{ $t('aboutme') }} <i class="fas fa-street-view"></i></b-link>
              <b-link class="rounded-0 text-light d-block p-2 w-100" to="/portfolio/" exact>{{ $t('portfolio') }} <i class="fas fa-briefcase"></i></b-link>
            </b-button-group>
          </div>
        </b-col>
        <b-col class="p-3 text-center">
          <div class="nav-link-container text-center">
            <h6 class="mb-1 border-bottom border-info">{{ $t('linkExternal') }}</h6>
            <b-button-group vertical>
              <b-link class="rounded-0 text-light d-block p-2 w-100" target="_blank" href="https://www.linkedin.com/in/adam-killander-a91aa0103/">Linkedin <i class="fab fa-linkedin"></i></b-link>
              <b-link class="rounded-0 text-light d-block p-2 w-100" target="_blank" href="https://github.com/Adamkillander96?tab=repositories">Github <i class="fab fa-github-square"></i></b-link>
              <b-link class="rounded-0 text-light d-block p-2 w-100" target="_blank" href="https://jsfiddle.net/user/Adamkillander/fiddles/">JSFiddle <i class="fab fa-jsfiddle"></i></b-link>
            </b-button-group>
          </div>
        </b-col>
    </b-row>
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
      se: { 
        linkInternal: 'Interna länkar',
        linkExternal: 'Externa länkar',
      }
    }
  }
}

</script> 
