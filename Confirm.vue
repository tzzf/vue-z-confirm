<template>
    <transition name="fade">
        <div class="confirm-wrap" v-if="visible">
            <div class="confirm">
              <div class="content">
                {{content}}
              </div>
              <div class="confirm-btn">
                  <div class="btn btn-primary" @click="handleAction('yes')">{{yesBtnText}}</div>
                  <div class="btn btn-default" @click="handleAction('cancel')">{{cancelBtnText}}</div>
              </div>
            </div>
            <div class="backdrop" @click="handleAction('close')"></div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'MyConfirm',
  data() {
    return {
      visible: false,
      content: '',
      yesBtnText: '确定',
      cancelBtnText: '取消',
      promiseStatus: null
    };
  },
  methods: {
    confirm(content, options) {
      this.content = content;
      const { yesBtnText, cancelBtnText } = options;
      this.yesBtnText = yesBtnText;
      this.cancelBtnText = cancelBtnText;
      let _this = this;
      this.visible = true;
      return new Promise(function(resolve, reject) {
        _this.promiseStatus = { resolve, reject };
      });
    },
    handleAction(action) {
      this.visible = false;
      if (action === 'yes') {
        this.promiseStatus && this.promiseStatus.resolve();
      } else {
        this.promiseStatus && this.promiseStatus.reject();
      }
    }
  }
};
</script>
<style lang="css" scoped>
.fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}
.fade.in {
  opacity: 1;
}

.confirm-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  opacity: 1;
  transition: opacity 0.3s;
  z-index: 9999;
}
.confirm-wrap::after {
  content: '';
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.confirm {
  position: relative;
  display: inline-block;
  width: 420px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
  z-index: 999;
}
.content {
  width: 100%;
  padding: 20px 15px;
  text-align: center;
}
.confirm-btn {
  display: flex;
  height: 60px;
  border-top: 1px solid #e0e0e0;
}
.btn {
  flex-grow: 1;
  line-height: 60px;
  text-align: center;
}
.btn-default {
  border-left: 1px solid #e0e0e0;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
</style>
