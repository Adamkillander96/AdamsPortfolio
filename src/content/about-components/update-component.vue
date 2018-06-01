<template>
  <b-row>
    <b-col md="8">
      <div id="demo">
        <h1>Latest Vue.js Commits</h1>
          <template v-for="branch in branches">
            <input type="radio"
            v-bind:key="branch.id"
            :id="branch"
            :value="branch"
            name="branch"
            v-model="currentBranch">
          <label :for="branch" v-bind:key="branch.id">{{ branch }}</label>
        </template>
        <p>vuejs/vue@{{ currentBranch }}</p>
        <ul>
          <li v-for="record in commits" v-bind:key="record.id">
            <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a>
            - <span class="message">{{ record.commit.message | truncate }}</span><br>
      by <span class="author"><a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></span>
      at <span class="date">{{ record.commit.author.date | formatDate }}</span>
          </li>
        </ul>
      </div>
    </b-col>
  </b-row>

</template>

<script>

var apiURL = 'https://api.github.com/repos/Adamkillander96/AdamsPortfolio/commits?per_page=3&sha='

var demo = new Vue({
  el: '#demo',
  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null
  },
  created: function () {
    this.fetchData()
  },
  watch: {
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
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
        console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  }
})

export default {
  name: 'update-component',
  i18n: {
    messages: {
      en: { 

        },
      se: { 

      }
    }
  }
}

</script>
