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
          title: 'Airplane Announcement - After Landing',
          src: 'http://learn.deben.me/medias/4.mp3'
        }"
      />

      <div class="page">

        <h2>Airplane Announcement - After Landing</h2>
        <p>Ladies and Gentlemen: </p>
        <p>We have just <strong style="color: rgb(255, 153, 0);">landed</strong> at Beijing Capital International Airport.</p>
        <p>The local time is now 8 p.m.</p>
        <p>The outside <strong style="color: rgb(255, 153, 0);">temperature</strong> is 30 <strong style="color: rgb(255, 153, 0);">degrees Celsius</strong>, 86 degrees <strong style="color: rgb(255, 153, 0);">Fahrenheit</strong>.</p>
        <p>Our plane is <strong style="color: rgb(255, 153, 0);">taxiing</strong>.</p>
        <p>Please <strong style="color: rgb(255, 153, 0);">remain</strong> seated and keep your seat belts fastened until the “fasten seat belt” <strong style="color: rgb(255, 153, 0);">sign</strong> has been turned off.</p>
        <p>When you <strong style="color: rgb(255, 153, 0);">disembark</strong>, please take all your <strong style="color: rgb(255, 153, 0);">belongings</strong>.</p>
        <p>Your checked <strong style="color: rgb(255, 153, 0);">baggage</strong> may be <strong style="color: rgb(255, 153, 0);">claimed</strong> in the baggage claim <strong style="color: rgb(255, 153, 0);">area</strong>.</p>
        <p><strong style="color: rgb(255, 153, 0);">Passengers</strong> with <strong style="color: rgb(255, 153, 0);">connecting</strong> flights, please go to the <strong style="color: rgb(255, 153, 0);">transfer counter</strong> in the <strong style="color: rgb(255, 153, 0);">terminal</strong>.</p>
        <p>Thank you for choosing our <strong style="color: rgb(255, 153, 0);">airline</strong> and we look forward to serving you again.</p>

      </div>
    </div>

    <div class="info">

      <h3>一、核心词汇</h3>
      <p><strong style="color: rgb(0, 102, 204);">land [lænd] n.</strong> 陆地 vi. 登陆；到达</p>
      <p><strong style="color: rgb(0, 102, 204);">temperature [temprətʃə(r)] n. </strong>温度</p>
      <p><strong style="color: rgb(0, 102, 204);">degree [dɪˈgriː] n. </strong>程度；度</p>
      <p><strong style="color: rgb(0, 102, 204);">Celsius [,selsɪəs] adj. </strong>摄氏的 n. 摄氏度</p>
      <p><strong style="color: rgb(0, 102, 204);">Fahrenheit [ˈfær(ə)nhaɪt] adj.</strong> 华氏的 n. 华氏度</p>
      <p><strong style="color: rgb(0, 102, 204);">taxi [,tæksɪ] n. </strong>出租车 vt.&amp;vi.（飞机）缓慢滑行</p>
      <p><strong style="color: rgb(0, 102, 204);">remain [rɪˈmeɪn] vi. </strong>保持；依然 n. 遗迹；剩余物；残骸</p>
      <p><strong style="color: rgb(0, 102, 204);">sign [saɪn] n. </strong>符号；记号；指示牌</p>
      <p><strong style="color: rgb(0, 102, 204);">disembark [ˌdɪsɪmˈbɑ:rk] vi. </strong>登陆，下（车、船、飞机）</p>
      <p><strong style="color: rgb(0, 102, 204);">belonging [bɪˈlɔŋɪŋ] n. </strong>所有物；行李</p>
      <p><strong style="color: rgb(0, 102, 204);">baggage [,bægɪdʒ] n. </strong>行李</p>
      <p><strong style="color: rgb(0, 102, 204);">claim [kleɪm] vt. </strong>声称；索取；认领</p>
      <p><strong style="color: rgb(0, 102, 204);">area [,eərɪə] n. </strong>区域</p>
      <p><strong style="color: rgb(0, 102, 204);">passenger [ˈpæsəndʒɚ] n. </strong>乘客，旅客</p>
      <p><strong style="color: rgb(0, 102, 204);">connect [kəˈnekt] vt.&amp;vi. </strong>连接</p>
      <p><strong style="color: rgb(0, 102, 204);">transfer [ˈtrænsfɚ] vt.&amp;vi. </strong>转移；转让 n. 转移；转让</p>
      <p><strong style="color: rgb(0, 102, 204);">counter [ˈkaʊntɚ] n. </strong>柜台</p>
      <p><strong style="color: rgb(0, 102, 204);">terminal [ˈtɜ:rmɪnl] n. </strong>终点；末端；航站楼</p>
      <p><strong style="color: rgb(0, 102, 204);">airline [ˈerlaɪn] n. </strong>航空公司；航线</p>

      <h3>二、核心表达</h3>
      <p><strong style="color: rgb(255, 153, 0);">have just done sth. </strong>刚刚做某事（现在完成时态）</p>
      <p><strong style="color: rgb(255, 153, 0);">Beijing Capital International Airport</strong> 北京首都国际机场</p>
      <p><strong style="color: rgb(255, 153, 0);">remain + adj.</strong> 保持某种状态</p>
      <p><strong style="color: rgb(255, 153, 0);">keep sth. + adj.</strong> 使某物保持某种状态</p>
      <p><strong style="color: rgb(255, 153, 0);">turn off</strong> 关闭</p>
      <p><strong style="color: rgb(255, 153, 0);">checked baggage</strong> 交运行李</p>
      <p><strong style="color: rgb(255, 153, 0);">baggage claim area</strong> 行李提取处</p>
      <p><strong style="color: rgb(255, 153, 0);">connecting flight</strong> 转接班机（转机）</p>
      <p><strong style="color: rgb(255, 153, 0);">transfer counter</strong> 中转柜台</p>
      <p><strong style="color: rgb(255, 153, 0);">look forward to doing sth. </strong>期待做某事</p>

      <h3>四、参考译文</h3>
      <p>女士们、先生们： 我们的航班已经抵达北京首都国际机场。</p>
      <p>现在是当地时间晚上 8 点。室外温度为 摄氏 30 度，华氏 86 度。</p>
      <p>飞机还需要滑行一段时间，在“系好安全带”指示灯关闭 前，请您保持安全带扣好。</p>
      <p>下飞机时，请带好您的全部手提物品。您的交运行李 请在行李提取处领取。</p>
      <p>需从本站转乘飞机去其它地方的旅客，请到机场中转柜台 办理。 </p>
      <p>感谢您选乘我们的航班，期待再次为您服务。（下次旅途再会。）</p>

    </div>

  </div>
</template>

<script>

import Aplayer from 'vue-aplayer'

export default {
  name: 'Lesson4',
  components: {
    Aplayer
  }
}
</script>
