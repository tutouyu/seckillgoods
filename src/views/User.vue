<template>
  <div class="user">
    <div class="title">
      <span class="name">个人中心</span>
      <el-button class="back" @click="back">返回</el-button>
    </div>
    <div class="tip">&nbsp;&nbsp;WELCOME TO PERSONAL CENTER</div>
    <div class="userinfo">
      <div class="infoitem">
        <span>id：{{ store.state.user.id }}</span>
      </div>
      <div class="infoitem">
        <span>名字：{{ store.state.user.username }}</span>
      </div>
      <div class="infoitem">
        <span>性别：{{ store.state.user.sex }}</span>
      </div>
      <div class="infoitem">
        <span>昵称：{{ store.state.user.nickname }}</span>
      </div>
      <div class="infoitem">
        <span>头像：{{ store.state.user.avatar }}</span>
      </div>
    </div>
    <div class="orders">
      <div class="title" style="font-size: 20px; font-weight: bold">
        &nbsp;&nbsp;历史订单
      </div>
    </div>
    <el-table :data="state.orders" style="width: 100%">
      <el-table-column prop="createTime" label="createTime" />
      <el-table-column prop="id" label="id" />
      <el-table-column prop="productName" label="productName" />
      <el-table-column prop="productCount" label="productCount" />
      <el-table-column prop="spikePrice" label="spikePrice" />
      <el-table-column prop="productCount" label="productCount" />
      <el-table-column prop="totalPrice" label="totalPrice" />
      <el-table-column label="Operations">
        <template #default="scope">
          <div style="display: flex; flex-wrap: wrap">
            <el-button
              size="small"
              style="margin-left: 12px"
              @click="handleEdit(scope.$index, scope.row)"
              >支付</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >取消</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" scoped>
import { ref, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { payorder, getorder, cancelorder } from "../network/order";
export default defineComponent({
  setup(props, { emit }) {
    let router = useRouter();
    let store = useStore();
    let state = reactive({
      orders: [],
    });
    getorder(store.state.user.id).then((res: any) => {
      console.log(res);
      state.orders = res.data;
    });
    const handleEdit = (index: number, row: any) => {
      payorder(state.orders[index].id).then((res) => {
        console.log(res);
        alert("支付成功");
      });
    };
    const handleDelete = (index: number, row: any) => {
      cancelorder(state.orders[index].id).then((res) => {
        console.log(res);
        alert("取消成功");
      });
    };

    const back = function () {
      router.push({ path: "/Seckillgoods" });
    };
    return {
      store,
      state,
      back,
      handleEdit,
      handleDelete
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