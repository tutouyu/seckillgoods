<template>
  <div class="goodspage">
    <div class="title">
      <span class="name">活动名称</span>
      <el-button class="back" @click="back">返回</el-button>
    </div>
    <div class="tip">&nbsp;&nbsp;WELCOME TO ACTIVITY OF SECKILLGOODS</div>
    <div class="goodslist">
      <div class="goodsnav">
        <span>商品列表</span>
        <span>倒计时：1:59:34</span>
      </div>
      <div class="good" v-for="(item, index) in state.goods" :key="index">
        <div class="name">{{ item.productName }}</div>
        <div class="img"><img :src="item.img" alt="" /></div>
        <div class="num">库存：{{ item.availableStock }}</div>
        <div class="description">描述：{{ item.productDescription }}</div>
        <div class="price">
          {{ item.originalPrice }}元&nbsp;<del>{{ item.spikePrice }}元</del>
        </div>
        <el-button @click="spike(index)">秒杀</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { spikegood } from "../network/good";
import {
  getendactivity,
  getstartactivity,
  getoningactivity,
  applyactivity,
  attendactivity,
  getactivitygood,
} from "../network/activity.js";
export default defineComponent({
  setup(props, { emit }) {
    let router = useRouter();
    let route = useRoute();
    let store = useStore();
    let state = reactive({
      goods: [],
    });
    getactivitygood(route.query.id).then((res) => {
      state.goods = res.data;
    });
    const back = function () {
      router.push({ path: "/Seckillgoods" });
    };
    const spike = function (index) {
      spikegood(state.goods[index].id, store.state.user.id).then((res) => {
        console.log(res);
      });
    };
    return {
      state,
      back,
      spike,
    };
  },
});
</script>

<style lang="scss" scoped>
.goodspage {
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
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .goodsnav {
      margin: 30px 10px;
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      font-weight: bold;
      border-bottom: 1px solid rgba($color: #dbd6d6, $alpha: 0.8);
    }
    .good {
      margin: 20px 0;
      font-size: 20px;
      .img {
        img {
          border-radius: 15px;
          width: 260px;
          height: 300px;
        }
      }
      .name {
        padding: 10px;
      }
      .price {
        padding: 5px;
      }
      .num {
        padding: 5px;
      }
    }
  }
}
</style>