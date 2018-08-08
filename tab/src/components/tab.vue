<template>
  <div class="content-wrap">
    <router-link tag="button" :to="{name:'home'}">返回首页</router-link>
    <ul class="tab-ul">
      <li v-for="(v, index) in list" :class="{cur:index == dataIndex}" @click="change(index)">{{v.name}}</li>
    </ul>
    <div v-for="(v,index) in list" v-show=" index == dataIndex">{{v.content}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {name: '菜单1', content: '这是第1个数据'},
        {name: '菜单2', content: '这是第2个数据'},
        {name: '菜单3', content: '这是第3个数据'},
        {name: '菜单4', content: '这是第4个数据'},
        {name: '菜单5', content: '这是第5个数据'}
      ],
      dataIndex: 0
    }
  },

  mounted() {
  },

  watch: {
  },

  computed: {
  },
  
  methods: {
    change($index) {
        this.dataIndex = $index
    }
  }
}
</script>

<style scoped>
button { cursor: pointer; }
.tab-ul li { display: inline-block; vertical-align: middle; padding: 5px 15px; border-bottom: #fff 1px solid; }
.tab-ul li.cur { color: #f00; border-bottom-color: #f00; }
/*.content-box { padding: 10px 0 30px 50px; border: #ddd 1px solid; }*/
</style>