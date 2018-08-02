<template>
  <b-row>
    <b-col cols="12">
      <h3 class="text-success">{{ $t('updateTitle') }}</h3>
      <p>{{ $t('updateDesc') }}</p>
      <b-row>
        <b-input-group class="col-lg-4 col-md-4 col-sm-6 mb-2 mb-sm-0">
          <div class="input-group-prepend">
            <div class="input-group-text bg-light-dark text-light border-0">Repository</div>
          </div>
          <b-form-select v-model="currentRepositorie" class="bg-dark text-success border-0">
            <option class="text-light" v-for="repositorie in repositories" :key="repositorie.key" :id="repositorie" :value="repositorie">{{repositorie}}</option>
          </b-form-select>
        </b-input-group>
        <b-input-group class="col-lg-4 col-md-4 col-sm-6">
          <div class="input-group-prepend">
            <div class="input-group-text bg-light-dark text-light border-0">Branch</div>
          </div>
          <b-form-select v-model="currentBranch" class="bg-dark text-success border-0">
            <option class="text-light" v-for="branch in branches" :key="branch.key" :id="branch" :value="branch">{{branch}}</option>
          </b-form-select>
        </b-input-group>
      </b-row>
      <p class="mt-3">Adam Killander / {{ currentRepositorie }} @ {{ currentBranch }}</p>
      <hr class="border-success">
    </b-col>
    <b-col md="4" class="mb-4" v-for="record in commits" v-bind:key="record.id">
      <div class="card-body bg-dark rounded-top">
        <a :href="record.html_url" target="_blank" class="h5 card-title">{{ record.sha.slice(0, 7) }}</a>
        <span class="d-block lead">{{ record.commit.message | truncate }}</span>
      </div>
      <div class="card-footer bg-light-dark rounded-bottom">
        <span class="d-block">
          <a :href="record.author.html_url" target="_blank" class="text-success"><i class="fas fa-user-tag"></i> {{ record.commit.author.name }}</a>
        </span>
        <small class="text-secondary"><i class="far fa-calendar-alt"></i> {{ record.commit.author.date | formatDate }}</small>
      </div>
    </b-col>
  </b-row>
</template>

<script>

export default {
  name: 'update-component',
  data() { 
    return {
      active: false,
      selected: null,
      repositories: ['AdamsPortfolio', 'instant-app-maker'],
      currentRepositorie: 'AdamsPortfolio',
      branches: ['master', 'docs'],
      currentBranch: 'master',
      commits: null
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    currentRepositorie: 'fetchData',
    currentBranch: 'fetchData'
  },
  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', 'https://api.github.com/repos/Adamkillander96/' + self.currentRepositorie + '/commits?per_page=3&sha=' + self.currentBranch)
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
        console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  },
  i18n: {
    messages: {
      en: { 
        updateTitle: 'Latest GitHub commits',
        updateDesc: 'Select a repository & what branch to view.'
        },
      sv: { 
        updateTitle: 'Senaste GitHub commits',
        updateDesc: 'Välj en repository & vilken branch du vill titta på.'
      }
    }
  }
}

</script>
