<template>
  <div>
    Admin
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:"1111"
    }
  },
  //异步操作 在data渲染完毕后执行
  // beforeRouteEnter (to, from, next) {
  //   next(vm=>{
  //     alert("Hello" + vm.name);
  //   })
  // }

  // beforeRouteLeave (to, from, next) {
  //   if(confirm("确定离开么？") == true){
  //     next()
  //   }else{
  //     next(false)
  //   }
  // }
}
</script>

<style scoped>

</style>