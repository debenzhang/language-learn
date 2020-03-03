<template>
  <div class="home">
    <h2>The Fastest Way of Learn Language</h2>
    <el-divider></el-divider>

    <el-row>
      <el-col :span="8">
        <div class="links">
          <p><a type="primary" href="#/lesson/1">1. Find Your Greatness</a></p>
          <p><a type="primary" href="#/lesson/2">2. Ideas Are Scary</a></p>
        </div>
      </el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    
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
  padding: 10px 20px;
  text-align: left;
}
.lesson-link {
  font-size: 24px;
}
</style>