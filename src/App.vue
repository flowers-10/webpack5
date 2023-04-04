<template>
<h1 class="title">Hello App</h1>

<router-link to="/home">Home</router-link>
<br>
<router-link to="/about">About</router-link>

<router-view></router-view>
</template>

<script setup>
import Home from "./views/Home/Home.vue"
</script>

<style>
.title {
    color: pink;
}
</style>