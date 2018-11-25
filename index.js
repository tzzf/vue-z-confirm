import Confirm from './Confirm.vue';

const VueZConfirm = {}
VueZConfirm.install = (Vue) => {
  const ConfirmBox = Vue.extend(Confirm);
  const instance = new ConfirmBox();
	instance.$mount(document.createElement('div'));
	document.body.appendChild(instance.$el);
  Vue.prototype.$confirm = (content, options) => {
    return instance.confirm(content, options);
  };
};

export default VueZConfirm;