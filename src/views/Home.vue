<template>
  <div class="home">
    <h2>The Fastest Way of Learn Language</h2>
    <el-divider></el-divider>

    <el-row>
      <el-col :span="12">
        <div class="links">
          <p><a type="primary" href="#/lesson/1">1. Find Your Greatness</a></p>
          <p><a type="primary" href="#/lesson/2">2. Ideas Are Scary</a></p>
          <p><a type="primary" href="#/lesson/3">3. Airplane Announcement - Before Taking off</a></p>
          <p><a type="primary" href="#/lesson/4">4. Airplane Announcement - After Landing</a></p>

        </div>
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  name: 'Home'
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