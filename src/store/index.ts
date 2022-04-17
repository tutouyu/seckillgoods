import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      avatar: '', id: 1, nickname: '', username: '', password: '', sex: 0,
    }
  },
  mutations: {
    setUser: (state: any, { avatar, id, nickName, userName, password, sex }) => {
      state.user.avatar = avatar;
      state.user.id = id;
      state.user.nickname = nickName;
      state.user.username = userName;
      state.user.password = password;
      if(sex==1){
        state.user.sex = '男';
      }else{
        state.user.sex = '女';
      }
      
    },
  },
  actions: {
  },
  modules: {
  }
})
