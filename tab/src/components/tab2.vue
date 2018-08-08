<template>
  <div class="content-wrap">
    <router-link tag="button" :to="{name:'home'}">返回首页</router-link>
    <ul class="tab-ul">
      <li v-for="(v, index) in listData" :class="{cur:index == dataIndex}" @click="changeNameData(index)">{{v.name}}</li>
    </ul>
    <div>{{dataResult}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        {name: '菜单1', val: '这是第1个数据'},
        {name: '菜单2', val: '这是第2个数据'},
        {name: '菜单3', val: '这是第3个数据'},
        {name: '菜单4', val: '这是第4个数据'},
        {name: '菜单5', val: '这是第5个数据'}
      ],
      dataIndex: 0
    }
  },

  mounted() {
  },

  computed: {
    dataResult() {
      let data = this.listData[this.$store.state.demo.dataIndex].val
      return data
    }
  },

  watch: {
  },
  
  methods: {
    changeNameData($index) {
      this.$store.dispatch('changeIndex', $index)
      this.dataIndex = $index
    }
  }
}
</script>

<style scoped>
button { cursor: pointer; }
.tab-ul li { display: inline-block; vertical-align: middle; padding: 5px 15px; border-bottom: #fff 1px solid; }
.tab-ul li.cur { color: #f00; border-bottom-color: #f00; }
</style>
