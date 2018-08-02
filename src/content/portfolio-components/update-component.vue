<template>
  <b-row>
    <b-col cols="12">
      <h3 class="text-success">{{ $t('updateTitle') }}</h3>
      <template v-for="repositorie in repositories">
        <input type="radio"
        :key="repositorie.key"
        :id="repositorie"
        :value="repositorie"
        name="repositorie"
        v-model="currentRepositorie">
        <label :for="repositorie" :key="repositorie.key">{{ repositorie }}</label>
      </template>
      <template v-for="branch in branches">
        <input type="radio"
        :key="branch.key"
        :id="branch"
        :value="branch"
        name="branch"
        v-model="currentBranch">
        <label :for="branch" :key="branch.key">{{ branch }}</label>
      </template>
      <p>Adam Killander/AdamsPortfolio@ {{ currentBranch }}</p>
      <hr class="border-success">
    </b-col>
    <b-col md="4" class="p-0 mb-4" v-for="record in commits" v-bind:key="record.id">
      <div class="mx-4 bg-dark rounded">
        <div class="card-body">
          <a :href="record.html_url" target="_blank" class="h5 card-title">{{ record.sha.slice(0, 7) }}</a>
          <span class="d-block lead">{{ record.commit.message | truncate }}</span>
        </div>
        <div class="card-footer">
          <span class="d-block">
            <a :href="record.author.html_url" target="_blank" class="text-success"><i class="fas fa-user-tag"></i> {{ record.commit.author.name }}</a>
          </span>
          <small class="text-secondary"><i class="far fa-calendar-alt"></i> {{ record.commit.author.date | formatDate }}</small>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>

export default {
  name: 'update-component',
  data() { 
    return {
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
        updateTitle: 'Latest GitHub Portfolio commits',
        },
      sv: { 
        updateTitle: 'Senaste GitHub Portfolio commits',
      }
    }
  }
}

</script>
