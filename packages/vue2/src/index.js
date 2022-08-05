// Import vue component
import Accordion from "./components/Accordion.vue";
import AccordionItem from "./components/AccordionItem.vue";
import Alert from "./components/Alert.vue";
import "./styles/main.scss"

// install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;

	Vue.component('ElasticAccordion', Accordion);
	Vue.component('ElasticAccordionItem', AccordionItem);
	Vue.component('ElasticAlert', Alert);
}

// Create module definition for Vue.use()
const plugin = {
	install,
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export {Accordion, AccordionItem, Alert};  

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;