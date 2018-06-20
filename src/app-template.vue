<template>
<div id="app-content" v-bind:class="{ 'wired-bg': $route.path === '/' }">

<appHeader v-bind:class="{ 'wired-bg': $route.path === '/' }"></appHeader>
<appBody></appBody>
<appFooter v-bind:class="{ 'd-none': $route.path === '/' }"></appFooter>

</div>
</template>

<style lang="scss">
  @import './assets/app-custom.scss';
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
          activeItem: 'se',
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
.background-adam {  
    background-image: linear-gradient(to right, #403651 0%, #6f42c1 100%);
}
.wired-bg {
    background-color: #333333;
    background-attachment: fixed;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='472' height='472' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23403651' stroke-width='1.3'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%234e9aa6'%3E%3Ccircle cx='769' cy='229' r='7'/%3E%3Ccircle cx='539' cy='269' r='7'/%3E%3Ccircle cx='603' cy='493' r='7'/%3E%3Ccircle cx='731' cy='737' r='7'/%3E%3Ccircle cx='520' cy='660' r='7'/%3E%3Ccircle cx='309' cy='538' r='7'/%3E%3Ccircle cx='295' cy='764' r='7'/%3E%3Ccircle cx='40' cy='599' r='7'/%3E%3Ccircle cx='102' cy='382' r='7'/%3E%3Ccircle cx='127' cy='80' r='7'/%3E%3Ccircle cx='370' cy='105' r='7'/%3E%3Ccircle cx='578' cy='42' r='7'/%3E%3Ccircle cx='237' cy='261' r='7'/%3E%3Ccircle cx='390' cy='382' r='7'/%3E%3C/g%3E%3C/svg%3E");
}
.introSection {
  min-height: calc(100vh - 152px);
}
/* SCSS */
div>ul>li>svg {
    font-size: 1.5em !important;
}

.adam-blue       { background-color: #6294cf !important }
.adam-blue-2nd   { background-color: #89afdc !important }
.adam-blue-text  { color: #6294cf !important }
.adam-purple     { background-color: #6f42c1 !important }
.adam-purple-text{ color: #6f42c1 !important }
.adam-red        { background-color: #cf6262 !important }
.adam-red-2nd    { background-color: #db8989 !important }
.adam-red-text   { color: #cf6262 !important }
.adam-orange     { background-color: #cfa762 !important }
.adam-orange-text{ color: #cfa762 !important }
.adam-green      { background-color: #79ce62 !important }
.adam-green-2nd  { background-color: #9ada8a !important }
.adam-green-text { color: #79ce62 !important }
.adam-turkos     { background-color: #35e0fa !important }
.adam-turkos-2   { background-color: #4e9aa6 !important; }
.adam-turkos-text{ color: #62c1cf !important }

.dropdown-item:active {
    background-color: #253b4c;
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

.btn-outline-light:hover { color: #212529 !important; }

.border-bottom {
  border-bottom-width: 3px !important;
}

picture > img { 
    width: 100%;
    height: 100%;
    max-width: 350px;
    max-height: 350px;
}
.tabPanelNav {
    background: rgba(0, 0, 0, 0.05);
}
.tabPanelNav li[aria-expanded="false"] { background-color: transparent !important; cursor: pointer; }
.tabPanelNav li[aria-expanded="true"]  { pointer-events: none; }

.tabPanelContent > *[id*=accordion]              { height: 100%;    }
.tabPanelContent > *[id*=accordion] > .card-body { height: inherit; }

@media (max-width: 1100px) { .tabPanelNav span   { display:none; } }
@media (max-width: 1100px) { .tabPanelNav li a   { text-align: center; } }
@media (min-width: 900px) { .tabPanelNav li     { width  :100%; } }

</style>
