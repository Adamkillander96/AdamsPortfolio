<template>
<b-row>
  <transition name="component-fade" mode="out-in">
    <b-modal ref="thymodal" id="skillModal" body-class="p-0" class="p-0" :title="currentTab" hide-header hide-footer>
      <div class="bg-dark nav nav-justified">
        <a v-for="skills in skills"  v-bind:key="skills.id"  v-bind:id="skills.id" v-on:click="currentTab = skills.id" class="p-3 nav-item" 
        v-bind:class="[{ 
          'active': skills.id === currentTab, 
          'bg-success': skills.id === 'seo' && currentTab === 'seo',
          'bg-danger'  : skills.id === 'web' && currentTab === 'web',
          'bg-primary' : skills.id === 'sup' && currentTab === 'sup'
        }]">
          <i class="text-white fa-2x" v-bind:class="skills.icon"></i>
        </a>
      </div>
      <b-card body-class="p-0 rounded-0" class="text-center border-0">
        <b-list-group class="text-left" v-for="skills in skills" v-bind:key="skills.id" v-bind:id="skills.id" v-if="skills.id === currentTab">
          <b-list-group-item v-bind:class="skills.color" class="border-0 rounded-0 text-light" target="_blank" v-bind:href="skills.link"><i class="far fa-building fa-fw"></i> {{skills.title}} - <em>{{skills.company}}</em></b-list-group-item>
          <b-list-group-item v-bind:class="skills.color" class="border-0 border-dark text-light"><i class="far fa-calendar-alt fa-fw"></i> {{skills.time}} - {{ $t('today') }}</b-list-group-item>
          <b-list-group-item class="border-0" variant="light"><i class="fas fa-info fa-fw"></i> {{skills.text}}</b-list-group-item>
        </b-list-group>
      </b-card>
      <div class="p-2 text-right">
        <b-btn class="border-0" @click="hideModal" exact>Close</b-btn>
      </div>
    </b-modal>
  </transition>
  <b-col md="12" lg="4" class="p-0" v-for="skills in skills" v-bind:key="skills.id">
    <b-link class="transparent-btn px-3 w-100 h-100 border-0 bg-transparent" v-b-modal.skillModal v-on:click="currentTab = skills.id"></b-link>
    <b-card class="p-0 text-center border-0">
      <i class="fa-10x text-white p-5 rounded-circle" v-bind:class="[skills.icon, skills.color]"></i>
      <div class="card-body px-0">
        <h3 class="card-text" v-html="skills.title"></h3>
        <p class="card-text" v-html="skills.description"></p>
      </div>
    </b-card>
  </b-col>
</b-row>

</template>

<script>

export default {
  name: 'skill-seo',
  data() {
    return {
      currentTab: 'seo',
      skills: [
        { title: this.$t('skillSeoTitle'), description: this.$t('skillSeoDescr'), text: this.$t('skillSeoText'), name: 'seo', id: 'seo', icon: 'far fa-chart-bar', color: 'bg-success', company: 'OnMedia Group', link: 'https://www.onmediagroup.se', time: '2018-04-23'},
        { title: this.$t('skillWebbTitle'), description: this.$t('skillWebbDescr'), text: this.$t('skillWebbText'), name: 'web', id: 'web', icon: 'fas fa-paint-brush', color: 'bg-danger', company: 'Hobby', link: '', time: '2016-08-01' },
        { title: this.$t('skillSupportTitle'), description: this.$t('skillSupportDescr'), text: this.$t('skillSupportText'), name: 'sup',  id: 'sup', icon: 'fas fa-headset', color: 'bg-primary', company: 'QuickSearch', link: 'https://www1.quicksearch.se/', time: '2016-01-15 - 2018-04-06' },
      ]
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  methods: {
    hideModal () {
      this.$refs.thymodal.hide()
    }
  }
}

</script>