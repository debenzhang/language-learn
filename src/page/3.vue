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
          title: 'Airplane Announcement - Before Taking off',
          src: 'http://learn.deben.me/medias/3.mp3'
        }"
      />

      <div class="page">
        <h2>Airplane Announcement - Before Taking off</h2>
        <p>Ladies and gentlemen:</p>
        <p>We will take off <strong style="color: rgb(255, 153, 0);">immediately</strong>.</p>
        <p>Please <strong style="color: rgb(255, 153, 0);">fasten</strong> your seatbelt, close your <strong style="color: rgb(255, 153, 0);">tray</strong> table, and put your seat back to the <strong style="color: rgb(255, 153, 0);">upright position</strong>.</p>
        <p>If you are sitting beside a window, please help us by opening the <strong style="color: rgb(255, 153, 0);">sunshades</strong>.</p>
        <p>Please <strong style="color: rgb(255, 153, 0);">ensure</strong> that all of your portable electronic <strong style="color: rgb(255, 153, 0);">devices</strong> are <strong style="color: rgb(255, 153, 0);">switched</strong> into flight mode and WIFI is switched off at all times.</p>
        <p>This is a non-smoking flight, please do not smoke on <strong style="color: rgb(255, 153, 0);">board</strong>.</p>
        <p>Now flight <strong style="color: rgb(255, 153, 0);">attendants</strong> will start safety check.</p>
        <p>Thank you for your <strong style="color: rgb(255, 153, 0);">cooperation</strong>!</p>
      </div>
    </div>

    <div class="info">

      <h3>一、核心词汇</h3>
      <p><strong style="color: rgb(0, 102, 204);">immediately [ɪˈmiːdɪətlɪ] adv. </strong>立刻，马上</p>
      <p><strong style="color: rgb(0, 102, 204);">fasten [,fæsən] vt. </strong>系牢；扣紧</p>
      <p><strong style="color: rgb(0, 102, 204);">tray [treɪ] n. </strong>托盘</p>
      <p><strong style="color: rgb(0, 102, 204);">upright [,ʌpraɪt] adj. </strong>垂直的；立式的</p>
      <p><strong style="color: rgb(0, 102, 204);">position [pəˈzɪʃən] n. </strong>位置</p>
      <p><strong style="color: rgb(0, 102, 204);">sunshade [,sʌnʃeɪd] n. </strong>遮光板；遮阳伞</p>
      <p><strong style="color: rgb(0, 102, 204);">ensure [ɪnˈʃʊr] vt. </strong>确保</p>
      <p><strong style="color: rgb(0, 102, 204);">portable [,pɔrtəbl] adj. </strong>便携式的</p>
      <p><strong style="color: rgb(0, 102, 204);">device [dɪˈvaɪs] n. </strong>装置；设备</p>
      <p><strong style="color: rgb(0, 102, 204);">switch [swɪtʃ] vt. </strong>转换 n. 开关</p>
      <p><strong style="color: rgb(0, 102, 204);">board [bɔrd] n. </strong>木板；甲板 vt. 上（飞机、车、船等）</p>
      <p><strong style="color: rgb(0, 102, 204);">attendant [əˈtend(ə)nt] n. </strong>服务员</p>
      <p><strong style="color: rgb(0, 102, 204);">cooperation [kəʊˌɒpəˈreɪʃn] n. </strong>合作</p>

      <h3>二、核心表达</h3>
      <p><strong style="color: rgb(255, 153, 0);">take off</strong> 飞机起飞</p>
      <p><strong style="color: rgb(255, 153, 0);">help sb. by doing sth.</strong> 通过做某事帮助某人</p>
      <p><strong style="color: rgb(255, 153, 0);">ensure that…</strong>（后加宾语从句） 确保某事</p>
      <p><strong style="color: rgb(255, 153, 0);">be switched into…</strong> 被切换到某种状态下</p>
      <p><strong style="color: rgb(255, 153, 0);">switch off</strong> 关闭</p>
      <p><strong style="color: rgb(255, 153, 0);">at all times</strong> 每时每刻；任何时候</p>
      <p><strong style="color: rgb(255, 153, 0);">on board</strong> 在飞机/轮船等上</p>
      <p><strong style="color: rgb(255, 153, 0);">flight attendant</strong> 飞机乘务员</p>

      <h3>四、参考译文</h3><p>女士们、先生们： 我们的飞机即将起飞。</p><p>请您系好安全带，收起小桌板，调直座椅靠背。</p><p>靠窗边的 旅客请协助将遮光板拉开。</p><p>请确保您的移动电话等全部便携式电子设备已调至飞 行模式并关闭无线上网功能。</p><p>本次航班全程禁烟，请不要在机上任何区域吸烟。 </p><p>现在由乘务员进行客舱安全检查。 感谢您的合作！</p>

    </div>

  </div>
</template>

<script>

import Aplayer from 'vue-aplayer'

export default {
  name: 'Lesson3',
  components: {
    Aplayer
  }
}
</script>
