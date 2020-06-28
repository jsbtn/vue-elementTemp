<template>
  <el-menu :default-active="activeMenu" class="app-slideBar dont_copy">
    <el-scrollbar style="height:100%;">
      <div class="admin_logo">
        <!-- <img :src="adminLogoUrl" class="_icon" /> -->
        <p class="admin_name">{{adminTitle}}</p>
      </div>
      <template  v-for="(item) in router" v-if="item.meta && !item.meta.hidden">
        <el-submenu :unique-opened="true" v-if="item.children" :index="item.path" >
          <template slot="title">
            <img v-if="item.meta" :src="require('@/assets/images/menue/' + item.meta.icon + '.png')"  class="menue_icon">
            <img v-else :src="require('@/assets/images/menue/' + item.children[0].meta.icon + '.png')"  class="menue_icon">
            {{item.meta ? generateTitle(item.meta.title) : generateTitle(item.children[0].meta.title)}}
          </template>
          <el-menu-item :key="iindex" @click="toPath(iitem.path)" v-if="!iitem.meta.hidden" v-for="(iitem,iindex) in item.children" :index="iitem.path">{{generateTitle(iitem.meta.title)}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.path">{{generateTitle(item.meta.title)}}</el-menu-item>
      </template>
    </el-scrollbar>
  </el-menu>
</template>
<script>
import { routes } from '@/router'
export default {
  name: "slideBar",
  data() {
    return {
      adminTitle:"",
      router:[]
    }
  },
  computed: {
    activeMenu() {
      const route = this.$route
      const { meta, path , name } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return name
    },
  },
  motented() {

  },
  created() {
    this.router =[
      ...routes
    ]
    console.log(this.router)
  },
  methods: {
    toPath(path){
      this.$router.push({
        name:path,
      })
    },
    generateTitle(title) {
      return title
    }
  }
}

</script>
