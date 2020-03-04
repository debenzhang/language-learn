<template>
  <div class="home">
    <div class="content">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      </el-breadcrumb>

      <el-divider></el-divider>

      <aplayer
        autoplay
        :music="{
          title: 'The Astronomer',
          src: 'http://learn.deben.me/medias/5.mp3'
        }"
      />

    <div class="page">

      <h2>The Astronomer</h2><p>An <strong style="color: rgb(255, 153, 0);">astronomer </strong>used to go out at night to <strong style="color: rgb(255, 153, 0);">observe </strong>the stars.</p><p>One evening, as he <strong style="color: rgb(255, 153, 0);">wandered</strong> through the <strong style="color: rgb(255, 153, 0);">suburbs </strong>with his whole <strong style="color: rgb(255, 153, 0);">attention fixed</strong> on the sky, he fell <strong style="color: rgb(255, 153, 0);">accidentally </strong>into a deep <strong style="color: rgb(255, 153, 0);">well</strong>.</p><p>While he cried loudly for help, a neighbor heard and <strong style="color: rgb(255, 153, 0);">rushed </strong>to the well.</p><p>When he learned what happened, he said: “Why, in trying to see into what is in heaven, do you not <strong style="color: rgb(255, 153, 0);">manage</strong> to see what is on earth?”</p>

    </div>
    </div>

    <div class="info">

        <h3>一、核心词汇</h3><p><strong style="color: rgb(0, 102, 204);">astronomer [əˈstrɑnəmɚ] n.</strong> 天文学家</p><p><strong style="color: rgb(0, 102, 204);">observe [əbˈzɜːv] vt.</strong> 观察</p><p><strong style="color: rgb(0, 102, 204);">wander [,wɑndɚ] vi.</strong> 漫步；徘徊</p><p><strong style="color: rgb(0, 102, 204);">suburb [,sʌbɜːb] n.</strong> 郊区；边缘</p><p><strong style="color: rgb(0, 102, 204);">attention [əˈtenʃ(ə)n] n.</strong> 注意力</p><p><strong style="color: rgb(0, 102, 204);">fix [fɪks] vt.</strong> 修理；处理；固定</p><p><strong style="color: rgb(0, 102, 204);">accidentally [æksɪˈdent(ə)lɪ] adv.</strong> 意外地；偶然地</p><p><strong style="color: rgb(0, 102, 204);">well [wel] n.</strong> 井</p><p><strong style="color: rgb(0, 102, 204);">rush [rʌʃ] vt.&amp;vi.</strong> 冲；奔 n. 匆忙</p><p><strong style="color: rgb(0, 102, 204);">manage [,mænɪdʒ] vt.</strong> 管理；经营；设法 vi. 处理</p>

        <h3>二、核心表达</h3><p><strong style="color: rgb(255, 153, 0);">used to do sth.</strong> 过去常常做某事</p><p><strong style="color: rgb(255, 153, 0);">observe sth.</strong> 观察某事</p><p><strong style="color: rgb(255, 153, 0);">wander through</strong> 在……漫游</p><p><strong style="color: rgb(255, 153, 0);">fix attention on sth.</strong> 把注意力放在某事上</p><p><strong style="color: rgb(255, 153, 0);">fall into</strong> 掉入</p><p><strong style="color: rgb(255, 153, 0);">rush to</strong> 跑到（某地）</p><p><strong style="color: rgb(255, 153, 0);">in doing sth.</strong> 在做某事的情况下</p><p><strong style="color: rgb(255, 153, 0);">see into sth.</strong> 调查/识透某事</p><p><strong style="color: rgb(255, 153, 0);">manage to do sth. </strong>设法做某事</p>
        
        <h3>四、参考译文</h3><p>有个天文学家，过去经常晚上到外面去观测星象。</p><p>有一天晚上，天文学家来到野 外，全神贯注着星空，一不小心掉进一口井里。</p><p>当他大喊求救的时候，一个邻居 听到跑到了井边。</p><p>当了解情况以后，邻居说：“为什么你在尝试观察天空有什么 的时候，不设法看看地上有什么呢？”</p>

    </div>

  </div>
</template>

<script>

import Aplayer from 'vue-aplayer'

export default {
  name: 'Lesson5',
  components: {
    Aplayer
  }
}
</script>
