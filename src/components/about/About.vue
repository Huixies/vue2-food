<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 -->
        <div class="list-group mb-5">
          <div class="nav-link">
            <router-link class="list-group-item list-group-item-action" to="/about/history">
              历史订单
            </router-link>
          </div>
          <div class="nav-link">
            <router-link class="list-group-item list-group-item-action" to="/about/contact">
              联系我们
            </router-link>
          </div>
          <div class="nav-link">
            <router-link class="list-group-item list-group-item-action" to="/about/delivery">
              点餐文档
            </router-link>
          </div>
          <div class="nav-link">
            <router-link class="list-group-item list-group-item-action" to="/about/orderinguide">
              快递信息
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-8">
        <!-- 导航所对应的内容 -->
        <router-view></router-view>
      </div>
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>