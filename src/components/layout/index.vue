<template>
  <div class="app-content">
    <sildeBar></sildeBar>
		<div class="router-page">
      <navBar></navBar>
	  	<app-main/>
		</div>
  </div>
</template>
<script>
import navBar  from './navBar'
import sildeBar  from './sildeBar'
import AppMain  from './AppMain'
export default {
	components:{
    AppMain,
    sildeBar,
    navBar
	},
  data() {
    return {

    }
  },
  motented() {

  },
  created() {

  },
  methods: {

  }
}

</script>
<style lang="scss" scoped>
</style>