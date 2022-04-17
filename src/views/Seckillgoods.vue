<template>
  <div class="seckillgoods">
    <div class="nav">
      <span class="title">三湘银行秒杀系统</span>
      <span class="user"
        >欢迎你，<span class="username" @click="topersonal">{{
          store.state.user.username
        }}</span></span
      >
      <el-button class="out" @click="out">退出</el-button>
    </div>
    <div class="tip">&nbsp;&nbsp;WELCOME TO BANK OF SANXIANG</div>
    <div class="activities">
      <div class="activityNav">
        <span>Activity</span>
        <span>Total:{{ state.startactivities.length }}</span>
      </div>
      <el-tabs
        v-model="activeName"
        type="card"
        class="demo-tabs"
        @tab-click="handleClick"
        style="width: 100%"
      >
        <el-tab-pane label="即将上线" name="first">
          <div
            v-for="(item, index) in state.startactivities"
            :key="index"
            class="activitie"
          >
            <div class="info">{{ item.activityName }}</div>
            <div class="info">
              {{ item.startTime }}&nbsp;~&nbsp;{{ item.endTime }}
            </div>
            <div>{{ item.activityDescription }}</div>
            <el-button style="margin-top: 15px" @click="apply(index)"
              >申请</el-button
            >
          </div>
        </el-tab-pane>
        <el-tab-pane label="正在进行" name="second"
          ><div
            v-for="(item, index) in state.oningactivities"
            :key="index"
            class="activitie"
          >
            <div class="info">{{ item.activityName }}</div>
            <div class="info">
              {{ item.startTime }}&nbsp;~&nbsp;{{ item.endTime }}
            </div>
            <div>{{ item.activityDescription }}</div>
            <el-button style="margin-top: 15px" @click="applying(index)"
              >申请</el-button
            >
            <el-button style="margin-top: 15px" @click="toActivity(index)"
              >参加</el-button
            >
          </div></el-tab-pane
        >
        <el-tab-pane label="已经下线" name="third"
          ><div
            v-for="(item, index) in state.endactivities"
            :key="index"
            class="activitie"
          >
            <div class="info">{{ item.activityName }}</div>
            <div class="info">
              {{ item.startTime }}&nbsp;~&nbsp;{{ item.endTime }}
            </div>
            <div>{{ item.activityDescription }}</div>
          </div></el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
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
    let store = useStore();
    let state = reactive({
      startactivities: [],
      oningactivities: [],
      endactivities: [],
    });
    const activeName = ref("first");
    //即将开始活动
    getstartactivity().then((res) => {
      state.startactivities = res.data;
    });

    const apply = function (index) {
      console.log(store.state.user.id, state.startactivities[index].id);
      applyactivity(store.state.user.id, state.startactivities[index].id).then(
        (res) => {
          console.log(res);
        }
      );
    };
    //正在进行活动
    getoningactivity().then((res) => {
      state.oningactivities = res.data;
    });
    const applying = function (index) {
      console.log(store.state.user.id, state.oningactivities[index].id);
      applyactivity(store.state.user.id, state.oningactivities[index].id).then(
        (res) => {
          console.log(res);
        }
      );
    };
    const toActivity = function (index) {
      attendactivity(store.state.user.id, state.oningactivities[index].id).then(
        (res) => {
          router.push({
            path: "/Goodspage",
            query: {
              id: state.oningactivities[index].id,
            },
          });
        }
      );
    };
    //已经结束活动
    getendactivity().then((res) => {
      state.endactivities = res.data;
    });
    const topersonal = function () {
      router.push({ path: "/User" });
    };
    const out = function () {
      router.push({ path: "/Home" });
    };

    return {
      state,
      store,
      activeName,
      applying,
      apply,
      out,
      toActivity,
      topersonal,
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
      right: 110px;
      top: 0;
      bottom: 0;
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
      .info {
        margin: 15px;
      }
    }
  }
}
</style>