import TabPane from './src/tab-pane.vue'

/* istanbul ignore next */
TabPane.install = function (Vue) {
  Vue.component('el-tab-pane-ext', TabPane);
};

export default TabPane;
