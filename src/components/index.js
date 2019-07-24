import Vue from 'vue';
import $ from 'jquery'

import gswBadge from './badge/gswBadge.vue';


gswBadge.install = Vue => Vue.component(gswBadge.name, gswBadge);

const components = [
  gswBadge,
]

const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    })

}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    gswBadge,
};
