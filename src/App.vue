<template>
  <router-view :posts="posts"></router-view>
</template>

<script>

// import List from './components/list.vue'
import ListData from './assets/list-data'

export default {
  name: 'App',
  data(){
    return {
      posts: ListData,
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
