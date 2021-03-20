<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <NewPizza />
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza';

export default {
  data(){
    return {
      name:"1111",
      // getMenuItems:[]
    }
  },
  components:{
    NewPizza
  },
  methods:{
    deleteData(item){
      fetch("https://vue2-library-default-rtdb.firebaseio.com/menu/"+item.id+"/.json",{
        method:"DELETE",
        headers:{
          'Contnent-type':'application/json'
        }
      })
      .then(res=>res.json())
      .then(data=>this.$store.commit('removeMenuItems',item))
      .catch(err=>console.log(err))
    }
  },
  computed:{
    getMenuItems:{
      get(){
        return this.$store.getters.getMenuItems
      },
      set(){

      }
    }
  },
  created(){
    fetch("https://vue2-library-default-rtdb.firebaseio.com/menu.json")
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      let menuArray = [];
      for(let key in data){
        data[key].id = key;
        menuArray.push(data[key])
      }
      //数据同步
      this.$store.commit('setMenuItems',menuArray)
      // this.getMenuItems = menuArray
    })
  }
}
</script>

<style scoped>

</style>