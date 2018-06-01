<template>

  <transition name="fade" mode="out-in">
    <router-view id="app-body" class="bodyComponent"></router-view>
  </transition>

</template>

<script>

export default {
  name: 'app-body',
}

</script>
