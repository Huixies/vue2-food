<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家</h1>
        <h2>pppdf</h2>
        <button @click="goToMenu" class="btn btn-success">返回</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goToMenu(){}
  }
}
</script>

<style scoped>
  #home {
    background: url('../assets/library.jpg') 100%;
    height: 80vh;
    padding: 10%;
    border-radius: 10px;
    margin-top: 5%;
  }

  h1,h2 {
    margin: 6%;
  }

  .background {
    padding: 10%;
    background-color: #eee;
    opacity: 0.8;
    max-width: 70vw;
    border-radius: 10px
  };
</style>