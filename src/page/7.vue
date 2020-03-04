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
          title: 'How to Be Proactive',
          src: 'http://learn.deben.me/medias/7.mp3'
        }"
      />

    <div class="page">

      <h2>How to Be Proactive</h2><p>Being <strong style="color: rgb(255, 153, 0);">proactive </strong>means thinking and acting ahead of <strong style="color: rgb(255, 153, 0);">anticipated events</strong>.</p><p>Not only is it a great method for <strong style="color: rgb(255, 153, 0);">avoiding </strong>more work down the road, it can also be <strong style="color: rgb(255, 153, 0);">extremely </strong>important for <strong style="color: rgb(255, 153, 0);">averting </strong>problems.</p><p>To be proactive, start taking action, <strong style="color: rgb(255, 153, 0);">embracing </strong>your <strong style="color: rgb(255, 153, 0);">responsibility</strong>, and <strong style="color: rgb(255, 153, 0);">controlling </strong>your <strong style="color: rgb(255, 153, 0);">responses</strong>.</p><p>By doing things such as anticipating your future and <strong style="color: rgb(255, 153, 0);">focusing </strong>on <strong style="color: rgb(255, 153, 0);">solutions </strong>instead of problems, you'll <strong style="color: rgb(255, 153, 0);">maintain </strong>a happier and more proactive <strong style="color: rgb(255, 153, 0);">outlook</strong>.</p>

    </div>
    </div>

    <div class="info">

        <h3>一、核心词汇</h3><p><strong style="color: rgb(0, 102, 204);">proactive [prəʊ‟æktɪv] adj.</strong> 积极主动的；有前瞻性的，先行一步的</p><p><strong style="color: rgb(0, 102, 204);">anticipate [æn‟tɪsɪpeɪt] vt.</strong> 预期，期望</p><p><strong style="color: rgb(0, 102, 204);">event [ɪ‟vent] </strong>事件；大事</p><p><strong style="color: rgb(0, 102, 204);">avoid [ə‟vɔɪd] vt.</strong> 躲避，避免</p><p><strong style="color: rgb(0, 102, 204);">extremely [ɪk‟striːmlɪ] adv.</strong> 极端地；极度地</p><p><strong style="color: rgb(0, 102, 204);">avert [ə‟vɜːt] vt.</strong> 转移；防止；避免</p><p><strong style="color: rgb(0, 102, 204);">embrace [ɪm‟breɪs] vt.&amp;vi.</strong> 拥抱</p><p><strong style="color: rgb(0, 102, 204);">responsibility [rɪˌspɒnsəˈbɪləti] n.</strong> 责任</p><p><strong style="color: rgb(0, 102, 204);">control [kənˈtrəʊl] vt.</strong> 控制；支配 n. 支配权</p><p><strong style="color: rgb(0, 102, 204);">response [rɪˈspɒns] n.</strong> 反应；答复</p><p><strong style="color: rgb(0, 102, 204);">focus [ˈfəʊkəs] vt.</strong> 集中，聚集 n. 焦点</p><p><strong style="color: rgb(0, 102, 204);">solution [səˈlu:ʃn] n.</strong> 解决办法</p><p><strong style="color: rgb(0, 102, 204);">maintain [meɪnˈteɪn] vt.</strong> 保持；维持</p><p><strong style="color: rgb(0, 102, 204);">outlook [,aʊtlʊk] n.</strong> 人生观；前景</p>

        <h3>二、核心表达</h3><p><strong style="color: rgb(255, 153, 0);">mean doing sth.</strong> 意味着做某事</p><p><strong style="color: rgb(255, 153, 0);">ahead of sth.</strong> 在某事之前</p><p><strong style="color: rgb(255, 153, 0);">anticipated events</strong> 预期事件</p><p><strong style="color: rgb(255, 153, 0);">Not only…(but) also…</strong> 不但……而且……</p><p><strong style="color: rgb(255, 153, 0);">It is a great method for doing sth.</strong> 对于做某事来说，这是一个不错的方法。</p><p><strong style="color: rgb(255, 153, 0);">Sth. is (extremely) important for sth./doing sth.</strong> 某事对（做）某事（及其） 重要。</p><p><strong style="color: rgb(255, 153, 0);">down the road</strong> 在接下来的路上</p><p><strong style="color: rgb(255, 153, 0);">to do sth.</strong> 放在句首，表示目的</p><p><strong style="color: rgb(255, 153, 0);">start doing sth.</strong> 开始做某事</p><p><strong style="color: rgb(255, 153, 0);">by doing sth.</strong> 通过做某事</p><p><strong style="color: rgb(255, 153, 0);">such as</strong> 例如</p><p><strong style="color: rgb(255, 153, 0);">focus on sth.</strong> 聚焦于某事</p><p><strong style="color: rgb(255, 153, 0);">instead of</strong> 替代；而不是</p><p><strong style="color: rgb(255, 153, 0);">maintain sth.</strong> 保持 / 维持某事 / 某种状态</p>
        
        <h3>四、参考译文</h3><p>做事如何积极主动 积极主动，意味着在预期事件之前进行思考和行动。</p><p>这不仅是避免在接下来的 道路上进行更多工作的好方法，而且对于防止问题也及其重要。</p><p>要做到积极主动，就应该开始采取行动，承担责任并控制你的回应。</p><p>通过诸如 预测未来、专注于解决方案而不是问题等多种手段，你就能保持更快乐、更积极 的人生观。</p>

    </div>

  </div>
</template>

<script>

import Aplayer from 'vue-aplayer'

export default {
  name: 'Lesson7',
  components: {
    Aplayer
  }
}
</script>
