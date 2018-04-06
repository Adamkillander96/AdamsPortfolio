<template>
<div id="app-content" class="background-adam ">
  
<appNav></appNav>
<appBody></appBody>
<appFooter></appFooter>

</div>
</template>

<script>
import appNav from './content/app-nav.vue'
import appBody from './content/app-body.vue'
import appFooter from './content/app-footer.vue'

export default {
  name: 'app',
  components: {
      appNav,
      appBody,
      appFooter
    }
}

</script>

<style>
.background-adam { 
    background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
}

a.router-link-active, 
a.active { pointer-events: none; }

@import url('https://fonts.googleapis.com/css?family=Raleway');
body { font-family: 'Raleway', sans-serif; color: white; }

.adam-blue       { background-color: #6294cf !important }
.adam-blue-text  { color: #6294cf !important }
.adam-purple     { background-color: #6f42c1 !important }
.adam-purple-text{ color: #6f42c1 !important }
.adam-red        { background-color: #cf6262 !important }
.adam-red-text   { color: #cf6262 !important }
.adam-orange     { background-color: #cfa762 !important }
.adam-orange-text{ color: #cfa762 !important }
.adam-green      { background-color: #79ce62 !important }
.adam-green-text { color: #79ce62 !important }
.adam-turkos     { background-color: #62c1cf !important }
.adam-turkos-2   { background-color: #4e9aa6 !important; }
.adam-turkos-text{ color: #62c1cf !important }

.dropdown-item:active {
    background-color: #253b4c;
}
.dropdown-menu.dropdown-menu-right > a {
    outline: none !important;
}

.component-fade-enter-active, .component-fade-leave-active { transition: opacity .2s ease-in-out; }
.component-fade-enter, .component-fade-leave-to { opacity: 0; }

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
.navbar-toggler[aria-expanded="true"] > svg {
    transform: rotate(0deg);
    transition: 0.1s;
}
.navbar-toggler[aria-expanded="false"] > svg {
    transform: rotate(45deg);
    transition: 0.1s;
}

.btn-outline-light:hover { color: #212529 !important; }

.bg-coding {
    background: url(./assets/codingImage.jpg) no-repeat fixed center;
    background-size: cover;
}

.col-overlay {
    background: rgba(52, 58, 64, 0.25);
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

#npsvalue {
    top: 0;
    left: 0;
    line-height: 300px;
    font-size: 2.5rem;
}

@media (max-width: 1100px) { .tabPanelNav span   { display:none; } }
@media (max-width: 1100px) { .tabPanelNav li a   { text-align: center; } }
@media (min-width: 900px) { .tabPanelNav li     { width  :100%; } }

</style>
