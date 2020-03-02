<template>
  <div class="home">
    <el-row>
      <el-col :span="12">
        <div class="content">
          <h4>
            Find Your Greatness
          </h4>
          <p>
            Greatness. It’s just something we made up.
            Somehow we’ve come to believe that greatness is a gift,
            <span style="color:#FF9900;"><strong>reserved</strong></span> for a chosen few - for <span style="color:#FF9900;"><strong>prodigies</strong></span>, for superstars - and the <span style="color:#FF9900;"><strong>rest</strong></span> of us can only stand by watching. You can forget that. Greatness is not some <span style="color:#FF9900;"><strong>rare</strong></span> DNA strand. It’s not some <span style="color:#FF9900;"><strong>precious</strong></span> thing. Greatness is no more <span style="color:#FF9900;"><strong>unique</strong></span> to us than breathing. We’re all <span style="color:#FF9900;"><strong>capable</strong></span> of it, all of us.
          </p>
        </div>
      </el-col>
      <el-col :span="12">

        <div class="info">

          <h4>一、核心词汇</h4>
          <p><span class="key-word">make up</span> 编造</p>
          <p><span class="key-word">gift</span> [gɪft] n. 礼物；天赋</p>
          <p><span class="key-word">reserve</span> [rɪ`zɜːv] vt.保留；预留</p>
          <p><span class="key-word">prodigy</span> [,prɑdədʒi] n. 奇才</p>
          <p><span class="key-word">DNA</span> 基因（deoxyribonucleic acid，脱氧核糖核酸）</p>
          <p><span class="key-word">strand</span> [strænd] n. 线；串；缕</p>
          <p><span class="key-word">precious</span> [,preʃəs] adj. 宝贵的；珍贵的</p>
          <p><span class="key-word">unique</span> [juː`niːk] adj. 唯一的；独一无二的</p>
          <p><span class="key-word">capable</span> [,keɪpəb(ə)l] adj. 能干的，能胜任的</p>

          <h4>二、核心表达</h4>
          <p><span class="key-word">come to do sth.</span> 过来做某事/ 渐渐做某事</p>
          <p><span class="key-word">be reserved for sb.</span> 为某人预留</p>
          <p><span class="key-word">be no more… than…</span> 不比……更……</p>
          <p><span class="key-word">be capable of sth. / doing sth.</span> 有能力做某事</p>

        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Lesson1',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
.content {
  padding: 100px 20px;
  text-align: left;
  font-size: 20px;
  line-height: 24px;
}

.info {
  text-align: left;
  font-size: 18px;
  line-height: 22px;
}

.key-word {
  color: brown;
  font-weight: bold;
}
</style>
