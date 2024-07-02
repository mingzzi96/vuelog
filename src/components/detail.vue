<template>
{{$route.params.id}}
  <div>
    <h1>{{posts[$route.params.id].title}}</h1>
    <h5>{{posts[$route.params.id].date}}</h5>
    <p>{{posts[$route.params.id].content}}</p>
  </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: "DetailPage",
    props: {
        posts: Array
    }
}
</script>

<style>

</style>