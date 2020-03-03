<template>
  <div class="home">
    <div class="links">
      <p class="lesson-link">
        <el-link type="primary" href="#/lesson/1">1. Find Your Greatness</el-link>
      </p>
      <p class="lesson-link">
        <el-link type="primary" href="#/lesson/1">2. Find Your Greatness</el-link>
      </p>
      <p class="lesson-link">
        <el-link type="primary" href="#/lesson/1">3. Find Your Greatness</el-link>
      </p>
      <p class="lesson-link">
        <el-link type="primary" href="#/lesson/1">4. Find Your Greatness</el-link>
      </p>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
.links {
  margin-top: 100px;
}
.lesson-link {
  font-size: 20px;
}
</style>