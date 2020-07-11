export default {
  // state
  state: {
    isCollapse: false,
    menu: [],
    // 当前目录
    currentMenu: {},
    // tab列表
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "home"
      }
    ]
  },
  // 方法
  mutations: {
    // 点击后将val传进来
    selectMenu(state, val) {
      if (val.name !== "home") {
        state.currentMenu = val;
        // 判断是否存在？然后添加
        let result = state.tabsList.findIndex(item => item.name === val.name);
        result === -1 ? state.tabsList.push(val) : "";
      } else {
        state.currentMenu = null;
      }
    },
    closeTab(state, val) {
      // 找到并删除
      let result = state.tabsList.findIndex(item => item.name === val.name);
      state.tabsList.splice(result, 1);
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {}
};
