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
          title: 'The Donkey in the Lion`s Skin',
          src: 'http://learn.deben.me/medias/6.mp3'
        }"
      />

    <div class="page">

      <h2>The Donkey in the Lion`s Skin</h2><p>A Donkey once found a Lion’s skin which the hunters had left out in the sun to dry.</p><p>He put it on and went towards his native village.</p><p>All <strong style="color: rgb(255, 153, 0);">fled </strong>at his <strong style="color: rgb(255, 153, 0);">approach</strong>, both men and animals, and he was a proud Donkey that day.</p><p>In his <strong style="color: rgb(255, 153, 0);">delight </strong>he <strong style="color: rgb(255, 153, 0);">lifted </strong>up his voice and <strong style="color: rgb(255, 153, 0);">brayed</strong>, but then every one knew him, and his owner came up and gave him a <strong style="color: rgb(255, 153, 0);">sound cudgelling</strong> for the fright he had caused. </p><p>And shortly afterwards a Fox came up to him and said: “Ah, I knew you by your voice.” </p><p>Fine clothes may <strong style="color: rgb(255, 153, 0);">disguise</strong>, but <strong style="color: rgb(255, 153, 0);">silly </strong>words will <strong style="color: rgb(255, 153, 0);">disclose </strong>a fool.</p>

    </div>
    </div>

    <div class="info">

        <h3>一、核心词汇</h3><p><strong style="color: rgb(0, 102, 204);">fled [fled] vi.</strong> 逃走（flee 的过去式）</p><p><strong style="color: rgb(0, 102, 204);">flee [fliː] vi.</strong> 逃走</p><p><strong style="color: rgb(0, 102, 204);">approach [ə‟prəʊtʃ] n.</strong> 接近；方法，途径 vt.&amp;vi. 接近，靠近</p><p><strong style="color: rgb(0, 102, 204);">delight [dɪ‟laɪt] n.</strong> 高兴；欣喜 lift [lɪft] vt. 举起；提升</p><p><strong style="color: rgb(0, 102, 204);">bray [breɪ] n.</strong> 驴叫声</p><p><strong style="color: rgb(0, 102, 204);">sound [saʊnd] adj.</strong> 可靠的；完好的；严厉的</p><p><strong style="color: rgb(0, 102, 204);">cudgel [,kʌdʒ(ə)l] n.</strong> 棍棒 vt. 用棍棒打</p><p><strong style="color: rgb(0, 102, 204);">disguise [dɪs‟gaɪz] vt.</strong> 掩饰；伪装 n. 伪装</p><p><strong style="color: rgb(0, 102, 204);">silly [,sɪlɪ] adj.</strong> 愚蠢的</p><p><strong style="color: rgb(0, 102, 204);">disclose [dɪs‟kləʊz] vt.</strong> 公开；揭露</p>

        <h3>二、核心表达</h3><p><strong style="color: rgb(255, 153, 0);">leave sth.</strong> out 把某物放在外面</p><p><strong style="color: rgb(255, 153, 0);">in the sun</strong> 在太阳底下</p><p><strong style="color: rgb(255, 153, 0);">go toward</strong> 走向</p><p><strong style="color: rgb(255, 153, 0);">at one</strong><strong style="color: rgb(0, 102, 204);">ˈ</strong><strong style="color: rgb(255, 153, 0);">s approach</strong> 在某人接近的时候</p><p><strong style="color: rgb(255, 153, 0);">in one</strong><strong style="color: rgb(0, 102, 204);">ˈ</strong><strong style="color: rgb(255, 153, 0);">s delight</strong> 在某人欣喜时 lift up 举起；抬高</p><p><strong style="color: rgb(255, 153, 0);">shortly afterwards</strong> 不久后</p><p><strong style="color: rgb(255, 153, 0);">come up to sb.</strong> 走向某人</p><p><strong style="color: rgb(255, 153, 0);">know sb. by sth.</strong> 通过某物知道某人</p>
        
        <h3>四、参考译文</h3><p>披着狮子皮的驴 有一次，一头驴看见了一张猎人们放在外面太阳底下想晒干的狮子皮。</p><p>他把狮子 皮披在身上，朝着自己的村庄走去。</p><p>所有人和牲口看见驴走过来，吓得纷纷逃走。 </p><p>驴十分得意。</p><p>高兴之时，驴扯开嗓门大叫起来，然后大家都知道他是一头驴了， 因为给大家造成了惊吓，驴主人走过来用木棒将驴暴打了一顿。</p><p>过了一会儿，一 只狐狸凑过来对驴说：“啊，我一听声音就知道是你” 。</p><p>漂亮的衣服可以掩盖傻瓜，但蠢话会将他暴露。</p>

    </div>

  </div>
</template>

<script>

import Aplayer from 'vue-aplayer'

export default {
  name: 'Lesson6',
  components: {
    Aplayer
  }
}
</script>
