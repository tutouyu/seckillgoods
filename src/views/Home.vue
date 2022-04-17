<template>
  <div class="home">
    <div class="login">
      <div class="title">三湘银行秒杀系统</div>
      <el-input v-model="state.account" placeholder="账号" class="account" />
      <el-input
        v-model="state.password"
        type="password"
        placeholder="密码"
        class="password"
        show-password
      />
      <div class="button">
        <el-button @click="login">登录</el-button>
        <el-button @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { loginuser, registeruser } from "../network/user";
import { ref, defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup(props, { emit }) {
    let router = useRouter();
        let store = useStore();
    let state = reactive({
      account: "",
      password: "",
    });
    const login = function () {
      loginuser(state.password,state.account).then((res:any) => {
        console.log(res);
        let data=res.data;
        store.commit('setUser',data)
        router.push({ path: "/Seckillgoods" });
      });
    };
    const register = function () {
      router.push({ path: "/Register" });
    };
    return {
      store,
      state,
      login,
      register,
    };
  },
});
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  height: 100vh;
  background: url("../assets/bank.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  .login {
    border-radius: 8px;
    background-color: white;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    .title {
      text-align: center;
      height: 60px;
      line-height: 60px;
      font-size: bold;
    }
    .account {
      width: 90%;
      margin: 5px 0;
    }
    .password {
      width: 90%;
      margin: 5px 0;
    }
    .button {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>