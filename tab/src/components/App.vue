<template>
  <div id="app">
    <div v-wechat-title="$route.meta.title"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  watch: {
    '$route' (to, from) {  
      if(to.path == '/'){  
        this.transitionName = 'slide-right'
      }else {  
        this.transitionName = 'slide-left' 
      }
    }
  }
}
</script>

<style>
</style>