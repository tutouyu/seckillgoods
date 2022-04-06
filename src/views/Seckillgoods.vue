<template>
  <div class="seckillgoods">
    <div class="nav">
      <span class="title">三湘银行秒杀系统</span>
      <span class="user"
        >欢迎你，<span class="username" @click="topersonal">{{ state.username }}</span></span
      >
      <el-button class="out" @click="out">退出</el-button>
    </div>
    <div class="tip">&nbsp;&nbsp;WELCOME TO BANK OF SANXIANG</div>
    <div class="activities">
      <div class="activityNav">
        <span>Activity</span>
        <span>Total:{{ state.activities.length }}</span>
      </div>
      <div
        v-for="(item, index) in state.activities"
        :key="index"
        class="activitie"
      >
        <div class="info">{{ item.name }}</div>
        <div class="info">
          {{ item.starttime }}&nbsp;~&nbsp;{{ item.endtime }}
        </div>
        <div class="introduction">{{ item.introduction }}</div>
        <el-button style="margin-top: 5px">申请</el-button>
        <el-button style="margin-top: 5px" @click="toActivity">参加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup(props, { emit }) {
    let router = useRouter();
    let store = useStore();
    let state = reactive({
      username: "余嘉威",
      activities: [
        {
          id: 1,
          name: "秒杀第一场",
          starttime: "2022/4/5 12:00",
          endtime: "2022/4/5 13:00",
          introduction:
            "立即开启我请问请问请问请问撒大苏打特委托今儿看来七五为了钱可见其我立刻就去我立刻看来我请假九二卡拉奇我尽快",
        },
        {
          id: 1,
          name: "秒杀第一场",
          starttime: "2022/4/5 12:00",
          endtime: "2022/4/5 13:00",
          introduction:
            "立即开启我请问请问请问请问撒大苏打特委托今儿看来七五为了钱可见其我立刻就去我立刻看来我请假九二卡拉奇我尽快",
        },
        {
          id: 1,
          name: "秒杀第一场",
          starttime: "2022/4/5 12:00",
          endtime: "2022/4/5 13:00",
          introduction:
            "立即开启我请问请问请问请问撒大苏打特委托今儿看来七五为了钱可见其我立刻就去我立刻看来我请假九二卡拉奇我尽快",
        },
        {
          id: 1,
          name: "秒杀第一场",
          starttime: "2022/4/5 12:00",
          endtime: "2022/4/5 13:00",
          introduction:
            "立即开启我请问请问请问请问撒大苏打特委托今儿看来七五为了钱可见其我立刻就去我立刻看来我请假九二卡拉奇我尽快",
        },
        {
          id: 1,
          name: "秒杀第一场",
          starttime: "2022/4/5 12:00",
          endtime: "2022/4/5 13:00",
          introduction:
            "立即开启我请问请问请问请问撒大苏打特委托今儿看来七五为了钱可见其我立刻就去我立刻看来我请假九二卡拉奇我尽快",
        },
        {
          id: 1,
          name: "秒杀第一场",
          starttime: "2022/4/5 12:00",
          endtime: "2022/4/5 13:00",
          introduction:
            "立即开启我请问请问请问请问撒大苏打特委托今儿看来七五为了钱可见其我立刻就去我立刻看来我请假九二卡拉奇我尽快",
        },
        {
          id: 1,
          name: "秒杀第一场",
          starttime: "2022/4/5 12:00",
          endtime: "2022/4/5 13:00",
          introduction:
            "立即开启我请问请问请问请问撒大苏打特委托今儿看来七五为了钱可见其我立刻就去我立刻看来我请假九二卡拉奇我尽快",
        },
        {
          id: 1,
          name: "秒杀第一场",
          starttime: "2022/4/5 12:00",
          endtime: "2022/4/5 13:00",
          introduction:
            "立即开启我请问请问请问请问撒大苏打特委托今儿看来七五为了钱可见其我立刻就去我立刻看来我请假九二卡拉奇我尽快",
        },
      ],
    });
    const topersonal=function(){
      router.push({ path: "/User" });
    }
    const out = function () {
      router.push({ path: "/Home" });
    };
    const toActivity = function () {
      router.push({ path: "/Goodspage" });
    };
    return {
      state,
      store,
      out,
      toActivity,
      topersonal
    };
  },
});
</script>

<style lang="scss" scoped>
.seckillgoods {
  height: 100vh;
  width: 60vw;
  margin: 0 auto;
  .nav {
    position: relative;
    text-align: center;
    height: 80px;
    line-height: 80px;
    font-size: bold;
    font-size: 30px;
    .title {
      float: left;
    }
    .user {
      font-size: 15px;
      position: absolute;
      right:110px;
      top:0;
      bottom:0;
      .username {
        color: rgb(137, 137, 224);
      }
    }
    .out {
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
  .activities {
    margin: 30px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .activityNav {
      width: 100%;
      height: 30px;
      margin: 20px 5px;
      display: flex;
      font-size: 20px;
      font-weight: bold;
      justify-content: space-between;
      border-bottom: 1px solid rgba($color: #dbd6d6, $alpha: 0.8);
    }
    .activitie {
      width: 45%;
      border: 1px rgb(211, 209, 209) solid;
      border-radius: 5px;
      padding: 20px;
      margin: 20px;
      .introduction {
        padding: 10px 20px;
        text-align: left;
      }
      .info {
        padding: 5px;
      }
    }
  }
}
</style>