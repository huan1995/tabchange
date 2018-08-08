<template>
  <div>
    <router-link class="list" tag="a" :to="{name:'tab'}">tab切换一</router-link>
    <router-link class="list" tag="a" :to="{name:'tab1'}">tab切换二</router-link>
    <router-link class="list" tag="a" :to="{name:'tab2'}">tab切换三</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.list { display: inline-block; margin: 0 8px; color: #333; }
.list:hover { color: #26a; }
</style>