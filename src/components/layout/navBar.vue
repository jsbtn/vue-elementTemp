<template>
  <div class="app-navbar">
      <div class="app-navbar-title">
        {{title}}
      </div>
      <el-button class="loginOut-btn" size="mini" @click="loginOut" icon="el-icon-switch-button">
        退出登录
      </el-button>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      bolen:false
    }
  },
  computed: {
    title(){
      return this.generateTitle(this.$route.meta.title)
    },
  },
  methods: {
    loginOut() {

    },
    generateTitle(title) {
      return title
    },
  }
}

</script>
<style lang="scss" scoped>
  ._round{
    display: inline-block;
    border-radius:50%;
    height:25px;
    width: 25px;
    text-align: center;
    line-height: 25px;
    border: 1px solid #f1f1f1;
    vertical-align: middle;
    margin-top: -2px;
    i{
      font-size: 14px; 
      transition: 0.25s;
    }
  }
  ._rotate{
    i{
      transform: rotate(180deg);
      transition: 0.25s;
    }
  }

</style>