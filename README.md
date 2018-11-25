# vue-z-confirm

## Install
npm install vue-z-confirm --save

## Usage
```main.js
import VueZConfirm from 'vue-z-confirm'
Vue.use(VueZConfirm)
```

``` use
this.$confirm(`是否删除地址？`, {
    yesBtnText: '是',
    cancelBtnText: '否'
}).then(() => {
    // 点是
    console.log('是')
}).catch(() => {
    // 点否
    console.log('否')
})
```

