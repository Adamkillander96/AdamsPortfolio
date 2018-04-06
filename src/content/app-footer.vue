<template>

<b-container fluid id="app-footer" class="bg-dark">
    <b-row>
        <b-col class="p-3 text-center">
          <h6 class="mb-1">{{ $t('appFotTitle') }}</h6>
        </b-col>
        <b-col class="p-3 text-center">
          <h6 class="mb-1">{{ $t('appFotTitle') }}</h6>
          <b-button-group vertical>
            <b-button variant="dark" class="rounded-0" target="_blank" href="https://www.linkedin.com/in/adam-killander-a91aa0103/">Linkedin <i class="fab fa-linkedin"></i></b-button>
            <b-button variant="dark" class="rounded-0" target="_blank" href="https://github.com/Adamkillander96?tab=repositories">Github <i class="fab fa-github-square"></i></b-button>
            <b-button variant="dark" class="rounded-0" target="_blank" href="https://jsfiddle.net/user/Adamkillander/fiddles/">JSFiddle <i class="fab fa-jsfiddle"></i></b-button>
          </b-button-group>
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
        appFotTitle: 'Links', 
      },
      se: { 
        appFotTitle: 'Länkar',
      }
    }
  }
}

</script> 
