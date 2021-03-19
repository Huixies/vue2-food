<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td><button @click="addToBasket(item,option)"
            class="btn btn-sm btn-outline-success">+</button></td>
          </tr>
        </tbody>   
      </table>
    </div>
    
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length > 0">
         <table class="table">
        <thead class="thead-default">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody v-for="item in baskets" :key="item.name">
          <tr>
            <td>
              <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
              <span>{{item.quantity}}</span>
              <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
            </td>
            <td>{{item.name}}{{item.size}}</td>
            <td>{{item.price * item.quantity}}</td>
          </tr>
        </tbody> 
      </table>
      <p>总价:{{total+"RMB"}}</p>
      <button class="btn btn-success btn-block">提交</button>
    </div>
    <div v-else>
      请选择商品
    </div>
  </div>  
  </div>
</template>

<script>
export default {
  data(){
    return {
      baskets:[],
      getMenuItems: {
       1: {
         'name':'读者',
         'description':'知识杀手',
         'options':[
           {'size':1,'price':38},{'size':4,'price':48}
         ]
       },
       2: {
         'name':'意林',
         'description':'知识杀手',
         'options':[
           {'size':2,'price':38},{'size':5,'price':48}
         ]
       },
       3: {
         'name':'青年文摘',
         'description':'知识杀手',
         'options':[
           {'size':3,'price':38},{'size':6,'price':48}
         ]
       },
      }
    }
  },
  computed:{
    total(){
      let totalCost = 0;

      for(let index in this.baskets){
        let individualItem = this.baskets[index];
        totalCost += individualItem.quantity * individualItem.price;
      }

      return totalCost
    }
  },
  methods: {
    addToBasket(item,option){
      let basket = {
        name:item.name,
        size:option.size,
        price:option.price,
        quantity:1
      }
      if(this.baskets.length > 0){
        //过滤
        let result = this.baskets.filter(basket => {
          return (basket.name === item.name && basket.price === option.price)
        })

        if(result != null && result.length > 0){
          result[0].quantity++
        }else{
          this.baskets.push(basket)
        }
      }else{
        this.baskets.push(basket)
      }
    },
    decreaseQuantity(item){
      item.quantity--
      if(item.quantity <= 0){
        this.removeFromBasket(item)
      }
    },
    increaseQuantity(item){
      item.quantity++
    },
    removeFromBasket(item){
      this.baskets.splice(this.baskets.indexOf(item),1)
    }
  }
}
</script>

<style scoped>

</style>