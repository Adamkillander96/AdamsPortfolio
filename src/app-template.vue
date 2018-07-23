<template>
<div id="app-content" v-cloak>

<appHeader/>
<appBody class="shadow" />
<appFooter v-bind:class="{ 'd-none': $route.path === '/' }"/>

</div>
</template>

<style lang="scss">
@import '/assets/app-custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import '/assets/app-custom-class.scss';
</style>

<script>
import appHeader from './content/app-header.vue'
import appBody from './content/app-body.vue'
import appFooter from './content/app-footer.vue'

export default {
  name: 'app',
  data() {
      return {
          intro: true,
      }
  },
  components: {
      appHeader,
      appBody,
      appFooter
    }
}

</script>

<style>
body { font-family: 'Raleway', sans-serif; color: white; }
body > div {
    transition: 0.5s ease-in-out
}
.bg-adam {  
    background-image: linear-gradient(to right, #403651 0%, #6f42c1 100%);
}
.wired-bg {
    background-color: #222;
}
.hero-row > .row > *[class*='bg-light-']:after {
    background-size: cover;
    background-position: center;
    background-blend-mode: lighten;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.developer:after {
    background-image: url(https://adamkillander.se/images/laptop.png);  
}
.code:after {
    background-image: url(https://adamkillander.se/images/code.png);  
}
.game:after {
    background-image: url(https://adamkillander.se/images/citiesskylinesimage.png);  
}
.analys:after {
    background-image: url(https://adamkillander.se/images/analys.png);  
}

.developer:before   { border-left-color: #6193cf !important }
.code:before        { border-right-color: #cf61b3 !important }
.game:before        { border-left-color: #cfa762 !important }
.analys:before      { border-right-color: #79ce62 !important }
.hero-row:nth-child(odd) > .row > *[class*='bg-light-']:before {
    content: "";
    border-top: 20em solid transparent;
    border-bottom: 0em solid transparent;
    border-left: 3em solid ;
    position: absolute;
    left: 0;
    top: 0;
}
.hero-row:nth-child(even) > .row > *[class*='bg-light-']:before {
    content: "";
    border-top: 20em solid transparent;
    border-bottom: 0em solid transparent;
    border-right: 3em solid ;
    position: absolute;
    right: 0;
    top: 0;
}

a.nav-link {
    position: relative;
}
a.nav-link:after {
    content: "";
    border-bottom: 3px solid #cf6161;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
}
a.nav-link.active:after {
    border-color: white;
}

.dropdown-menu.dropdown-menu-right > a {
    outline: none !important;
}

.fade-enter-active, .fade-leave-active { transition: opacity .2s ease-in-out; }
.fade-enter, .fade-leave-to { opacity: 0; }

.col-lg-4 svg { transition: 0.1s ease-in-out }

.p-0.col-lg-4:hover > div > div > svg {
    transform: scale(0.95);
}
.card { background-color: transparent }
.transparent-btn:focus { outline:0; }
.transparent-btn {
    position: absolute;
    z-index: 999;
    cursor: pointer;
}
nav a.nav-link {
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
}
picture > img { 
    width: 100%;
    height: 100%;
    max-width: 350px;
    max-height: 350px;
}
#accordionNav {
    background: rgba(0, 0, 0, 0.05);
}
#accordionNav div[aria-expanded="false"] { background-color: transparent !important; cursor: pointer; }
#accordionNav div[aria-expanded="true"]  { pointer-events: none; }

.introFun {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
}
.rocketGuy {
    width: 85%;
}
@media (max-width: 992px) {
    .rocketGuy {
        width: 200%;
    }
}
.rocketGuy svg {
    transform: rotate(-43deg);
}
.custom-spin {
    -webkit-animation: fa-spin 20s infinite linear;
    animation: fa-spin 20s infinite linear;
}

</style>
