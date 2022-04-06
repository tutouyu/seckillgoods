<template>
  <div class="user">
    <div class="title">
      <span class="name">个人中心</span>
      <el-button class="back" @click="back">返回</el-button>
    </div>
    <div class="tip">&nbsp;&nbsp;WELCOME TO PERSONAL CENTER</div>
    <div class="userinfo">
      <div class="infoitem"><span>名字：</span></div>
      <div class="infoitem"><span>性别：</span></div>
      <div class="infoitem"><span>电话：</span></div>
      <div class="infoitem"><span>邮箱：</span></div>
      <div class="infoitem"><span>地址：</span></div>
      <div class="infoitem"><span>身份证：</span></div>
    </div>
    <div class="orders">
       <div class="title" style="font-size:20px;font-weight:bold">&nbsp;&nbsp;历史订单</div>
    </div>
    <el-table :data="state.orders" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="price" label="Price" />
    </el-table>
  </div>
</template>

<script lang="ts" scoped>
import { ref, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup(props, { emit }) {
    let router = useRouter();
    let state = reactive({
      orders : [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    price: 999,

  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    price: 999,
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    price: 999,
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    price: 999,
  },
]
    });
    const back = function () {
      router.push({ path: "/Seckillgoods" });
    };
    return {
      state,
      back,
    };
  },
});
</script>

<style lang="scss">
.user {
  margin: 0 auto;
  width: 60vw;
  .title {
    position: relative;
    height: 80px;
    line-height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 30px;
      font-weight: bold;
    }
    .back {
      line-height: 80px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 30px;
      margin: auto;
    }
  }
  .tip {
    width: 100%;
    height: 50px;
    text-align: left;
    line-height: 50px;
    border-radius: 12px;
    box-shadow: 5px 5px 2px #888888;
    border: 1px solid rgba($color: #dbd6d6, $alpha: 0.8);
  }
  .userinfo {
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    width: 100%;
    height: 250px;
    border-radius: 12px;
    box-shadow: 5px 5px 2px #888888;
    border: 1px solid rgba($color: #dbd6d6, $alpha: 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    .infoitem {
    }
  }
}
</style>