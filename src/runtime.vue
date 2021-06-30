<template>
  <div class="box">
    <div class="text">lazy-route-loader</div>
    <div class="load-more-box">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'runtime',
  mounted () {
    const name = this.$route.name
    const img = new Image()
    img.src = `/start?name=${name}`
  }
}
</script>

<style lang="css" scoped>
.box{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text{
  font-size: 18px;
  color: #33363F;
}

.load-more-box {
  height:40px;
  line-height:40px;
  position:relative;
  text-align:center;
}
.load-more-box span {
  width:5px;
  height:5px;
  margin:0 1px;
  display:inline-block;
  vertical-align:middle;
  background:#000000;
  animation:load-more-box 1.5s  infinite ease-in-out;
}
.load-more-box span:nth-child(2) {
  animation-delay:.2s;
}
.load-more-box span:nth-child(3) {
  animation-delay:.4s;
}
.load-more-box span:nth-child(4) {
  animation-delay:.6s;
}
.load-more-box span:nth-child(5) {
  animation-delay:.8s;
}
@keyframes load-more-box {
  0% {
    height:5px;
    background:#333333;
  }
  25% {
    height:30px;
    background:#cccccc;
  }
  50% {
    height:5px;
    background:#333333;
  }
  100% {
    height:5px;
    background:#333333;
  }
}

</style>
