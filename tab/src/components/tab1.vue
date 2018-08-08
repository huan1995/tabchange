<template>
  <div class="content-wrap">
    <router-link tag="button" :to="{name:'home'}">返回首页</router-link>
    <ul class="tab-ul">
      <li @click="toggle(index,tab.view)" v-for="(tab, index) in tabs" :class="{cur: cur == index}">{{ tab.type }}</li>
    </ul>
    <component :is="curView" ></component>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('Tab1', {
    template: '<div>这是第1个数据</div>'
})
Vue.component('Tab2', {
    template: '<div>这是第2个数据</div>'
})
Vue.component('Tab3', {
    template: '<div>这是第3个数据</div>'
})
export default {
  data() {
    return {
      curView: 'tab1',
      cur: 0,
      tabs: [
        {type: 'tab1', view: 'Tab1'},
        {type: 'tab2', view: 'Tab2'},
        {type: 'tab3', view: 'Tab3'}
      ]
    }
  },

  mounted() {
  },

  watch: {
  },

  computed: {
  },
  
  methods: {
    toggle(i,v) {
      this.cur = i
      this.curView = v
    }
  }
}
</script>

<style scoped>
button { cursor: pointer; }
.tab-ul li { display: inline-block; vertical-align: middle; padding: 5px 15px; border-bottom: #fff 1px solid; }
.tab-ul li.cur { color: #f00; border-bottom-color: #f00; }
</style>