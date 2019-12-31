解决element-ui > el-tab-pane与vue@2.6.0不兼容,导致 
el-tab-pane 与 el-dialog 组合浏览器卡死的问题。

Resolved that element-ui > el-tab-pane was incompatible with vue@2.6.0, resulting in
el-tab-pane and el-dialog combined browser stuck problem.

- vue@2.6.0  
- element-ui@2.13.0

## Install
```shell
npm install el-tab-pane-ext -s
// or
yarn add el-tab-pane-ext -s
```

## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'element-ui'
import ElTabPaneExt from 'el-tab-pane-ext'

Vue.use(Element)
Vue.use(ElTabPaneExt)
```

``` javascript
<el-tabs v-model="tabs">
  <el-tab-pane-ext label="tab1" name="tab1">
     <template v-slot:content>
      <h1>Hello 1</h1>
    </template>
  </el-tab-pane-ext>
  <el-tab-pane-ext label="tab2" name="tab2">
     <template v-slot:content>
      <h1>Hello 2</h1>
    </template>
  </el-tab-pane-ext>
</el-tabs>
```

## LICENSE
[MIT](LICENSE)