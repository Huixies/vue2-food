<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/title.png" alt="" class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button @click="onSubmit" type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      email:'',
      password:'',
    }
  },
  methods:{
    onSubmit(){
      this.http.get('/users.json')
               .then(res => {
                const data = res.data
                const users = []
                for(let key in data){
                  const user = data[key]
                  users.push(user)
                }

                let result = users.filter((user)=>{
                  return user.email ===this.email &&
                  user.password === this.password;
                })

                //判断result的长度是否大于0
                if(result != null && result.length >0){
                  this.$router.push('/')
                }else{
                  alert("账号或密码错误")
                }
              })
    }
  }
}
</script>

<style scoped>

</style>