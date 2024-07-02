<template>
<router-link to="/">home으로...</router-link>
<div v-for="(post, index) in posts" :key="post.title + index">
  <h4>
    <router-link to="detail/">{{post.title}}</router-link>
  </h4>
  <!-- <h5>{{post.content}}</h5> -->
  <p>{{post.date}}</p>
  <br>
  <span>{{post.number}}</span>
</div>
</template>

<script>
export default {
  name: 'DefaultList',
  props: {
    posts: Array
  }
}
</script>

<style>

</style>