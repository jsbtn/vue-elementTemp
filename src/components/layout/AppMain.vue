<template>
  <section class="app-main">
    <el-scrollbar  style="height:100%;background: #ffffff;">
      <transition name="fade-transform" mode="out-in">
        <router-view ref="page" class="app-main-route-view" :key="key" />
      </transition>
    </el-scrollbar >
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  data(){
    return{
    }
  },
  computed: {
    key() {
      return this.$route.path
    },
  },
  methods:{  
  }
}

</script>
