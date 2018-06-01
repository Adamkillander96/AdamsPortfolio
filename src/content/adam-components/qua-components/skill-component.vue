<template>

<b-card class="p-0 text-center border-0">
  <i class="fa-10x text-white p-5 rounded-circle" v-class="skills.icon, skills.color"></i>
  <div class="card-body px-0">
    <h3 class="card-text" v-html="skills.title"></h3>
    <p class="card-text" v-html="skills.description"></p>
  </div>
</b-card>

</template>

<script>

export default {
  name: 'skill-seo',
  data: {
    skills: [
      { title: $t('skillSeoTitle'), description: $t('skillSeoDescr'), icon: 'far fa-chart-bar', color: 'adam-green' },
      { title: $t('skillWebbTitle'), description: $t('skillWebbDescr'), icon: 'fas fa-paint-brush', color: 'adam-red' },
      { title: $t('skillSupportTitle'), description: $t('skillSupportDescr'), icon: 'fas fa-rocket', color: 'adam-blue' },
    ]
  }
}

</script>